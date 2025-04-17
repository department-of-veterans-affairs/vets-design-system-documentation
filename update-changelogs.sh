#!/bin/bash

# Clear changelogs folder
rm -rf json_data_cache

# Build site
bundle exec jekyll build

# Get the current UTC timestamp
BUILD_TIME=$(date -u +"%Y-%m-%dT%H:%M:%SZ")

echo -e "\033[32m\n\"What's New\" last updated time changed to: $BUILD_TIME\033[0m\n"

# Write or overwrite the changelogs.yml file in _data directory
echo "last_updated: '$BUILD_TIME'" > src/_data/changelogs.yml

# Prompt to run local dev
read -p $'\033[36mDo you want to run the local dev environment? (y/n): \033[0m' user_input
user_input=${user_input:-y}

if [[ "$user_input" =~ ^[Yy]$ ]]; then
  yarn start
fi
