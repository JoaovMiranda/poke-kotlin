import kotlinx.browser.*
import kotlinx.dom.*
import org.w3c.dom.*
import org.w3c.xhr.*

val API_URL = "https://pokeapi.co/api/v2"

val generationValues: List<String> =
    listOf(
        "GenerationI",
        "GenerationII",
        "GenerationIII",
        "GenerationIV",
        "GenerationV",
        "GenerationVI",
        "GenerationVII",
        "GenerationVIII",
        "GenerationPlus")

val generationKeys: List<String> =
    listOf(
        "1ª Geração",
        "2ª Geração",
        "3ª Geração",
        "4ª Geração",
        "5ª Geração",
        "6ª Geração",
        "7ª Geração",
        "8ª Geração",
        "Outros")

val typeValues: List<String> =
    listOf(
        "Normal",
        "Fire",
        "Water",
        "Electric",
        "Grass",
        "Ice",
        "Fighting",
        "Poison",
        "Ground",
        "Flying",
        "Psychic",
        "Bug",
        "Rock",
        "Ghost",
        "Dragon",
        "Dark",
        "Steel",
        "Fairy")

val typeKeys: List<String> =
    listOf(
        "Normal",
        "Fogo",
        "Água",
        "Elétrico",
        "Grama",
        "Gelo",
        "Lutador",
        "Venenoso",
        "Terra",
        "Voador",
        "Psíquico",
        "Inseto",
        "Pedra",
        "Fantasma",
        "Dragão",
        "Noturno",
        "Metálico",
        "Fada")

val listStoragePokemon: MutableList<Pokemon> = mutableListOf()

val listStorageImagePokemon: MutableList<Sprites> = mutableListOf()

data class AllAPIPokemon(
    val count: Int,
    val next: String,
    val previous: String?,
    val results: Array<Pokemon>
)

data class TypeAPIPokemon(
    val damage_relations: Any,
    val game_indices: Array<Any>,
    val generation: Any,
    val id: Int,
    val move_damage_class: Any,
    val moves: Array<Any>,
    val name: String,
    val names: Array<Any>,
    val pokemon: Array<TypePokemonResult>
)

data class TypePokemonResult(val pokemon: Pokemon, val slot: Int)

data class Pokemon(val name: String, val url: String)

data class PokemonInfo(
    val height: Int,
    val id: Int,
    val name: String,
    val weight: Int,
    val coverUrl: String,
    val type: MutableList<String>,
    val abilities: MutableList<String>
)

data class PokemonAPI(
    val abilities: Array<Abilities>,
    val base_experience: Int,
    val forms: Array<Any>,
    val game_indices: Array<Any>,
    val height: Int,
    val held_items: Array<Any>,
    val id: Int,
    val is_default: Boolean,
    val location_area_encounters: String,
    val moves: Array<Any>,
    val name: String,
    val order: Int,
    val past_types: Array<Any>,
    val species: Any,
    val sprites: Sprites,
    val stats: Array<Stats>,
    val types: Array<Types>,
    val weight: Int
)

data class Types(val slot: Int, val type: Pokemon)

data class Abilities(val ability: Pokemon, val is_hidden: Boolean, val slot: Int)

data class Sprites(
    val back_default: String,
    val back_female: String,
    val back_shiny: String,
    val back_shiny_female: String,
    val front_default: String,
    val front_female: String,
    val front_shiny: String,
    val front_shiny_female: String,
    val other: Any
)

data class Stats(val base_stat: Int, val effort: Int, val stat: Any)

interface PokemonList {
  interface View {
    fun showPokemons(pokemons: List<Pokemon>)
    fun showPokemonByUrl(pokemon: PokemonInfo)
    fun notFoundList()
    fun showLoader()
    fun hideLoader()
  }

