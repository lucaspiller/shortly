server:
	python -m SimpleHTTPServer

dev:
	coffee --watch --join lib/shortly.js --compile src/*.coffee

deploy:
	git push -f origin HEAD:gh-pages
