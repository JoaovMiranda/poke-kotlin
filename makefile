run: main.js
	php -S 0.0.0.0:8000
	#python server.py

js/%.js : kt/%.kt
	kotlinc-js -nowarn $< -output $@