  interface Presenter {
    fun attach(view: View)
    fun loadPokemons(limit: Int = 151, offset: Int = 0)
    fun loadPokemonsByUrl(pokemonUrl: String)
    fun loadPokemonsByType(typeCode: Int)
    // DEVERIAM ESTAR NO CONTROLLER
    fun getImage(pokemonAPI: PokemonAPI): Sprites
    fun getTypes(pokemonAPI: PokemonAPI): MutableList<String>
    fun getAbilities(pokemonAPI: PokemonAPI): MutableList<String>
    fun getStats(pokemonAPI: PokemonAPI): MutableList<Int>
    fun manipuleData(responseList: List<PokemonAPI>): PokemonInfo
    // ------------------------
  }

  interface Controller {}
}

class PokemonListPage(private val presenter: PokemonList.Presenter) : PokemonList.View {

  private val onLoad = document.getElementById("loader") as HTMLDivElement
  private val content = document.getElementById("content") as HTMLDivElement
  private val myModal = document.getElementById("myModal") as HTMLDivElement

  private val cardBuilder = CardBuilder()
  private val modalBuilder = ModalBuilder()

  fun show(limit: Int = 151, offset: Int = 0) {
    presenter.attach(this)
    presenter.loadPokemons(limit, offset)
  }

  fun showByUrl(pokemonUrl: String) {
    presenter.attach(this)
    presenter.loadPokemonsByUrl(pokemonUrl)
  }

  fun showByType(pokemonType: Int) {
    presenter.attach(this)
    presenter.loadPokemonsByType(pokemonType)
  }

  fun modalConfig() {
    showModal()
    window.onclick =
        { event ->
          if (event.target == myModal) {
            hideModal()
            removeElement("containerElement")
          }
        }
  }

  override fun showPokemons(pokemons: List<Pokemon>) {
    removeElement("notFoundCard")
    pokemons.forEach { content.appendChild(cardBuilder.build(it)) }
  }

  override fun showPokemonByUrl(pokemon: PokemonInfo) {
    modalConfig()
    myModal.appendChild(modalBuilder.build(pokemon))
  }

  override fun notFoundList() {
    val notFoundCard = document.createElement("div") as HTMLDivElement
    notFoundCard.innerHTML = "Não conseguimos encontrar resultado para essa busca."
    notFoundCard.setAttribute("id", "notFoundCard")
    // notFoundCard.classList.add("eightbit-btn")
    content.appendChild(notFoundCard)
  }

  override fun showLoader() {
    onLoad.style.visibility = "visible"
  }

  override fun hideLoader() {
    onLoad.style.visibility = "hidden"
  }

  fun showModal() {
    myModal.style.display = "block"
  }

  fun hideModal() {
    myModal.style.display = "none"
  }
}

class PokemonPresenter : PokemonList.Presenter {

  private lateinit var view: PokemonList.View

  override fun attach(view: PokemonList.View) {
    this.view = view
  }

  override fun loadPokemons(limit: Int, offset: Int) {
    view.showLoader()

    getAsyncGambi(returnAllUrl(limit, offset)) { response ->
      if (response !== "error") {

        val pokemons = JSON.parse<Array<AllAPIPokemon>>(response)

        val pokemonstoList = pokemons[0].results.toList()

        if (pokemonstoList.size == 0) {
          view.notFoundList()
        } else {
          storageList(pokemonstoList)
          view.showPokemons(pokemonstoList)
        }
      }
      view.hideLoader()
    }
  }

  override fun loadPokemonsByType(typeCode: Int) {
    view.showLoader()

    getAsyncGambi(returnTypeUrl(typeCode)) { response ->
      if (response !== "error") {

        val pokemons = JSON.parse<Array<TypeAPIPokemon>>(response)

        val pokemonstoList = pokemons[0].pokemon.toList()

        val mutableListState: MutableList<Pokemon> = mutableListOf()

        pokemonstoList.forEach { mutableListState.add(it.pokemon) }

        storageList(mutableListState)

        view.showPokemons(mutableListState)
      }
      view.hideLoader()
    }
  }

  private fun storageSprites(sprites: Sprites) {
    listStorageImagePokemon.clear()
    listStorageImagePokemon.add(sprites)
  }

