#!/bin/zsh

function add_app_files() {
    git add README.md package* public src .gitignore
}

function remove_unneeded_app_files() {
    rm -f src/{App.js,App.css,App.test.js,logo.svg,serviceWorker.js}
}
