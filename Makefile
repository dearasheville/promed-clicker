install:
	npm ci

paraclinic-clicker:
	npm run babel-node bin/paraclinic-clicker.js

policlinic-clicker:
	npm run babel-node bin/policlinic-clicker.js

paraclinic-remover:
	npm run babel-node bin/paraclinic-remover.js

policlinic-remover:
	npm run babel-node bin/policlinic-remover.js

lint:
	npx eslint .

publish:
	npm publish --dry-run