  override fun getImage(pokemonAPI: PokemonAPI): Sprites {
    val spritesMutableList: MutableList<Sprites> = mutableListOf(pokemonAPI.sprites)
    storageSprites(pokemonAPI.sprites)
    return spritesMutableList[0]
  }

  override fun getTypes(pokemonAPI: PokemonAPI): MutableList<String> {
    val typesList = pokemonAPI.types.toList()
    val typeMutableList: MutableList<Pokemon> = mutableListOf()
    val typeMutableList2: MutableList<String> = mutableListOf()
    typesList.forEach { types -> typeMutableList.add(types.type) }
    typeMutableList.forEach { type -> typeMutableList2.add(type.name) }

    return typeMutableList2
  }

  override fun getAbilities(pokemonAPI: PokemonAPI): MutableList<String> {
    val typesList = pokemonAPI.abilities.toList()
    val abilitiesMutableList: MutableList<Pokemon> = mutableListOf()
    val abilitiesMutableList2: MutableList<String> = mutableListOf()
    typesList.forEach { types -> abilitiesMutableList.add(types.ability) }
    abilitiesMutableList.forEach { type -> abilitiesMutableList2.add(type.name) }

    return abilitiesMutableList2
  }

  override fun getStats(pokemonAPI: PokemonAPI): MutableList<Int> {
    val statsList = pokemonAPI.stats.toList()
    val statsMutableList: MutableList<Int> = mutableListOf()
    statsList.forEach { stats -> statsMutableList.add(stats.base_stat) }

    return statsMutableList
  }

  override fun manipuleData(responseList: List<PokemonAPI>): PokemonInfo {
    val mainList = responseList[0]

    val abilities = getAbilities(mainList)
    val height = mainList.height
    val id = mainList.id
    val name = mainList.name
    val weight = mainList.weight
    val coverUrl = ifHasImage(getImage(mainList).front_default)
    val type = getTypes(mainList)
    val stats = getStats(mainList)

    return PokemonInfo(height, id, name, weight, coverUrl, type, abilities)
  }

  fun ifHasImage(frontImage: String = "failed"): String {
    return if (frontImage !== "failed") {
      frontImage
    } else {
      "assets/img/no_image_avaliable.png"
    }
  }

  override fun loadPokemonsByUrl(pokemonUrl: String) {
    view.showLoader()

    getAsyncGambi(pokemonUrl) { response ->
      if (response !== "error") {
        val pokemon = JSON.parse<Array<PokemonAPI>>(response)

        val responseList = pokemon.toList()

        val manipuledData = manipuleData(responseList)

        view.showPokemonByUrl(manipuledData)
      }
      view.hideLoader()
    }
  }

  private fun getAsyncGambi(url: String, callback: (String) -> Unit) {
    val xmlHttp = XMLHttpRequest()

    fun onSuccessHandler(): Unit {
      return callback.invoke("[" + xmlHttp.responseText + "]")
    }

    fun onErrorHandler(): Unit {
      showErrorDialog("Houve um erro de conexão 😠. Tente novamente 😞.")
      return callback.invoke("error")
    }

    fun onNotFoundHandler(): Unit {
      showErrorDialog("Não conseguimos encontrar esse resultado 😓.")
      return callback.invoke("error")
    }

    fun onTimeoutHandler(): Unit {
      showErrorDialog("Tempo de conexão esgotado 😥. Tente novamente mais tarde 🙄.")
      return callback.invoke("error")
    }

    fun onLoadHandler(): Unit {
      if (xmlHttp.readyState == 4.toShort() && xmlHttp.status == 200.toShort()) {
        onSuccessHandler()
      } else if (xmlHttp.status == 404.toShort()) {
        onNotFoundHandler()
      }
    }

    xmlHttp.open("GET", url)

    xmlHttp.timeout = 5000

    xmlHttp.onload = { onLoadHandler() }

    xmlHttp.onerror = { onErrorHandler() }

    xmlHttp.ontimeout = { onTimeoutHandler() }

    xmlHttp.send()
  }

  private fun storageList(pokemonsList: List<Pokemon>) {
    listStoragePokemon.clear()
    pokemonsList.forEach { listStoragePokemon.add(it) }
  }
}

