install:
	npm ci

writer:
	npm run babel-node bin/writer.js

reader:
	npm run babel-node bin/reader.js

remover:
	npm run babel-node bin/remover.js

lint:
	npx eslint .

publish:
	npm publish --dry-run
