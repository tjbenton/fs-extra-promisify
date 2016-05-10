# MAKEFLAGS = -j1
PATH := ./node_modules/.bin:$(PATH)
SHELL := /bin/bash

.PHONY: test publish rebuild release

test:
	tape -r babel-register test/index.test.js | tap-spec

publish: all
	npm publish

rebuild:
	rm -rf node_modules/ npm-debug.log
	npm i

VERS := "patch"
TAG := "latest"

release:
	git checkout master
	git pull --rebase
	make test
	npm version $(VERS) -m "Release %s"
	npm publish --tag $(TAG)
	git push --follow-tags