class CardBuilder {

  fun build(pokemon: Pokemon): Element {
    val containerElementCard = document.createElement("div") as HTMLDivElement

    val titleElement = document.createElement("span") as HTMLSpanElement

    val idElement = document.createElement("span") as HTMLSpanElement

    containerElementCard.setAttribute("id", "containerElementCard")

    bind(
        pokemon = pokemon, containerElementCard, titleElement = titleElement, idElement = idElement)

    applyStyle(containerElementCard, titleElement = titleElement, idElement = idElement)

    containerElementCard.appendChild(titleElement, idElement)

    return containerElementCard
  }

  private fun applyStyle(
      containerElement: HTMLDivElement,
      titleElement: HTMLSpanElement,
      idElement: HTMLSpanElement
  ) {
    containerElement.classList.add("card", "ripple", "card-shadow", "eightbit-btn")
    titleElement.classList.add("text-title", "float-left", "game-font")
    idElement.classList.add("id-details", "float-right", "game-font")
  }

  private fun bind(
      pokemon: Pokemon,
      containerElementCard: HTMLDivElement,
      titleElement: HTMLSpanElement,
      idElement: HTMLSpanElement
  ) {
    containerElementCard.setAttribute("title", "#${pokemon.url.split("/")[6]}")
    titleElement.innerText = "${pokemon.name}"
    idElement.innerText = "#${pokemon.url.split("/")[6]}"
    containerElementCard.addEventListener(
        "click",
        {
          initSound("bit_2")
          initPage().showByUrl(pokemon.url)
        })

    containerElementCard.addEventListener("mouseover", { initSound("bit_1") })
    // containerElementCard.addEventListener(
    //     "mouseout",
    //     {
    //       val openingAudio = Audio("assets/song/opening-root.mp3") as HTMLAudioElement
    //       openingAudio.pause()
    //       openingAudio.currentTime = 0.0
    //     })
  }

  private fun Element.appendChild(vararg elements: Element) {
    elements.forEach { this.appendChild(it) }
  }
}

fun initSound(song: String) {
  val audio = Audio("assets/song/${song}.mp3") as HTMLAudioElement
  audio.play()
}

class ModalBuilder {

  fun build(pokemon: PokemonInfo): Element {
    val containerElement = document.createElement("div") as HTMLDivElement

    val coverUrl = document.createElement("img") as HTMLImageElement

    val type = document.createElement("div") as HTMLDivElement

    val name = document.createElement("div") as HTMLDivElement

    val id = document.createElement("div") as HTMLDivElement

    val height = document.createElement("div") as HTMLDivElement

    val weight = document.createElement("div") as HTMLDivElement

    // -------------
    val abilitiesElement = document.createElement("div") as HTMLDivElement
    // -------------

    // -------
    val containerElementButtonSprite = document.createElement("div") as HTMLDivElement
    val femButton = document.createElement("button") as HTMLButtonElement
    val mascButton = document.createElement("button") as HTMLButtonElement
    val rotateButton = document.createElement("button") as HTMLButtonElement
    // -------

    val nextButton = document.createElement("button") as HTMLButtonElement

    val previousButton = document.createElement("button") as HTMLButtonElement

    bind(
        pokemon = pokemon,
        height = height,
        id = id,
        name = name,
        type = type,
        coverUrl = coverUrl,
        weight = weight,
        femButton = femButton,
        mascButton = mascButton,
        rotateButton = rotateButton,
        nextButton = nextButton,
        previousButton = previousButton,
        abilitiesElement = abilitiesElement,
        containerElementButtonSprite = containerElementButtonSprite)

    applyStyle(
        containerElement,
        height = height,
        id = id,
        name = name,
        type = type,
        coverUrl = coverUrl,
        weight = weight,
        femButton = femButton,
        mascButton = mascButton,
        rotateButton = rotateButton,
        nextButton = nextButton,
        previousButton = previousButton,
        abilitiesElement = abilitiesElement,
        containerElementButtonSprite = containerElementButtonSprite)

    setAttributes(
        pokemon = pokemon,
        containerElement,
        coverUrl = coverUrl,
        femButton = femButton,
        previousButton = previousButton,
        nextButton = nextButton,
        rotateButton = rotateButton)

    val abilitiesHover = document.createElement("div") as HTMLDivElement
    abilitiesHover.innerHTML = "<span class=\"hover-abilitie\">⚔</span>"
    abilitiesHover.addEventListener("mouseover", { abilitiesElement.classList.remove("hidden") })
    abilitiesHover.addEventListener("mouseout", { abilitiesElement.classList.add("hidden") })

    containerElement.appendChild(
        coverUrl,
        type,
        name,
        id,
        height,
        weight,
        containerElementButtonSprite,
        previousButton,
        nextButton,
        abilitiesHover,
        abilitiesElement)

    return containerElement
  }

