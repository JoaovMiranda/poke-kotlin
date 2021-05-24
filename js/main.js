if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'main'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'main'.");
}var main = function (_, Kotlin) {
  'use strict';
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var equals = Kotlin.equals;
  var Unit = Kotlin.kotlin.Unit;
  var throwCCE = Kotlin.throwCCE;
  var throwUPAE = Kotlin.throwUPAE;
  var toList = Kotlin.kotlin.collections.toList_us0mfu$;
  var mutableListOf = Kotlin.kotlin.collections.mutableListOf_i5x0yv$;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var toShort = Kotlin.toShort;
  var split = Kotlin.kotlin.text.split_ip8yn$;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var toString = Kotlin.toString;
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  var toList_0 = Kotlin.kotlin.collections.toList_7wnvza$;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var NumberFormatException = Kotlin.kotlin.NumberFormatException;
  var asReversed = Kotlin.kotlin.collections.asReversed_vvxzk3$;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var Random = Kotlin.kotlin.random.Random;
  var random = Kotlin.kotlin.ranges.random_xmiyix$;
  var checkIndexOverflow = Kotlin.kotlin.collections.checkIndexOverflow_za3lpa$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var API_URL;
  var generationValues;
  var generationKeys;
  var typeValues;
  var typeKeys;
  var listStoragePokemon;
  var listStorageImagePokemon;
  function AllAPIPokemon(count, next, previous, results) {
    this.count = count;
    this.next = next;
    this.previous = previous;
    this.results = results;
  }
  AllAPIPokemon.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AllAPIPokemon',
    interfaces: []
  };
  AllAPIPokemon.prototype.component1 = function () {
    return this.count;
  };
  AllAPIPokemon.prototype.component2 = function () {
    return this.next;
  };
  AllAPIPokemon.prototype.component3 = function () {
    return this.previous;
  };
  AllAPIPokemon.prototype.component4 = function () {
    return this.results;
  };
  AllAPIPokemon.prototype.copy_zf50yw$ = function (count, next, previous, results) {
    return new AllAPIPokemon(count === void 0 ? this.count : count, next === void 0 ? this.next : next, previous === void 0 ? this.previous : previous, results === void 0 ? this.results : results);
  };
  AllAPIPokemon.prototype.toString = function () {
    return 'AllAPIPokemon(count=' + Kotlin.toString(this.count) + (', next=' + Kotlin.toString(this.next)) + (', previous=' + Kotlin.toString(this.previous)) + (', results=' + Kotlin.toString(this.results)) + ')';
  };
  AllAPIPokemon.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.count) | 0;
    result = result * 31 + Kotlin.hashCode(this.next) | 0;
    result = result * 31 + Kotlin.hashCode(this.previous) | 0;
    result = result * 31 + Kotlin.hashCode(this.results) | 0;
    return result;
  };
  AllAPIPokemon.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.count, other.count) && Kotlin.equals(this.next, other.next) && Kotlin.equals(this.previous, other.previous) && Kotlin.equals(this.results, other.results)))));
  };
  function TypeAPIPokemon(damage_relations, game_indices, generation, id, move_damage_class, moves, name, names, pokemon) {
    this.damage_relations = damage_relations;
    this.game_indices = game_indices;
    this.generation = generation;
    this.id = id;
    this.move_damage_class = move_damage_class;
    this.moves = moves;
    this.name = name;
    this.names = names;
    this.pokemon = pokemon;
  }
  TypeAPIPokemon.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TypeAPIPokemon',
    interfaces: []
  };
  TypeAPIPokemon.prototype.component1 = function () {
    return this.damage_relations;
  };
  TypeAPIPokemon.prototype.component2 = function () {
    return this.game_indices;
  };
  TypeAPIPokemon.prototype.component3 = function () {
    return this.generation;
  };
  TypeAPIPokemon.prototype.component4 = function () {
    return this.id;
  };
  TypeAPIPokemon.prototype.component5 = function () {
    return this.move_damage_class;
  };
  TypeAPIPokemon.prototype.component6 = function () {
    return this.moves;
  };
  TypeAPIPokemon.prototype.component7 = function () {
    return this.name;
  };
  TypeAPIPokemon.prototype.component8 = function () {
    return this.names;
  };
  TypeAPIPokemon.prototype.component9 = function () {
    return this.pokemon;
  };
  TypeAPIPokemon.prototype.copy_svcqyu$ = function (damage_relations, game_indices, generation, id, move_damage_class, moves, name, names, pokemon) {
    return new TypeAPIPokemon(damage_relations === void 0 ? this.damage_relations : damage_relations, game_indices === void 0 ? this.game_indices : game_indices, generation === void 0 ? this.generation : generation, id === void 0 ? this.id : id, move_damage_class === void 0 ? this.move_damage_class : move_damage_class, moves === void 0 ? this.moves : moves, name === void 0 ? this.name : name, names === void 0 ? this.names : names, pokemon === void 0 ? this.pokemon : pokemon);
  };
  TypeAPIPokemon.prototype.toString = function () {
    return 'TypeAPIPokemon(damage_relations=' + Kotlin.toString(this.damage_relations) + (', game_indices=' + Kotlin.toString(this.game_indices)) + (', generation=' + Kotlin.toString(this.generation)) + (', id=' + Kotlin.toString(this.id)) + (', move_damage_class=' + Kotlin.toString(this.move_damage_class)) + (', moves=' + Kotlin.toString(this.moves)) + (', name=' + Kotlin.toString(this.name)) + (', names=' + Kotlin.toString(this.names)) + (', pokemon=' + Kotlin.toString(this.pokemon)) + ')';
  };
  TypeAPIPokemon.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.damage_relations) | 0;
    result = result * 31 + Kotlin.hashCode(this.game_indices) | 0;
    result = result * 31 + Kotlin.hashCode(this.generation) | 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.move_damage_class) | 0;
    result = result * 31 + Kotlin.hashCode(this.moves) | 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.names) | 0;
    result = result * 31 + Kotlin.hashCode(this.pokemon) | 0;
    return result;
  };
  TypeAPIPokemon.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.damage_relations, other.damage_relations) && Kotlin.equals(this.game_indices, other.game_indices) && Kotlin.equals(this.generation, other.generation) && Kotlin.equals(this.id, other.id) && Kotlin.equals(this.move_damage_class, other.move_damage_class) && Kotlin.equals(this.moves, other.moves) && Kotlin.equals(this.name, other.name) && Kotlin.equals(this.names, other.names) && Kotlin.equals(this.pokemon, other.pokemon)))));
  };
  function TypePokemonResult(pokemon, slot) {
    this.pokemon = pokemon;
    this.slot = slot;
  }
  TypePokemonResult.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TypePokemonResult',
    interfaces: []
  };
  TypePokemonResult.prototype.component1 = function () {
    return this.pokemon;
  };
  TypePokemonResult.prototype.component2 = function () {
    return this.slot;
  };
  TypePokemonResult.prototype.copy_8qpo1n$ = function (pokemon, slot) {
    return new TypePokemonResult(pokemon === void 0 ? this.pokemon : pokemon, slot === void 0 ? this.slot : slot);
  };
  TypePokemonResult.prototype.toString = function () {
    return 'TypePokemonResult(pokemon=' + Kotlin.toString(this.pokemon) + (', slot=' + Kotlin.toString(this.slot)) + ')';
  };
  TypePokemonResult.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.pokemon) | 0;
    result = result * 31 + Kotlin.hashCode(this.slot) | 0;
    return result;
  };
  TypePokemonResult.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.pokemon, other.pokemon) && Kotlin.equals(this.slot, other.slot)))));
  };
  function Pokemon(name, url) {
    this.name = name;
    this.url = url;
  }
  Pokemon.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Pokemon',
    interfaces: []
  };
  Pokemon.prototype.component1 = function () {
    return this.name;
  };
  Pokemon.prototype.component2 = function () {
    return this.url;
  };
  Pokemon.prototype.copy_puj7f4$ = function (name, url) {
    return new Pokemon(name === void 0 ? this.name : name, url === void 0 ? this.url : url);
  };
  Pokemon.prototype.toString = function () {
    return 'Pokemon(name=' + Kotlin.toString(this.name) + (', url=' + Kotlin.toString(this.url)) + ')';
  };
  Pokemon.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.url) | 0;
    return result;
  };
  Pokemon.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.url, other.url)))));
  };
  function PokemonInfo(height, id, name, weight, coverUrl, type, abilities) {
    this.height = height;
    this.id = id;
    this.name = name;
    this.weight = weight;
    this.coverUrl = coverUrl;
    this.type = type;
    this.abilities = abilities;
  }
  PokemonInfo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PokemonInfo',
    interfaces: []
  };
  PokemonInfo.prototype.component1 = function () {
    return this.height;
  };
  PokemonInfo.prototype.component2 = function () {
    return this.id;
  };
  PokemonInfo.prototype.component3 = function () {
    return this.name;
  };
  PokemonInfo.prototype.component4 = function () {
    return this.weight;
  };
  PokemonInfo.prototype.component5 = function () {
    return this.coverUrl;
  };
  PokemonInfo.prototype.component6 = function () {
    return this.type;
  };
  PokemonInfo.prototype.component7 = function () {
    return this.abilities;
  };
  PokemonInfo.prototype.copy_sdkjkg$ = function (height, id, name, weight, coverUrl, type, abilities) {
    return new PokemonInfo(height === void 0 ? this.height : height, id === void 0 ? this.id : id, name === void 0 ? this.name : name, weight === void 0 ? this.weight : weight, coverUrl === void 0 ? this.coverUrl : coverUrl, type === void 0 ? this.type : type, abilities === void 0 ? this.abilities : abilities);
  };
  PokemonInfo.prototype.toString = function () {
    return 'PokemonInfo(height=' + Kotlin.toString(this.height) + (', id=' + Kotlin.toString(this.id)) + (', name=' + Kotlin.toString(this.name)) + (', weight=' + Kotlin.toString(this.weight)) + (', coverUrl=' + Kotlin.toString(this.coverUrl)) + (', type=' + Kotlin.toString(this.type)) + (', abilities=' + Kotlin.toString(this.abilities)) + ')';
  };
  PokemonInfo.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.height) | 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.weight) | 0;
    result = result * 31 + Kotlin.hashCode(this.coverUrl) | 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.abilities) | 0;
    return result;
  };
  PokemonInfo.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.height, other.height) && Kotlin.equals(this.id, other.id) && Kotlin.equals(this.name, other.name) && Kotlin.equals(this.weight, other.weight) && Kotlin.equals(this.coverUrl, other.coverUrl) && Kotlin.equals(this.type, other.type) && Kotlin.equals(this.abilities, other.abilities)))));
  };
  function PokemonAPI(abilities, base_experience, forms, game_indices, height, held_items, id, is_default, location_area_encounters, moves, name, order, past_types, species, sprites, stats, types, weight) {
    this.abilities = abilities;
    this.base_experience = base_experience;
    this.forms = forms;
    this.game_indices = game_indices;
    this.height = height;
    this.held_items = held_items;
    this.id = id;
    this.is_default = is_default;
    this.location_area_encounters = location_area_encounters;
    this.moves = moves;
    this.name = name;
    this.order = order;
    this.past_types = past_types;
    this.species = species;
    this.sprites = sprites;
    this.stats = stats;
    this.types = types;
    this.weight = weight;
  }
  PokemonAPI.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PokemonAPI',
    interfaces: []
  };
  PokemonAPI.prototype.component1 = function () {
    return this.abilities;
  };
  PokemonAPI.prototype.component2 = function () {
    return this.base_experience;
  };
  PokemonAPI.prototype.component3 = function () {
    return this.forms;
  };
  PokemonAPI.prototype.component4 = function () {
    return this.game_indices;
  };
  PokemonAPI.prototype.component5 = function () {
    return this.height;
  };
  PokemonAPI.prototype.component6 = function () {
    return this.held_items;
  };
  PokemonAPI.prototype.component7 = function () {
    return this.id;
  };
  PokemonAPI.prototype.component8 = function () {
    return this.is_default;
  };
  PokemonAPI.prototype.component9 = function () {
    return this.location_area_encounters;
  };
  PokemonAPI.prototype.component10 = function () {
    return this.moves;
  };
  PokemonAPI.prototype.component11 = function () {
    return this.name;
  };
  PokemonAPI.prototype.component12 = function () {
    return this.order;
  };
  PokemonAPI.prototype.component13 = function () {
    return this.past_types;
  };
  PokemonAPI.prototype.component14 = function () {
    return this.species;
  };
  PokemonAPI.prototype.component15 = function () {
    return this.sprites;
  };
  PokemonAPI.prototype.component16 = function () {
    return this.stats;
  };
  PokemonAPI.prototype.component17 = function () {
    return this.types;
  };
  PokemonAPI.prototype.component18 = function () {
    return this.weight;
  };
  PokemonAPI.prototype.copy_x5ohe7$ = function (abilities, base_experience, forms, game_indices, height, held_items, id, is_default, location_area_encounters, moves, name, order, past_types, species, sprites, stats, types, weight) {
    return new PokemonAPI(abilities === void 0 ? this.abilities : abilities, base_experience === void 0 ? this.base_experience : base_experience, forms === void 0 ? this.forms : forms, game_indices === void 0 ? this.game_indices : game_indices, height === void 0 ? this.height : height, held_items === void 0 ? this.held_items : held_items, id === void 0 ? this.id : id, is_default === void 0 ? this.is_default : is_default, location_area_encounters === void 0 ? this.location_area_encounters : location_area_encounters, moves === void 0 ? this.moves : moves, name === void 0 ? this.name : name, order === void 0 ? this.order : order, past_types === void 0 ? this.past_types : past_types, species === void 0 ? this.species : species, sprites === void 0 ? this.sprites : sprites, stats === void 0 ? this.stats : stats, types === void 0 ? this.types : types, weight === void 0 ? this.weight : weight);
  };
  PokemonAPI.prototype.toString = function () {
    return 'PokemonAPI(abilities=' + Kotlin.toString(this.abilities) + (', base_experience=' + Kotlin.toString(this.base_experience)) + (', forms=' + Kotlin.toString(this.forms)) + (', game_indices=' + Kotlin.toString(this.game_indices)) + (', height=' + Kotlin.toString(this.height)) + (', held_items=' + Kotlin.toString(this.held_items)) + (', id=' + Kotlin.toString(this.id)) + (', is_default=' + Kotlin.toString(this.is_default)) + (', location_area_encounters=' + Kotlin.toString(this.location_area_encounters)) + (', moves=' + Kotlin.toString(this.moves)) + (', name=' + Kotlin.toString(this.name)) + (', order=' + Kotlin.toString(this.order)) + (', past_types=' + Kotlin.toString(this.past_types)) + (', species=' + Kotlin.toString(this.species)) + (', sprites=' + Kotlin.toString(this.sprites)) + (', stats=' + Kotlin.toString(this.stats)) + (', types=' + Kotlin.toString(this.types)) + (', weight=' + Kotlin.toString(this.weight)) + ')';
  };
  PokemonAPI.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.abilities) | 0;
    result = result * 31 + Kotlin.hashCode(this.base_experience) | 0;
    result = result * 31 + Kotlin.hashCode(this.forms) | 0;
    result = result * 31 + Kotlin.hashCode(this.game_indices) | 0;
    result = result * 31 + Kotlin.hashCode(this.height) | 0;
    result = result * 31 + Kotlin.hashCode(this.held_items) | 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.is_default) | 0;
    result = result * 31 + Kotlin.hashCode(this.location_area_encounters) | 0;
    result = result * 31 + Kotlin.hashCode(this.moves) | 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.order) | 0;
    result = result * 31 + Kotlin.hashCode(this.past_types) | 0;
    result = result * 31 + Kotlin.hashCode(this.species) | 0;
    result = result * 31 + Kotlin.hashCode(this.sprites) | 0;
    result = result * 31 + Kotlin.hashCode(this.stats) | 0;
    result = result * 31 + Kotlin.hashCode(this.types) | 0;
    result = result * 31 + Kotlin.hashCode(this.weight) | 0;
    return result;
  };
  PokemonAPI.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.abilities, other.abilities) && Kotlin.equals(this.base_experience, other.base_experience) && Kotlin.equals(this.forms, other.forms) && Kotlin.equals(this.game_indices, other.game_indices) && Kotlin.equals(this.height, other.height) && Kotlin.equals(this.held_items, other.held_items) && Kotlin.equals(this.id, other.id) && Kotlin.equals(this.is_default, other.is_default) && Kotlin.equals(this.location_area_encounters, other.location_area_encounters) && Kotlin.equals(this.moves, other.moves) && Kotlin.equals(this.name, other.name) && Kotlin.equals(this.order, other.order) && Kotlin.equals(this.past_types, other.past_types) && Kotlin.equals(this.species, other.species) && Kotlin.equals(this.sprites, other.sprites) && Kotlin.equals(this.stats, other.stats) && Kotlin.equals(this.types, other.types) && Kotlin.equals(this.weight, other.weight)))));
  };
  function Types(slot, type) {
    this.slot = slot;
    this.type = type;
  }
  Types.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Types',
    interfaces: []
  };
  Types.prototype.component1 = function () {
    return this.slot;
  };
  Types.prototype.component2 = function () {
    return this.type;
  };
  Types.prototype.copy_y0n4bb$ = function (slot, type) {
    return new Types(slot === void 0 ? this.slot : slot, type === void 0 ? this.type : type);
  };
  Types.prototype.toString = function () {
    return 'Types(slot=' + Kotlin.toString(this.slot) + (', type=' + Kotlin.toString(this.type)) + ')';
  };
  Types.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.slot) | 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    return result;
  };
  Types.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.slot, other.slot) && Kotlin.equals(this.type, other.type)))));
  };
  function Abilities(ability, is_hidden, slot) {
    this.ability = ability;
    this.is_hidden = is_hidden;
    this.slot = slot;
  }
  Abilities.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Abilities',
    interfaces: []
  };
  Abilities.prototype.component1 = function () {
    return this.ability;
  };
  Abilities.prototype.component2 = function () {
    return this.is_hidden;
  };
  Abilities.prototype.component3 = function () {
    return this.slot;
  };
  Abilities.prototype.copy_955716$ = function (ability, is_hidden, slot) {
    return new Abilities(ability === void 0 ? this.ability : ability, is_hidden === void 0 ? this.is_hidden : is_hidden, slot === void 0 ? this.slot : slot);
  };
  Abilities.prototype.toString = function () {
    return 'Abilities(ability=' + Kotlin.toString(this.ability) + (', is_hidden=' + Kotlin.toString(this.is_hidden)) + (', slot=' + Kotlin.toString(this.slot)) + ')';
  };
  Abilities.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.ability) | 0;
    result = result * 31 + Kotlin.hashCode(this.is_hidden) | 0;
    result = result * 31 + Kotlin.hashCode(this.slot) | 0;
    return result;
  };
  Abilities.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.ability, other.ability) && Kotlin.equals(this.is_hidden, other.is_hidden) && Kotlin.equals(this.slot, other.slot)))));
  };
  function Sprites(back_default, back_female, back_shiny, back_shiny_female, front_default, front_female, front_shiny, front_shiny_female, other) {
    this.back_default = back_default;
    this.back_female = back_female;
    this.back_shiny = back_shiny;
    this.back_shiny_female = back_shiny_female;
    this.front_default = front_default;
    this.front_female = front_female;
    this.front_shiny = front_shiny;
    this.front_shiny_female = front_shiny_female;
    this.other = other;
  }
  Sprites.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Sprites',
    interfaces: []
  };
  Sprites.prototype.component1 = function () {
    return this.back_default;
  };
  Sprites.prototype.component2 = function () {
    return this.back_female;
  };
  Sprites.prototype.component3 = function () {
    return this.back_shiny;
  };
  Sprites.prototype.component4 = function () {
    return this.back_shiny_female;
  };
  Sprites.prototype.component5 = function () {
    return this.front_default;
  };
  Sprites.prototype.component6 = function () {
    return this.front_female;
  };
  Sprites.prototype.component7 = function () {
    return this.front_shiny;
  };
  Sprites.prototype.component8 = function () {
    return this.front_shiny_female;
  };
  Sprites.prototype.component9 = function () {
    return this.other;
  };
  Sprites.prototype.copy_nl5z9r$ = function (back_default, back_female, back_shiny, back_shiny_female, front_default, front_female, front_shiny, front_shiny_female, other) {
    return new Sprites(back_default === void 0 ? this.back_default : back_default, back_female === void 0 ? this.back_female : back_female, back_shiny === void 0 ? this.back_shiny : back_shiny, back_shiny_female === void 0 ? this.back_shiny_female : back_shiny_female, front_default === void 0 ? this.front_default : front_default, front_female === void 0 ? this.front_female : front_female, front_shiny === void 0 ? this.front_shiny : front_shiny, front_shiny_female === void 0 ? this.front_shiny_female : front_shiny_female, other === void 0 ? this.other : other);
  };
  Sprites.prototype.toString = function () {
    return 'Sprites(back_default=' + Kotlin.toString(this.back_default) + (', back_female=' + Kotlin.toString(this.back_female)) + (', back_shiny=' + Kotlin.toString(this.back_shiny)) + (', back_shiny_female=' + Kotlin.toString(this.back_shiny_female)) + (', front_default=' + Kotlin.toString(this.front_default)) + (', front_female=' + Kotlin.toString(this.front_female)) + (', front_shiny=' + Kotlin.toString(this.front_shiny)) + (', front_shiny_female=' + Kotlin.toString(this.front_shiny_female)) + (', other=' + Kotlin.toString(this.other)) + ')';
  };
  Sprites.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.back_default) | 0;
    result = result * 31 + Kotlin.hashCode(this.back_female) | 0;
    result = result * 31 + Kotlin.hashCode(this.back_shiny) | 0;
    result = result * 31 + Kotlin.hashCode(this.back_shiny_female) | 0;
    result = result * 31 + Kotlin.hashCode(this.front_default) | 0;
    result = result * 31 + Kotlin.hashCode(this.front_female) | 0;
    result = result * 31 + Kotlin.hashCode(this.front_shiny) | 0;
    result = result * 31 + Kotlin.hashCode(this.front_shiny_female) | 0;
    result = result * 31 + Kotlin.hashCode(this.other) | 0;
    return result;
  };
  Sprites.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.back_default, other.back_default) && Kotlin.equals(this.back_female, other.back_female) && Kotlin.equals(this.back_shiny, other.back_shiny) && Kotlin.equals(this.back_shiny_female, other.back_shiny_female) && Kotlin.equals(this.front_default, other.front_default) && Kotlin.equals(this.front_female, other.front_female) && Kotlin.equals(this.front_shiny, other.front_shiny) && Kotlin.equals(this.front_shiny_female, other.front_shiny_female) && Kotlin.equals(this.other, other.other)))));
  };
  function Stats(base_stat, effort, stat) {
    this.base_stat = base_stat;
    this.effort = effort;
    this.stat = stat;
  }
  Stats.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Stats',
    interfaces: []
  };
  Stats.prototype.component1 = function () {
    return this.base_stat;
  };
  Stats.prototype.component2 = function () {
    return this.effort;
  };
  Stats.prototype.component3 = function () {
    return this.stat;
  };
  Stats.prototype.copy_qt1joh$ = function (base_stat, effort, stat) {
    return new Stats(base_stat === void 0 ? this.base_stat : base_stat, effort === void 0 ? this.effort : effort, stat === void 0 ? this.stat : stat);
  };
  Stats.prototype.toString = function () {
    return 'Stats(base_stat=' + Kotlin.toString(this.base_stat) + (', effort=' + Kotlin.toString(this.effort)) + (', stat=' + Kotlin.toString(this.stat)) + ')';
  };
  Stats.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.base_stat) | 0;
    result = result * 31 + Kotlin.hashCode(this.effort) | 0;
    result = result * 31 + Kotlin.hashCode(this.stat) | 0;
    return result;
  };
  Stats.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.base_stat, other.base_stat) && Kotlin.equals(this.effort, other.effort) && Kotlin.equals(this.stat, other.stat)))));
  };
  function PokemonList() {
  }
  function PokemonList$View() {
  }
  PokemonList$View.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'View',
    interfaces: []
  };
  function PokemonList$Presenter() {
  }
  PokemonList$Presenter.prototype.loadPokemons_vux9f0$ = function (limit, offset, callback$default) {
    if (limit === void 0)
      limit = 151;
    if (offset === void 0)
      offset = 0;
    callback$default ? callback$default(limit, offset) : this.loadPokemons_vux9f0$$default(limit, offset);
  };
  PokemonList$Presenter.prototype.loadOptionPokemons_vux9f0$ = function (limit, offset, callback$default) {
    if (limit === void 0)
      limit = 151;
    if (offset === void 0)
      offset = 0;
    callback$default ? callback$default(limit, offset) : this.loadOptionPokemons_vux9f0$$default(limit, offset);
  };
  PokemonList$Presenter.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Presenter',
    interfaces: []
  };
  function PokemonList$Controller() {
  }
  PokemonList$Controller.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Controller',
    interfaces: []
  };
  PokemonList.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'PokemonList',
    interfaces: []
  };
  function PokemonListPage(presenter) {
    this.presenter_0 = presenter;
    var tmp$, tmp$_0, tmp$_1;
    this.onLoad_0 = Kotlin.isType(tmp$ = document.getElementById('loader'), HTMLDivElement) ? tmp$ : throwCCE();
    this.content_0 = Kotlin.isType(tmp$_0 = document.getElementById('content'), HTMLDivElement) ? tmp$_0 : throwCCE();
    this.myModal_0 = Kotlin.isType(tmp$_1 = document.getElementById('myModal'), HTMLDivElement) ? tmp$_1 : throwCCE();
    this.cardBuilder_0 = new CardBuilder();
    this.modalBuilder_0 = new ModalBuilder();
  }
  PokemonListPage.prototype.show_vux9f0$ = function (limit, offset) {
    if (limit === void 0)
      limit = 151;
    if (offset === void 0)
      offset = 0;
    this.presenter_0.attach_4xqiji$(this);
    this.presenter_0.loadPokemons_vux9f0$(limit, offset);
  };
  PokemonListPage.prototype.showByUrl_61zpoe$ = function (pokemonUrl) {
    this.presenter_0.attach_4xqiji$(this);
    this.presenter_0.loadPokemonsByUrl_61zpoe$(pokemonUrl);
  };
  PokemonListPage.prototype.showByType_za3lpa$ = function (pokemonType) {
    this.presenter_0.attach_4xqiji$(this);
    this.presenter_0.loadPokemonsByType_za3lpa$(pokemonType);
  };
  PokemonListPage.prototype.getAllOption_vux9f0$ = function (limit, offset) {
    if (limit === void 0)
      limit = 10000;
    if (offset === void 0)
      offset = 0;
    this.show_vux9f0$();
    this.presenter_0.loadOptionPokemons_vux9f0$(limit, offset);
  };
  function PokemonListPage$modalConfig$lambda(this$PokemonListPage) {
    return function (event) {
      if (equals(event.target, this$PokemonListPage.myModal_0)) {
        this$PokemonListPage.hideModal();
        removeElement('containerElement');
      }return Unit;
    };
  }
  PokemonListPage.prototype.modalConfig = function () {
    this.showModal();
    window.onclick = PokemonListPage$modalConfig$lambda(this);
  };
  PokemonListPage.prototype.showPokemons_zfszz2$ = function (pokemons) {
    removeElement('notFoundCard');
    var tmp$;
    tmp$ = pokemons.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      this.content_0.appendChild(this.cardBuilder_0.build_kximr7$(element));
    }
  };
  PokemonListPage.prototype.showPokemonByUrl_lt8phb$ = function (pokemon) {
    this.modalConfig();
    this.myModal_0.appendChild(this.modalBuilder_0.build_lt8phb$(pokemon));
  };
  PokemonListPage.prototype.notFoundList = function () {
    var tmp$;
    var notFoundCard = Kotlin.isType(tmp$ = document.createElement('div'), HTMLDivElement) ? tmp$ : throwCCE();
    notFoundCard.innerHTML = 'N\xE3o conseguimos encontrar resultado para essa busca.';
    notFoundCard.setAttribute('id', 'notFoundCard');
    this.content_0.appendChild(notFoundCard);
  };
  PokemonListPage.prototype.showLoader = function () {
    this.onLoad_0.style.visibility = 'visible';
  };
  PokemonListPage.prototype.hideLoader = function () {
    this.onLoad_0.style.visibility = 'hidden';
  };
  PokemonListPage.prototype.showModal = function () {
    this.myModal_0.style.display = 'block';
  };
  PokemonListPage.prototype.hideModal = function () {
    this.myModal_0.style.display = 'none';
  };
  PokemonListPage.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PokemonListPage',
    interfaces: [PokemonList$View]
  };
  function PokemonPresenter() {
    this.view_2nsq4c$_0 = this.view_2nsq4c$_0;
  }
  Object.defineProperty(PokemonPresenter.prototype, 'view_0', {
    configurable: true,
    get: function () {
      if (this.view_2nsq4c$_0 == null)
        return throwUPAE('view');
      return this.view_2nsq4c$_0;
    },
    set: function (view) {
      this.view_2nsq4c$_0 = view;
    }
  });
  PokemonPresenter.prototype.attach_4xqiji$ = function (view) {
    this.view_0 = view;
  };
  function PokemonPresenter$loadPokemons$lambda(this$PokemonPresenter) {
    return function (response) {
      if (response !== 'error') {
        var pokemons = JSON.parse(response);
        var pokemonstoList = toList(pokemons[0].results);
        if (pokemonstoList.size === 0) {
          this$PokemonPresenter.view_0.notFoundList();
        } else {
          this$PokemonPresenter.storageList_0(pokemonstoList);
          this$PokemonPresenter.view_0.showPokemons_zfszz2$(pokemonstoList);
        }
      }this$PokemonPresenter.view_0.hideLoader();
      return Unit;
    };
  }
  PokemonPresenter.prototype.loadPokemons_vux9f0$$default = function (limit, offset) {
    this.view_0.showLoader();
    this.getAsyncGambi_0(returnAllUrl(limit, offset), PokemonPresenter$loadPokemons$lambda(this));
  };
  function PokemonPresenter$loadPokemonsByType$lambda(this$PokemonPresenter) {
    return function (response) {
      if (response !== 'error') {
        var pokemons = JSON.parse(response);
        var pokemonstoList = toList(pokemons[0].pokemon);
        var destination = ArrayList_init(collectionSizeOrDefault(pokemonstoList, 10));
        var tmp$;
        tmp$ = pokemonstoList.iterator();
        while (tmp$.hasNext()) {
          var item = tmp$.next();
          destination.add_11rb$(item.pokemon);
        }
        var mutableListState = destination;
        this$PokemonPresenter.storageList_0(mutableListState);
        this$PokemonPresenter.view_0.showPokemons_zfszz2$(mutableListState);
      }this$PokemonPresenter.view_0.hideLoader();
      return Unit;
    };
  }
  PokemonPresenter.prototype.loadPokemonsByType_za3lpa$ = function (typeCode) {
    this.view_0.showLoader();
    this.getAsyncGambi_0(returnTypeUrl(typeCode), PokemonPresenter$loadPokemonsByType$lambda(this));
  };
  PokemonPresenter.prototype.storageSprites_0 = function (sprites) {
    listStorageImagePokemon.clear();
    listStorageImagePokemon.add_11rb$(sprites);
  };
  PokemonPresenter.prototype.getImage_nm7kwp$ = function (pokemonAPI) {
    var spritesMutableList = mutableListOf([pokemonAPI.sprites]);
    this.storageSprites_0(pokemonAPI.sprites);
    return spritesMutableList.get_za3lpa$(0);
  };
  PokemonPresenter.prototype.getTypes_nm7kwp$ = function (pokemonAPI) {
    var $receiver = toList(pokemonAPI.types);
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(item.type);
    }
    var destination_0 = ArrayList_init(collectionSizeOrDefault(destination, 10));
    var tmp$_0;
    tmp$_0 = destination.iterator();
    while (tmp$_0.hasNext()) {
      var item_0 = tmp$_0.next();
      destination_0.add_11rb$(item_0.name);
    }
    return destination_0;
  };
  PokemonPresenter.prototype.getAbilities_nm7kwp$ = function (pokemonAPI) {
    var $receiver = toList(pokemonAPI.abilities);
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(item.ability);
    }
    var destination_0 = ArrayList_init(collectionSizeOrDefault(destination, 10));
    var tmp$_0;
    tmp$_0 = destination.iterator();
    while (tmp$_0.hasNext()) {
      var item_0 = tmp$_0.next();
      destination_0.add_11rb$(item_0.name);
    }
    return destination_0;
  };
  PokemonPresenter.prototype.getStats_nm7kwp$ = function (pokemonAPI) {
    var $receiver = toList(pokemonAPI.stats);
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(item.base_stat);
    }
    return destination;
  };
  PokemonPresenter.prototype.manipuleData_w5pdic$ = function (responseList) {
    var mainList = responseList.get_za3lpa$(0);
    var height = mainList.height;
    var id = mainList.id;
    var name = mainList.name;
    var weight = mainList.weight;
    var coverUrl = this.ifHasImage_61zpoe$(this.getImage_nm7kwp$(mainList).front_default);
    var type = this.getTypes_nm7kwp$(mainList);
    var abilities = this.getAbilities_nm7kwp$(mainList);
    var stats = this.getStats_nm7kwp$(mainList);
    println(stats);
    return new PokemonInfo(height, id, name, weight, coverUrl, type, abilities);
  };
  PokemonPresenter.prototype.ifHasImage_61zpoe$ = function (frontImage) {
    if (frontImage === void 0)
      frontImage = 'failed';
    var tmp$;
    if (frontImage !== 'failed') {
      tmp$ = frontImage;
    } else {
      tmp$ = 'assets/img/no_image_avaliable.png';
    }
    return tmp$;
  };
  PokemonPresenter.prototype.createListOption_mhpeer$ = function (pokemonList) {
    var tmp$;
    var pokemonListOptions = Kotlin.isType(tmp$ = document.getElementById('pokemonListOptions'), HTMLDataListElement) ? tmp$ : throwCCE();
    var tmp$_0;
    tmp$_0 = pokemonList.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      var tmp$_1;
      var option = Kotlin.isType(tmp$_1 = document.createElement('option'), HTMLOptionElement) ? tmp$_1 : throwCCE();
      option.setAttribute('value', element);
      pokemonListOptions.appendChild(option);
    }
  };
  function PokemonPresenter$loadPokemonsByUrl$lambda(this$PokemonPresenter) {
    return function (response) {
      if (response !== 'error') {
        var pokemon = JSON.parse(response);
        this$PokemonPresenter.view_0.showPokemonByUrl_lt8phb$(this$PokemonPresenter.manipuleData_w5pdic$(toList(pokemon)));
      }this$PokemonPresenter.view_0.hideLoader();
      return Unit;
    };
  }
  PokemonPresenter.prototype.loadPokemonsByUrl_61zpoe$ = function (pokemonUrl) {
    this.view_0.showLoader();
    this.getAsyncGambi_0(pokemonUrl, PokemonPresenter$loadPokemonsByUrl$lambda(this));
  };
  function PokemonPresenter$loadOptionPokemons$lambda(this$PokemonPresenter) {
    return function (response) {
      if (response !== 'error') {
        var pokemons = JSON.parse(response);
        var pokemonstoList = toList(pokemons[0].results);
        var destination = ArrayList_init(collectionSizeOrDefault(pokemonstoList, 10));
        var tmp$;
        tmp$ = pokemonstoList.iterator();
        while (tmp$.hasNext()) {
          var item = tmp$.next();
          destination.add_11rb$(item.name);
        }
        var arrayPokemon = destination;
        this$PokemonPresenter.createListOption_mhpeer$(arrayPokemon);
      }this$PokemonPresenter.view_0.hideLoader();
      return Unit;
    };
  }
  PokemonPresenter.prototype.loadOptionPokemons_vux9f0$$default = function (limit, offset) {
    this.view_0.showLoader();
    this.getAsyncGambi_0(returnAllUrl(limit, offset), PokemonPresenter$loadOptionPokemons$lambda(this));
  };
  function PokemonPresenter$getAsyncGambi$onSuccessHandler(closure$callback, closure$xmlHttp) {
    return function () {
      return closure$callback('[' + closure$xmlHttp.responseText + ']');
    };
  }
  function PokemonPresenter$getAsyncGambi$onErrorHandler(closure$callback) {
    return function () {
      showErrorDialog('Houve um erro de conex\xE3o \uD83D\uDE20. Tente novamente \uD83D\uDE1E.');
      return closure$callback('error');
    };
  }
  function PokemonPresenter$getAsyncGambi$onNotFoundHandler(closure$callback) {
    return function () {
      showErrorDialog('N\xE3o conseguimos encontrar esse resultado \uD83D\uDE13.');
      return closure$callback('error');
    };
  }
  function PokemonPresenter$getAsyncGambi$onTimeoutHandler(closure$callback) {
    return function () {
      showErrorDialog('Tempo de conex\xE3o esgotado \uD83D\uDE25. Tente novamente mais tarde \uD83D\uDE44.');
      return closure$callback('error');
    };
  }
  function PokemonPresenter$getAsyncGambi$onLoadHandler(closure$xmlHttp, closure$onSuccessHandler, closure$onNotFoundHandler) {
    return function () {
      if (closure$xmlHttp.readyState === toShort(4) && closure$xmlHttp.status === toShort(200)) {
        closure$onSuccessHandler();
      } else if (closure$xmlHttp.status === toShort(404)) {
        closure$onNotFoundHandler();
      }};
  }
  function PokemonPresenter$getAsyncGambi$lambda(closure$onLoadHandler) {
    return function (it) {
      closure$onLoadHandler();
      return Unit;
    };
  }
  function PokemonPresenter$getAsyncGambi$lambda_0(closure$onErrorHandler) {
    return function (it) {
      closure$onErrorHandler();
      return Unit;
    };
  }
  function PokemonPresenter$getAsyncGambi$lambda_1(closure$onTimeoutHandler) {
    return function (it) {
      closure$onTimeoutHandler();
      return Unit;
    };
  }
  PokemonPresenter.prototype.getAsyncGambi_0 = function (url, callback) {
    var xmlHttp = new XMLHttpRequest();
    var onSuccessHandler = PokemonPresenter$getAsyncGambi$onSuccessHandler(callback, xmlHttp);
    var onErrorHandler = PokemonPresenter$getAsyncGambi$onErrorHandler(callback);
    var onNotFoundHandler = PokemonPresenter$getAsyncGambi$onNotFoundHandler(callback);
    var onTimeoutHandler = PokemonPresenter$getAsyncGambi$onTimeoutHandler(callback);
    var onLoadHandler = PokemonPresenter$getAsyncGambi$onLoadHandler(xmlHttp, onSuccessHandler, onNotFoundHandler);
    xmlHttp.open('GET', url);
    xmlHttp.timeout = 5000;
    xmlHttp.onload = PokemonPresenter$getAsyncGambi$lambda(onLoadHandler);
    xmlHttp.onerror = PokemonPresenter$getAsyncGambi$lambda_0(onErrorHandler);
    xmlHttp.ontimeout = PokemonPresenter$getAsyncGambi$lambda_1(onTimeoutHandler);
    xmlHttp.send();
  };
  PokemonPresenter.prototype.storageList_0 = function (pokemonsList) {
    listStoragePokemon.clear();
    var tmp$;
    tmp$ = pokemonsList.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      listStoragePokemon.add_11rb$(element);
    }
  };
  PokemonPresenter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PokemonPresenter',
    interfaces: [PokemonList$Presenter]
  };
  function CardBuilder() {
  }
  CardBuilder.prototype.build_kximr7$ = function (pokemon) {
    var tmp$, tmp$_0, tmp$_1;
    var containerElementCard = Kotlin.isType(tmp$ = document.createElement('div'), HTMLDivElement) ? tmp$ : throwCCE();
    var titleElement = Kotlin.isType(tmp$_0 = document.createElement('span'), HTMLSpanElement) ? tmp$_0 : throwCCE();
    var idElement = Kotlin.isType(tmp$_1 = document.createElement('span'), HTMLSpanElement) ? tmp$_1 : throwCCE();
    containerElementCard.setAttribute('id', 'containerElementCard');
    this.bind_0(pokemon, containerElementCard, titleElement, idElement);
    this.applyStyle_0(containerElementCard, titleElement, idElement);
    this.appendChild_0(containerElementCard, [titleElement, idElement]);
    return containerElementCard;
  };
  CardBuilder.prototype.applyStyle_0 = function (containerElement, titleElement, idElement) {
    containerElement.classList.add('card', 'ripple', 'card-shadow', 'eightbit-btn');
    titleElement.classList.add('text-title', 'float-left', 'game-font');
    idElement.classList.add('id-details', 'float-right', 'game-font');
  };
  function CardBuilder$bind$lambda(closure$pokemon) {
    return function (it) {
      initSound('bit_2');
      initPage().showByUrl_61zpoe$(closure$pokemon.url);
      return Unit;
    };
  }
  function CardBuilder$bind$lambda_0(it) {
    initSound('bit_1');
    return Unit;
  }
  CardBuilder.prototype.bind_0 = function (pokemon, containerElementCard, titleElement, idElement) {
    containerElementCard.setAttribute('title', '#' + split(pokemon.url, ['/']).get_za3lpa$(6));
    titleElement.innerText = pokemon.name;
    idElement.innerText = '#' + split(pokemon.url, ['/']).get_za3lpa$(6);
    containerElementCard.addEventListener('click', CardBuilder$bind$lambda(pokemon));
    containerElementCard.addEventListener('mouseover', CardBuilder$bind$lambda_0);
  };
  CardBuilder.prototype.appendChild_0 = function ($receiver, elements) {
    var tmp$;
    for (tmp$ = 0; tmp$ !== elements.length; ++tmp$) {
      var element = elements[tmp$];
      $receiver.appendChild(element);
    }
  };
  CardBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CardBuilder',
    interfaces: []
  };
  function ModalBuilder() {
  }
  function ModalBuilder$build$lambda(closure$abilitiesElement) {
    return function (it) {
      closure$abilitiesElement.classList.remove('hidden');
      return Unit;
    };
  }
  function ModalBuilder$build$lambda_0(closure$abilitiesElement) {
    return function (it) {
      closure$abilitiesElement.classList.add('hidden');
      return Unit;
    };
  }
  ModalBuilder.prototype.build_lt8phb$ = function (pokemon) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13;
    var containerElement = Kotlin.isType(tmp$ = document.createElement('div'), HTMLDivElement) ? tmp$ : throwCCE();
    var coverUrl = Kotlin.isType(tmp$_0 = document.createElement('img'), HTMLImageElement) ? tmp$_0 : throwCCE();
    var type = Kotlin.isType(tmp$_1 = document.createElement('div'), HTMLDivElement) ? tmp$_1 : throwCCE();
    var name = Kotlin.isType(tmp$_2 = document.createElement('div'), HTMLDivElement) ? tmp$_2 : throwCCE();
    var id = Kotlin.isType(tmp$_3 = document.createElement('div'), HTMLDivElement) ? tmp$_3 : throwCCE();
    var height = Kotlin.isType(tmp$_4 = document.createElement('div'), HTMLDivElement) ? tmp$_4 : throwCCE();
    var weight = Kotlin.isType(tmp$_5 = document.createElement('div'), HTMLDivElement) ? tmp$_5 : throwCCE();
    var abilitiesElement = Kotlin.isType(tmp$_6 = document.createElement('div'), HTMLDivElement) ? tmp$_6 : throwCCE();
    var containerElementButtonSprite = Kotlin.isType(tmp$_7 = document.createElement('div'), HTMLDivElement) ? tmp$_7 : throwCCE();
    var femButton = Kotlin.isType(tmp$_8 = document.createElement('button'), HTMLButtonElement) ? tmp$_8 : throwCCE();
    var mascButton = Kotlin.isType(tmp$_9 = document.createElement('button'), HTMLButtonElement) ? tmp$_9 : throwCCE();
    var rotateButton = Kotlin.isType(tmp$_10 = document.createElement('button'), HTMLButtonElement) ? tmp$_10 : throwCCE();
    var nextButton = Kotlin.isType(tmp$_11 = document.createElement('button'), HTMLButtonElement) ? tmp$_11 : throwCCE();
    var previousButton = Kotlin.isType(tmp$_12 = document.createElement('button'), HTMLButtonElement) ? tmp$_12 : throwCCE();
    this.bind_0(pokemon, height, id, name, type, coverUrl, weight, femButton, mascButton, rotateButton, nextButton, previousButton, abilitiesElement, containerElementButtonSprite);
    this.applyStyle_0(containerElement, height, id, name, type, coverUrl, weight, femButton, mascButton, rotateButton, nextButton, previousButton, abilitiesElement, containerElementButtonSprite);
    this.setAttributes_0(pokemon, containerElement, coverUrl, femButton, previousButton, nextButton, rotateButton);
    var abilitiesHover = Kotlin.isType(tmp$_13 = document.createElement('div'), HTMLDivElement) ? tmp$_13 : throwCCE();
    abilitiesHover.innerHTML = '<span class="hover-abilitie">\u2694<\/span>';
    abilitiesHover.addEventListener('mouseover', ModalBuilder$build$lambda(abilitiesElement));
    abilitiesHover.addEventListener('mouseout', ModalBuilder$build$lambda_0(abilitiesElement));
    this.appendChild_0(containerElement, [coverUrl, type, name, id, height, weight, containerElementButtonSprite, previousButton, nextButton, abilitiesHover, abilitiesElement]);
    return containerElement;
  };
  ModalBuilder.prototype.applyStyle_0 = function (containerElement, height, id, name, type, coverUrl, weight, femButton, mascButton, rotateButton, nextButton, previousButton, abilitiesElement, containerElementButtonSprite) {
    var tmp$;
    containerElement.classList.add('modal-content', this.returnTypeColor_0((tmp$ = type.children[0]) != null ? tmp$.textContent : null));
    coverUrl.classList.add('card-cover-image');
    name.classList.add('card-pokemon-name', 'float-center', 'toUpper', 'game-font');
    type.classList.add('card-list', 'game-font');
    height.classList.add('game-font', 'card-list-height');
    id.classList.add('card-id', 'game-font');
    weight.classList.add('game-font', 'card-list-height');
    femButton.classList.add('sprite-button', 'fem-button');
    mascButton.classList.add('sprite-button', 'masc-button');
    rotateButton.classList.add('sprite-button', 'rotate-button');
    nextButton.classList.add('pass-button', 'next-button');
    previousButton.classList.add('pass-button', 'previous-button');
    abilitiesElement.classList.add('hidden', 'abilities-div');
    containerElementButtonSprite.classList.add('content-sprite-button');
  };
  function ModalBuilder$bind$lambda(this$ModalBuilder) {
    return function (it) {
      return this$ModalBuilder.returnListTypes_0(it);
    };
  }
  function ModalBuilder$bind$lambda_0(this$ModalBuilder) {
    return function (it) {
      return this$ModalBuilder.returnListAbilities_0(it);
    };
  }
  function ModalBuilder$bind$lambda_1(closure$coverUrl) {
    return function (it) {
      initSound('bit_4');
      if (equals(split(closure$coverUrl.src, ['/']).get_za3lpa$(8), 'back')) {
        if (equals(split(closure$coverUrl.src, ['/']).get_za3lpa$(9), 'female')) {
          closure$coverUrl.setAttribute('src', listStorageImagePokemon.get_za3lpa$(0).front_female);
        } else {
          closure$coverUrl.setAttribute('src', listStorageImagePokemon.get_za3lpa$(0).front_default);
        }
      } else {
        if (equals(split(closure$coverUrl.src, ['/']).get_za3lpa$(8), 'female')) {
          closure$coverUrl.setAttribute('src', listStorageImagePokemon.get_za3lpa$(0).back_female);
        } else {
          if (listStorageImagePokemon.get_za3lpa$(0).back_default == null) {
            closure$coverUrl.setAttribute('src', 'assets/img/no_image_avaliable.png');
          } else {
            closure$coverUrl.setAttribute('src', listStorageImagePokemon.get_za3lpa$(0).back_default);
          }
        }
      }
      return Unit;
    };
  }
  function ModalBuilder$bind$lambda_2(closure$coverUrl) {
    return function (it) {
      initSound('bit_4');
      closure$coverUrl.setAttribute('src', listStorageImagePokemon.get_za3lpa$(0).front_female);
      return Unit;
    };
  }
  function ModalBuilder$bind$lambda_3(closure$coverUrl) {
    return function (it) {
      initSound('bit_4');
      closure$coverUrl.setAttribute('src', listStorageImagePokemon.get_za3lpa$(0).front_default);
      return Unit;
    };
  }
  function ModalBuilder$bind$lambda_4(closure$pokemon) {
    return function (it) {
      initSound('bit_3');
      removeElement('containerElement');
      initPage().showByUrl_61zpoe$(returnByIdUrl(closure$pokemon.id + 1 | 0));
      return Unit;
    };
  }
  function ModalBuilder$bind$lambda_5(closure$pokemon) {
    return function (it) {
      initSound('bit_3');
      removeElement('containerElement');
      initPage().showByUrl_61zpoe$(returnByIdUrl(closure$pokemon.id - 1 | 0));
      return Unit;
    };
  }
  ModalBuilder.prototype.bind_0 = function (pokemon, height, id, name, type, coverUrl, weight, femButton, mascButton, rotateButton, nextButton, previousButton, abilitiesElement, containerElementButtonSprite) {
    var tmp$;
    var modal = Kotlin.isType(tmp$ = document.getElementById('myModal'), HTMLDivElement) ? tmp$ : throwCCE();
    height.innerHTML = this.returnHeight_0(pokemon.height);
    id.innerHTML = '#' + pokemon.id.toString();
    name.innerHTML = pokemon.name;
    type.innerHTML = joinToString(pokemon.type, '', void 0, void 0, void 0, void 0, ModalBuilder$bind$lambda(this));
    abilitiesElement.innerHTML = joinToString(pokemon.abilities, '', void 0, void 0, void 0, void 0, ModalBuilder$bind$lambda_0(this));
    coverUrl.src = pokemon.coverUrl;
    weight.innerHTML = this.returnWeight_0(pokemon.weight);
    femButton.innerHTML = this.generateIcon_0('venus');
    mascButton.innerHTML = this.generateIcon_0('mars');
    rotateButton.innerHTML = this.generateIcon_0('sync-alt');
    nextButton.innerHTML = this.generateIcon_0('step-forward');
    previousButton.innerHTML = this.generateIcon_0('step-backward');
    rotateButton.addEventListener('click', ModalBuilder$bind$lambda_1(coverUrl));
    femButton.addEventListener('click', ModalBuilder$bind$lambda_2(coverUrl));
    mascButton.addEventListener('click', ModalBuilder$bind$lambda_3(coverUrl));
    nextButton.addEventListener('click', ModalBuilder$bind$lambda_4(pokemon));
    previousButton.addEventListener('click', ModalBuilder$bind$lambda_5(pokemon));
    this.appendChild_0(containerElementButtonSprite, [rotateButton, mascButton, femButton]);
  };
  ModalBuilder.prototype.setAttributes_0 = function (pokemon, containerElement, coverUrl, femButton, previousButton, nextButton, rotateButton) {
    coverUrl.setAttribute('alt', 'Pokemon de frente');
    coverUrl.setAttribute('draggable', 'false');
    coverUrl.setAttribute('loading', 'lazy');
    containerElement.setAttribute('id', 'containerElement');
    if (listStorageImagePokemon.get_za3lpa$(0).front_female == null) {
      femButton.setAttribute('disabled', 'true');
    }if (listStorageImagePokemon.get_za3lpa$(0).back_default == null) {
      rotateButton.setAttribute('disabled', 'true');
    }if (pokemon.id === 1 || pokemon.id === 10001) {
      previousButton.setAttribute('disabled', 'true');
    }if (pokemon.id === 898 || pokemon.id === 10220) {
      nextButton.setAttribute('disabled', 'true');
    }};
  ModalBuilder.prototype.generateIcon_0 = function (icon) {
    return '<i class=' + '"' + 'fa fa-lg fa-' + icon + '"' + '><\/i>';
  };
  ModalBuilder.prototype.returnTypeColor_0 = function (type) {
    return 'type-' + toString(type);
  };
  ModalBuilder.prototype.returnListTypes_0 = function (type) {
    return '<li class=' + '"' + 'type-' + type + '"' + '>' + type + '<\/li>';
  };
  ModalBuilder.prototype.returnListAbilities_0 = function (abilities) {
    return '<li class=' + '"' + 'abilities-' + abilities + '"' + '>' + abilities + '<\/li>';
  };
  ModalBuilder.prototype.returnHeight_0 = function (height) {
    return height.toString().length > 2 ? 'Altura: ' + String.fromCharCode(height.toString().charCodeAt(0)) + String.fromCharCode(height.toString().charCodeAt(1)) + ',' + String.fromCharCode(height.toString().charCodeAt(2)) + 'm' : height.toString().length > 1 ? 'Altura: ' + String.fromCharCode(height.toString().charCodeAt(0)) + ',' + String.fromCharCode(height.toString().charCodeAt(1)) + 'm' : 'Altura: 0.' + height.toString() + 'm';
  };
  ModalBuilder.prototype.returnWeight_0 = function (weight) {
    switch (weight.toString().length) {
      case 1:
        return 'Peso: 0,' + String.fromCharCode(weight.toString().charCodeAt(0)) + 'kg';
      case 2:
        return 'Peso: ' + String.fromCharCode(weight.toString().charCodeAt(0)) + ',' + String.fromCharCode(weight.toString().charCodeAt(1)) + 'kg';
      case 3:
        return 'Peso: ' + String.fromCharCode(weight.toString().charCodeAt(0)) + String.fromCharCode(weight.toString().charCodeAt(1)) + ',' + String.fromCharCode(weight.toString().charCodeAt(2)) + 'kg';
      case 4:
        return 'Peso: ' + String.fromCharCode(weight.toString().charCodeAt(0)) + String.fromCharCode(weight.toString().charCodeAt(1)) + String.fromCharCode(weight.toString().charCodeAt(2)) + ',' + String.fromCharCode(weight.toString().charCodeAt(3)) + 'kg';
      default:return 'Peso: ????,?kg';
    }
  };
  ModalBuilder.prototype.appendChild_0 = function ($receiver, elements) {
    var tmp$;
    for (tmp$ = 0; tmp$ !== elements.length; ++tmp$) {
      var element = elements[tmp$];
      $receiver.appendChild(element);
    }
  };
  ModalBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ModalBuilder',
    interfaces: []
  };
  function showErrorDialog(typeError) {
    var tmp$, tmp$_0;
    var errorDialog = Kotlin.isType(tmp$ = document.getElementById('errorDialog'), HTMLDivElement) ? tmp$ : throwCCE();
    var errorDialogContent = Kotlin.isType(tmp$_0 = document.getElementById('errorDialogContent'), HTMLDivElement) ? tmp$_0 : throwCCE();
    errorDialogContent.innerText = typeError;
    errorDialog.classList.remove('hidden');
    errorDialog.classList.add('loader');
  }
  function returnAllUrl(limit, offset) {
    if (limit === void 0)
      limit = 151;
    if (offset === void 0)
      offset = 0;
    return API_URL + '/pokemon?limit=' + limit + '&offset=' + offset;
  }
  function returnTypeUrl(type) {
    if (type === void 0)
      type = 1;
    return API_URL + '/type/' + type + '/';
  }
  function returnByIdUrl(id) {
    if (id === void 0)
      id = 1;
    return API_URL + '/pokemon/' + id + '/';
  }
  function returnByNameUrl(name) {
    if (name === void 0)
      name = 'bulbasaur';
    return API_URL + '/pokemon/' + name + '/';
  }
  function initPage() {
    return new PokemonListPage(new PokemonPresenter());
  }
  function removeElement(id) {
    var tmp$;
    var elementToDestroy = document.getElementById(id);
    elementToDestroy != null ? (elementToDestroy.remove(), Unit) : null;
    (tmp$ = elementToDestroy != null ? elementToDestroy.parentNode : null) != null ? tmp$.removeChild(elementToDestroy) : null;
  }
  function destroyOldList() {
    var tmp$;
    var content = Kotlin.isType(tmp$ = document.getElementById('content'), HTMLDivElement) ? tmp$ : throwCCE();
    callToDestroy(content.childElementCount, 'containerElementCard');
  }
  function destroyOldSelect() {
    var tmp$;
    var selectGeneration = Kotlin.isType(tmp$ = document.getElementById('selectGeneration'), HTMLSelectElement) ? tmp$ : throwCCE();
    callToDestroy(selectGeneration.childElementCount, 'optionInsert');
  }
  function callToDestroy(value, id) {
    var tmp$;
    tmp$ = toList_0(new IntRange(0, value - 1 | 0)).iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      removeElement(id);
    }
  }
  function getValueGeneration(generation) {
    switch (generation) {
      case 'GenerationI':
        return [151, 0];
      case 'GenerationII':
        return [100, 151];
      case 'GenerationIII':
        return [135, 251];
      case 'GenerationIV':
        return [107, 386];
      case 'GenerationV':
        return [156, 493];
      case 'GenerationVI':
        return [72, 649];
      case 'GenerationVII':
        return [88, 721];
      case 'GenerationVIII':
        return [89, 809];
      default:return [220, 898];
    }
  }
  function getValueType(type) {
    switch (type) {
      case 'Normal':
        return 1;
      case 'Fighting':
        return 2;
      case 'Flying':
        return 3;
      case 'Poison':
        return 4;
      case 'Ground':
        return 5;
      case 'Rock':
        return 6;
      case 'Bug':
        return 7;
      case 'Ghost':
        return 8;
      case 'Steel':
        return 9;
      case 'Fire':
        return 10;
      case 'Water':
        return 11;
      case 'Grass':
        return 12;
      case 'Electric':
        return 13;
      case 'Psychic':
        return 14;
      case 'Ice':
        return 15;
      case 'Dragon':
        return 16;
      case 'Dark':
        return 17;
      default:return 18;
    }
  }
  function searchByValue(generation) {
    destroyOldList();
    if (generation.length >= 11) {
      var rangeForSearch = getValueGeneration(generation);
      initPage().show_vux9f0$(rangeForSearch[0], rangeForSearch[1]);
    } else {
      initPage().showByType_za3lpa$(getValueType(generation));
    }
  }
  function initSound(song) {
    var tmp$;
    var audio = Kotlin.isType(tmp$ = new Audio('assets/song/' + song + '.mp3'), HTMLAudioElement) ? tmp$ : throwCCE();
    audio.play();
    audio.muted = false;
  }
  function initButtonElements() {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8;
    var searchGeneratioButton = Kotlin.isType(tmp$ = document.getElementById('searchGeneratioButton'), HTMLButtonElement) ? tmp$ : throwCCE();
    var ascButton = Kotlin.isType(tmp$_0 = document.getElementById('ascButton'), HTMLButtonElement) ? tmp$_0 : throwCCE();
    var descButton = Kotlin.isType(tmp$_1 = document.getElementById('descButton'), HTMLButtonElement) ? tmp$_1 : throwCCE();
    var generationButton = Kotlin.isType(tmp$_2 = document.getElementById('generationButton'), HTMLButtonElement) ? tmp$_2 : throwCCE();
    var typeButton = Kotlin.isType(tmp$_3 = document.getElementById('typeButton'), HTMLButtonElement) ? tmp$_3 : throwCCE();
    var selectGeneration = Kotlin.isType(tmp$_4 = document.getElementById('selectGeneration'), HTMLSelectElement) ? tmp$_4 : throwCCE();
    var randomizeButton = Kotlin.isType(tmp$_5 = document.getElementById('randomizeButton'), HTMLButtonElement) ? tmp$_5 : throwCCE();
    var close_modal = Kotlin.isType(tmp$_6 = document.getElementById('close_modal'), HTMLButtonElement) ? tmp$_6 : throwCCE();
    var errorDialog = Kotlin.isType(tmp$_7 = document.getElementById('errorDialog'), HTMLDivElement) ? tmp$_7 : throwCCE();
    var pokemonById = Kotlin.isType(tmp$_8 = document.getElementById('pokemonById'), HTMLInputElement) ? tmp$_8 : throwCCE();
    initEventButton(searchGeneratioButton, ascButton, descButton, generationButton, typeButton, selectGeneration, randomizeButton, close_modal, errorDialog, pokemonById);
  }
  function initEventButton$lambda(it) {
    initSound('digit');
    return Unit;
  }
  function initEventButton$lambda_0(it) {
    initSound('bit_5');
    initPage().showByUrl_61zpoe$(returnByIdUrl(random(new IntRange(1, 898), Random.Default)));
    return Unit;
  }
  function initEventButton$lambda_1(it) {
    initSound('bit_5');
    removeElement('containerElement');
    searchGeneratioButtonEvent();
    return Unit;
  }
  function initEventButton$lambda_2(closure$selectGeneration) {
    return function (it) {
      initSound('select');
      searchByValue(closure$selectGeneration.value);
      return Unit;
    };
  }
  function initEventButton$lambda_3(it) {
    sortList('asc');
    return Unit;
  }
  function initEventButton$lambda_4(it) {
    sortList('desc');
    return Unit;
  }
  function initEventButton$lambda_5(closure$generationButton, closure$typeButton) {
    return function (it) {
      initSound('bit_5');
      changeSelectButton('generation', closure$generationButton, closure$typeButton);
      return Unit;
    };
  }
  function initEventButton$lambda_6(closure$generationButton, closure$typeButton) {
    return function (it) {
      initSound('bit_5');
      changeSelectButton('type', closure$generationButton, closure$typeButton);
      return Unit;
    };
  }
  function initEventButton$lambda_7(closure$errorDialog) {
    return function (it) {
      toggleErrorDialogClass(closure$errorDialog);
      return Unit;
    };
  }
  function initEventButton(searchGeneratioButton, ascButton, descButton, generationButton, typeButton, selectGeneration, randomizeButton, close_modal, errorDialog, pokemonById) {
    pokemonById.addEventListener('keyup', initEventButton$lambda);
    randomizeButton.addEventListener('click', initEventButton$lambda_0);
    searchGeneratioButton.addEventListener('click', initEventButton$lambda_1);
    selectGeneration.addEventListener('change', initEventButton$lambda_2(selectGeneration));
    ascButton.addEventListener('click', initEventButton$lambda_3);
    descButton.addEventListener('click', initEventButton$lambda_4);
    generationButton.addEventListener('click', initEventButton$lambda_5(generationButton, typeButton));
    typeButton.addEventListener('click', initEventButton$lambda_6(generationButton, typeButton));
    close_modal.addEventListener('click', initEventButton$lambda_7(errorDialog));
  }
  function toggleErrorDialogClass(errorDialog) {
    errorDialog.classList.remove('loader');
    errorDialog.classList.add('hidden');
  }
  function searchGeneratioButtonEvent() {
    var tmp$;
    var pokemonById = Kotlin.isType(tmp$ = document.getElementById('pokemonById'), HTMLInputElement) ? tmp$ : throwCCE();
    if (pokemonById.value !== null && pokemonById.value !== '') {
      try {
        initPage().showByUrl_61zpoe$(returnByIdUrl(toInt(pokemonById.value)));
      } catch (nfe) {
        if (Kotlin.isType(nfe, NumberFormatException)) {
          initPage().showByUrl_61zpoe$(returnByNameUrl(pokemonById.value));
        } else
          throw nfe;
      }
    }}
  function changeSelectButton(buttonEvent, generationButton, typeButton) {
    if (buttonEvent === void 0)
      buttonEvent = 'generation';
    if (equals(buttonEvent, 'type')) {
      selectScreenVisor('tipo');
      searchByValue('Normal');
      generateOptionSelect('right');
      typeButton.setAttribute('disabled', 'true');
      generationButton.removeAttribute('disabled');
    } else {
      selectScreenVisor('gera\xE7\xE3o');
      searchByValue('GenerationI');
      generateOptionSelect('left');
      typeButton.removeAttribute('disabled');
      generationButton.setAttribute('disabled', 'true');
    }
  }
  function selectScreenVisor(selectValue) {
    var tmp$;
    var selectScreen = Kotlin.isType(tmp$ = document.getElementById('selectScreen'), HTMLDivElement) ? tmp$ : throwCCE();
    selectScreen.innerText = 'Por ' + selectValue;
  }
  function generateOption(selectGeneration, listValues, listKeys) {
    var tmp$, tmp$_0;
    var index = 0;
    tmp$ = listValues.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var index_0 = checkIndexOverflow((tmp$_0 = index, index = tmp$_0 + 1 | 0, tmp$_0));
      var tmp$_1;
      var option = Kotlin.isType(tmp$_1 = document.createElement('option'), HTMLOptionElement) ? tmp$_1 : throwCCE();
      option.setAttribute('id', 'optionInsert');
      option.setAttribute('value', item);
      option.innerText = listKeys.get_za3lpa$(index_0);
      selectGeneration.append(option);
    }
  }
  function generateOptionSelect(option) {
    if (option === void 0)
      option = 'left';
    var tmp$;
    var selectGeneration = Kotlin.isType(tmp$ = document.getElementById('selectGeneration'), HTMLSelectElement) ? tmp$ : throwCCE();
    destroyOldSelect();
    if (equals(option, 'left')) {
      generateOption(selectGeneration, generationValues, generationKeys);
    } else {
      generateOption(selectGeneration, typeValues, typeKeys);
    }
  }
  function sortList(option) {
    destroyOldList();
    if (equals(option, 'asc')) {
      initPage().showPokemons_zfszz2$(asReversed(listStoragePokemon));
    } else {
      initPage().showPokemons_zfszz2$(listStoragePokemon);
    }
  }
  function main$lambda(it) {
    initSound('opening-root');
    return Unit;
  }
  function main() {
    initButtonElements();
    generateOptionSelect();
    initPage().getAllOption_vux9f0$();
    window.onload = main$lambda;
  }
  Object.defineProperty(_, 'API_URL', {
    get: function () {
      return API_URL;
    }
  });
  Object.defineProperty(_, 'generationValues', {
    get: function () {
      return generationValues;
    }
  });
  Object.defineProperty(_, 'generationKeys', {
    get: function () {
      return generationKeys;
    }
  });
  Object.defineProperty(_, 'typeValues', {
    get: function () {
      return typeValues;
    }
  });
  Object.defineProperty(_, 'typeKeys', {
    get: function () {
      return typeKeys;
    }
  });
  Object.defineProperty(_, 'listStoragePokemon', {
    get: function () {
      return listStoragePokemon;
    }
  });
  Object.defineProperty(_, 'listStorageImagePokemon', {
    get: function () {
      return listStorageImagePokemon;
    }
  });
  _.AllAPIPokemon = AllAPIPokemon;
  _.TypeAPIPokemon = TypeAPIPokemon;
  _.TypePokemonResult = TypePokemonResult;
  _.Pokemon = Pokemon;
  _.PokemonInfo = PokemonInfo;
  _.PokemonAPI = PokemonAPI;
  _.Types = Types;
  _.Abilities = Abilities;
  _.Sprites = Sprites;
  _.Stats = Stats;
  PokemonList.View = PokemonList$View;
  PokemonList.Presenter = PokemonList$Presenter;
  PokemonList.Controller = PokemonList$Controller;
  _.PokemonList = PokemonList;
  _.PokemonListPage = PokemonListPage;
  _.PokemonPresenter = PokemonPresenter;
  _.CardBuilder = CardBuilder;
  _.ModalBuilder = ModalBuilder;
  _.showErrorDialog_61zpoe$ = showErrorDialog;
  _.returnAllUrl_vux9f0$ = returnAllUrl;
  _.returnTypeUrl_za3lpa$ = returnTypeUrl;
  _.returnByIdUrl_za3lpa$ = returnByIdUrl;
  _.returnByNameUrl_61zpoe$ = returnByNameUrl;
  _.initPage = initPage;
  _.removeElement_61zpoe$ = removeElement;
  _.destroyOldList = destroyOldList;
  _.destroyOldSelect = destroyOldSelect;
  _.callToDestroy_19mbxw$ = callToDestroy;
  _.getValueGeneration_61zpoe$ = getValueGeneration;
  _.getValueType_61zpoe$ = getValueType;
  _.searchByValue_61zpoe$ = searchByValue;
  _.initSound_61zpoe$ = initSound;
  _.initButtonElements = initButtonElements;
  _.initEventButton_7th3yx$ = initEventButton;
  _.toggleErrorDialogClass_e0t6x9$ = toggleErrorDialogClass;
  _.searchGeneratioButtonEvent = searchGeneratioButtonEvent;
  _.changeSelectButton_okdpp2$ = changeSelectButton;
  _.selectScreenVisor_61zpoe$ = selectScreenVisor;
  _.generateOption_ks8e06$ = generateOption;
  _.generateOptionSelect_61zpoe$ = generateOptionSelect;
  _.sortList_61zpoe$ = sortList;
  _.main = main;
  PokemonPresenter.prototype.loadPokemons_vux9f0$ = PokemonList$Presenter.prototype.loadPokemons_vux9f0$;
  PokemonPresenter.prototype.loadOptionPokemons_vux9f0$ = PokemonList$Presenter.prototype.loadOptionPokemons_vux9f0$;
  API_URL = 'https://pokeapi.co/api/v2';
  generationValues = listOf(['GenerationI', 'GenerationII', 'GenerationIII', 'GenerationIV', 'GenerationV', 'GenerationVI', 'GenerationVII', 'GenerationVIII', 'GenerationPlus']);
  generationKeys = listOf(['1\xAA Gera\xE7\xE3o', '2\xAA Gera\xE7\xE3o', '3\xAA Gera\xE7\xE3o', '4\xAA Gera\xE7\xE3o', '5\xAA Gera\xE7\xE3o', '6\xAA Gera\xE7\xE3o', '7\xAA Gera\xE7\xE3o', '8\xAA Gera\xE7\xE3o', 'Outros']);
  typeValues = listOf(['Normal', 'Fire', 'Water', 'Electric', 'Grass', 'Ice', 'Fighting', 'Poison', 'Ground', 'Flying', 'Psychic', 'Bug', 'Rock', 'Ghost', 'Dragon', 'Dark', 'Steel', 'Fairy']);
  typeKeys = listOf(['Normal', 'Fogo', '\xC1gua', 'El\xE9trico', 'Grama', 'Gelo', 'Lutador', 'Venenoso', 'Terra', 'Voador', 'Ps\xEDquico', 'Inseto', 'Pedra', 'Fantasma', 'Drag\xE3o', 'Noturno', 'Met\xE1lico', 'Fada']);
  listStoragePokemon = ArrayList_init_0();
  listStorageImagePokemon = ArrayList_init_0();
  main();
  Kotlin.defineModule('main', _);
  return _;
}(typeof main === 'undefined' ? {} : main, kotlin);
