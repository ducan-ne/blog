#!/bin/zsh

# Required parameters:
# @raycast.schemaVersion 1
# @raycast.title Update blog content
# @raycast.mode fullOutput
#
# @raycast.icon ../public/astro.png
# @raycast.iconDark ../public/astro.png

source ~/.zshrc
cd ..
pnpm run build
pnpm run deploy