  private fun applyStyle(
      containerElement: HTMLDivElement,
      height: HTMLDivElement,
      id: HTMLDivElement,
      name: HTMLDivElement,
      type: HTMLDivElement,
      coverUrl: HTMLImageElement,
      weight: HTMLDivElement,
      femButton: HTMLButtonElement,
      mascButton: HTMLButtonElement,
      rotateButton: HTMLButtonElement,
      nextButton: HTMLButtonElement,
      previousButton: HTMLButtonElement,
      abilitiesElement: HTMLDivElement,
      containerElementButtonSprite: HTMLDivElement
  ) {

    containerElement.classList.add("modal-content", returnTypeColor(type.children[0]?.textContent))
    coverUrl.classList.add("card-cover-image")
    name.classList.add("card-pokemon-name", "float-center", "toUpper", "game-font")
    type.classList.add("card-list", "game-font")
    height.classList.add("game-font", "card-list-height")
    id.classList.add("card-id", "game-font")
    weight.classList.add("game-font", "card-list-height")
    femButton.classList.add("sprite-button", "fem-button")
    mascButton.classList.add("sprite-button", "masc-button")
    rotateButton.classList.add("sprite-button", "rotate-button")
    nextButton.classList.add("pass-button", "next-button")
    previousButton.classList.add("pass-button", "previous-button")
    abilitiesElement.classList.add("hidden", "abilities-div")
    containerElementButtonSprite.classList.add("content-sprite-button")
  }

  private fun bind(
      pokemon: PokemonInfo,
      height: HTMLDivElement,
      id: HTMLDivElement,
      name: HTMLDivElement,
      type: HTMLDivElement,
      coverUrl: HTMLImageElement,
      weight: HTMLDivElement,
      femButton: HTMLButtonElement,
      mascButton: HTMLButtonElement,
      rotateButton: HTMLButtonElement,
      nextButton: HTMLButtonElement,
      previousButton: HTMLButtonElement,
      abilitiesElement: HTMLDivElement,
      containerElementButtonSprite: HTMLDivElement
  ) {
    val modal = document.getElementById("myModal") as HTMLDivElement

    height.innerHTML = returnHeight(pokemon.height)

    id.innerHTML = "#${pokemon.id.toString()}"

    name.innerHTML = pokemon.name

    type.innerHTML = pokemon.type.joinToString(separator = "") { returnListTypes(it) }

    abilitiesElement.innerHTML =
        pokemon.abilities.joinToString(separator = "") { returnListAbilities(it) }

    coverUrl.src = pokemon.coverUrl

    weight.innerHTML = returnWeight(pokemon.weight)

    femButton.innerHTML = "<i class=\"fa fa-lg fa-venus\"></i>"

    mascButton.innerHTML = "<i class=\"fa fa-lg fa-mars\"></i>"

    rotateButton.innerHTML = "<i class=\"fa fa-lg fa-sync-alt\"></i>"

    nextButton.innerHTML = "<i class=\"fa fa-lg fa-step-forward\"></i>"

    previousButton.innerHTML = "<i class=\"fa fa-lg fa-step-backward\"></i>"

    rotateButton.addEventListener(
        "click",
        {
          initSound("bit_4")
          if (coverUrl.src.split("/")[8] == "back") {
            if (coverUrl.src.split("/")[9] == "female") {
              coverUrl.setAttribute("src", "${listStorageImagePokemon[0].front_female}")
            } else {
              coverUrl.setAttribute("src", "${listStorageImagePokemon[0].front_default}")
            }
          } else {
            if (coverUrl.src.split("/")[8] == "female") {
              coverUrl.setAttribute("src", "${listStorageImagePokemon[0].back_female}")
            } else {
              if (listStorageImagePokemon[0].back_default == null) {
                coverUrl.setAttribute("src", "assets/img/no_image_avaliable.png")
              } else {
                coverUrl.setAttribute("src", "${listStorageImagePokemon[0].back_default}")
              }
            }
          }
        })

    femButton.addEventListener(
        "click",
        {
          initSound("bit_4")
          coverUrl.setAttribute("src", "${listStorageImagePokemon[0].front_female}")
        })

    mascButton.addEventListener(
        "click",
        {
          initSound("bit_4")
          coverUrl.setAttribute("src", "${listStorageImagePokemon[0].front_default}")
        })

    nextButton.addEventListener(
        "click",
        {
          initSound("bit_3")
          removeElement("containerElement")
          initPage().showByUrl(returnByIdUrl(pokemon.id + 1))
        })

    previousButton.addEventListener(
        "click",
        {
          initSound("bit_3")
          removeElement("containerElement")
          initPage().showByUrl(returnByIdUrl(pokemon.id - 1))
        })

    containerElementButtonSprite.appendChild(rotateButton, mascButton, femButton)
  }

