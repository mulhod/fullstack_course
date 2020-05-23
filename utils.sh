#!/bin/zsh

function add_app_files() {
    git add README.md package* public src .gitignore
}

function remove_unneeded_app_files() {
    rm -f src/{App.js,App.css,App.test.js,logo.svg,serviceWorker.js}
}

export WEATHER_API_KEY=453588fab5649bb37a12241fc598c6e9
