install-deps:
	npm ci

install: 
	npm install

brain-games:
	node bin/brain-games.js

brain-even: 
	node bin/brain-even.js	

brain-calc: 
	node bin/brain-calc.js

brain-gcd: 
	node bin/brain-gcd.js

brain-progression: 
	node bin/brain-progression.js

brain-prime: 
	node bin/brain-prime.js	
#Андрей, как здесь лучше указать команды для запуска игр, как выше написано в коде,
#начиная с команды brain-games или так:
#start:
#	node bin/brain-games.js
#	node bin/brain-even.js	
#	node bin/brain-calc.js
#	node bin/brain-gcd.js
#	node bin/brain-progression.js
#	node bin/brain-prime.js		

publish:
	npm publish --dry-run

lint:
	npx eslint .