  private fun setAttributes(
      pokemon: PokemonInfo,
      containerElement: HTMLDivElement,
      coverUrl: HTMLImageElement,
      femButton: HTMLButtonElement,
      previousButton: HTMLButtonElement,
      nextButton: HTMLButtonElement,
      rotateButton: HTMLButtonElement
  ) {
    coverUrl.setAttribute("alt", "Pokemon de frente")

    coverUrl.setAttribute("draggable", "false")

    containerElement.setAttribute("id", "containerElement")

    if (listStorageImagePokemon[0].front_female == null) {
      femButton.setAttribute("disabled", "true")
    }

    if (listStorageImagePokemon[0].back_default == null) {
      rotateButton.setAttribute("disabled", "true")
    }

    if (pokemon.id == 1 || pokemon.id == 10001) {
      previousButton.setAttribute("disabled", "true")
    }

    if (pokemon.id == 898 || pokemon.id == 10220) {
      nextButton.setAttribute("disabled", "true")
    }
  }

  private fun returnTypeColor(type: String?): String = "type-${type}"

  private fun returnListTypes(type: String): String = "<li class=\"type-${type}\">${type}</li>"

  private fun returnListAbilities(abilities: String): String =
      "<li class=\"abilities-${abilities}\">${abilities}</li>"

  private fun returnHeight(height: Int): String =
      if (height.toString().length > 2)
          "Altura: ${height.toString()[0]}${height.toString()[1]},${height.toString()[2]}m"
      else if (height.toString().length > 1)
          "Altura: ${height.toString()[0]},${height.toString()[1]}m"
      else "Altura: 0.${height.toString()}m"

  private fun returnWeight(weight: Int): String =
      when (weight.toString().length) {
        1 -> "Peso: 0,${weight.toString()[0]}kg"
        2 -> "Peso: ${weight.toString()[0]},${weight.toString()[1]}kg"
        3 -> "Peso: ${weight.toString()[0]}${weight.toString()[1]},${weight.toString()[2]}kg"
        4 ->
            "Peso: ${weight.toString()[0]}${weight.toString()[1]}${weight.toString()[2]},${weight.toString()[3]}kg"
        else -> "Peso: ????,?kg"
      }

  private fun Element.appendChild(vararg elements: Element) {
    elements.forEach { this.appendChild(it) }
  }
}

fun showErrorDialog(typeError: String) {
  val errorDialog = document.getElementById("errorDialog") as HTMLDivElement
  val errorDialogContent = document.getElementById("errorDialogContent") as HTMLDivElement
  errorDialogContent.innerText = typeError
  errorDialog.classList.remove("hidden")
  errorDialog.classList.add("loader")
}

fun returnAllUrl(limit: Int = 151, offset: Int = 0): String =
    "${API_URL}/pokemon?limit=${limit}&offset=${offset}"

fun returnTypeUrl(type: Int = 1): String = "${API_URL}/type/${type}/"

fun returnByIdUrl(id: Int = 1): String = "${API_URL}/pokemon/${id}/"

fun returnByNameUrl(name: String = "bulbasaur"): String = "${API_URL}/pokemon/${name}/"

fun initPage(): PokemonListPage = PokemonListPage(PokemonPresenter())

fun removeElement(id: String) {
  val elementToDestroy = document.getElementById("${id}")
  elementToDestroy?.remove()
  elementToDestroy?.parentNode?.removeChild(elementToDestroy)
}

fun destroyOldList() {
  val content = document.getElementById("content") as HTMLDivElement
  callToDestroy(content.childElementCount, "containerElementCard")
}

fun destroyOldSelect() {
  val selectGeneration = document.getElementById("selectGeneration") as HTMLSelectElement
  callToDestroy(selectGeneration.childElementCount, "optionInsert")
}

fun callToDestroy(value: Int, id: String) {
  (0..(value - 1)).toList().forEach { removeElement("${id}") }
}

fun getValueGeneration(generation: String) =
    when (generation) {
      "GenerationI" -> arrayOf(151, 0)
      "GenerationII" -> arrayOf(100, 151)
      "GenerationIII" -> arrayOf(135, 251)
      "GenerationIV" -> arrayOf(107, 386)
      "GenerationV" -> arrayOf(156, 493)
      "GenerationVI" -> arrayOf(72, 649)
      "GenerationVII" -> arrayOf(88, 721)
      "GenerationVIII" -> arrayOf(89, 809)
      else -> arrayOf(220, 898)
    }

fun getValueType(type: String) =
    when (type) {
      "Normal" -> 1
      "Fighting" -> 2
      "Flying" -> 3
      "Poison" -> 4
      "Ground" -> 5
      "Rock" -> 6
      "Bug" -> 7
      "Ghost" -> 8
      "Steel" -> 9
      "Fire" -> 10
      "Water" -> 11
      "Grass" -> 12
      "Electric" -> 13
      "Psychic" -> 14
      "Ice" -> 15
      "Dragon" -> 16
      "Dark" -> 17
      else -> 18
    }

fun searchByValue(generation: String) {
  destroyOldList()
  if (generation.length >= 11) {
    val rangeForSearch = getValueGeneration(generation)
    initPage().show(rangeForSearch[0], rangeForSearch[1])
  } else {
    initPage().showByType(getValueType(generation))
  }
}

fun initButtonElements() {
  val searchGeneratioButton = document.getElementById("searchGeneratioButton") as HTMLButtonElement
  val ascButton = document.getElementById("ascButton") as HTMLButtonElement
  val descButton = document.getElementById("descButton") as HTMLButtonElement
  val generationButton = document.getElementById("generationButton") as HTMLButtonElement
  val typeButton = document.getElementById("typeButton") as HTMLButtonElement
  val selectGeneration = document.getElementById("selectGeneration") as HTMLSelectElement
  val randomizeButton = document.getElementById("randomizeButton") as HTMLButtonElement
  val close_modal = document.getElementById("close_modal") as HTMLButtonElement
  val errorDialog = document.getElementById("errorDialog") as HTMLDivElement
  val pokemonById = document.getElementById("pokemonById") as HTMLInputElement

  initEventButton(
      searchGeneratioButton,
      ascButton,
      descButton,
      generationButton,
      typeButton,
      selectGeneration,
      randomizeButton,
      close_modal,
      errorDialog,
      pokemonById)
}

fun initEventButton(
    searchGeneratioButton: HTMLButtonElement,
    ascButton: HTMLButtonElement,
    descButton: HTMLButtonElement,
    generationButton: HTMLButtonElement,
    typeButton: HTMLButtonElement,
    selectGeneration: HTMLSelectElement,
    randomizeButton: HTMLButtonElement,
    close_modal: HTMLButtonElement,
    errorDialog: HTMLDivElement,
    pokemonById: HTMLInputElement
) {

  pokemonById.addEventListener("keyup", { initSound("digit") })

  randomizeButton.addEventListener(
      "click",
      {
        initSound("bit_5")
        initPage().showByUrl(returnByIdUrl((1..898).random()))
      })

  searchGeneratioButton.addEventListener(
      "click",
      {
        initSound("bit_5")
        removeElement("containerElement")
        searchGeneratioButtonEvent()
      })

  selectGeneration.addEventListener(
      "change",
      {
        initSound("select")
        searchByValue(selectGeneration.value)
      })

  ascButton.addEventListener("click", { sortList("asc") })

  descButton.addEventListener("click", { sortList("desc") })

  generationButton.addEventListener(
      "click",
      {
        initSound("bit_5")
        changeSelectButton("generation", generationButton, typeButton)
      })

  typeButton.addEventListener(
      "click",
      {
        initSound("bit_5")
        changeSelectButton("type", generationButton, typeButton)
      })

  close_modal.addEventListener("click", { toggleErrorDialogClass(errorDialog) })
}

fun toggleErrorDialogClass(errorDialog: HTMLDivElement) {
  errorDialog.classList.remove("loader")
  errorDialog.classList.add("hidden")
}

fun searchGeneratioButtonEvent() {
  val pokemonById = document.getElementById("pokemonById") as HTMLInputElement
  if (pokemonById.value !== null && pokemonById.value !== "") {
    try {
      initPage().showByUrl(returnByIdUrl(pokemonById.value.toInt()))
    } catch (nfe: NumberFormatException) {
      initPage().showByUrl(returnByNameUrl(pokemonById.value))
    }
  }
}

fun changeSelectButton(
    buttonEvent: String = "generation",
    generationButton: HTMLButtonElement,
    typeButton: HTMLButtonElement
) {
  if (buttonEvent == "type") {
    selectScreenVisor("tipo")
    searchByValue("Normal")
    generateOptionSelect("right")
    typeButton.setAttribute("disabled", "true")
    generationButton.removeAttribute("disabled")
  } else {
    selectScreenVisor("geração")
    searchByValue("GenerationI")
    generateOptionSelect("left")
    typeButton.removeAttribute("disabled")
    generationButton.setAttribute("disabled", "true")
  }
}

fun selectScreenVisor(selectValue: String) {
  val selectScreen = document.getElementById("selectScreen") as HTMLDivElement
  selectScreen.innerText = "Por ${selectValue}"
}

fun generateOption(
    selectGeneration: HTMLSelectElement,
    listValues: List<String>,
    listKeys: List<String>
) {
  listValues.forEachIndexed { index, element ->
    val option = document.createElement("option") as HTMLOptionElement
    option.setAttribute("id", "optionInsert")
    option.setAttribute("value", element)
    option.innerText = listKeys[index]
    selectGeneration.append(option)
  }
}

fun generateOptionSelect(option: String = "left") {
  val selectGeneration = document.getElementById("selectGeneration") as HTMLSelectElement
  destroyOldSelect()
  if (option == "left") {
    generateOption(selectGeneration, generationValues, generationKeys)
  } else {
    generateOption(selectGeneration, typeValues, typeKeys)
  }
}

// fun initSoundOpening() {
//   val openingAudio = Audio("assets/song/opening-root.mp3") as HTMLAudioElement
//   // openingAudio.play()
// }

fun sortList(option: String) {
  destroyOldList()
  if (option == "asc") {
    initPage().showPokemons(listStoragePokemon.asReversed())
  } else {
    initPage().showPokemons(listStoragePokemon)
  }
}

fun main() {
  // initSound("opening-root")
  initButtonElements()
  generateOptionSelect()
  initPage().show()
}
