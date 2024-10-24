#!/bin/bash

# Configuration variables
directory="_site"
extensions=("html")

# Iterate over the files in the directory with the specified extensions
for ext in "${extensions[@]}"; do
  # Find files with the given extensions and process each one
  find "$directory" -type f -name "*.$ext" | while read -r file; do
    # Use sed to replace href starting with "/"
    sed -i.bak -E 's/href="\/([^"]*)"/href="\1"/g' "$file"
    echo "Processed: $file"
  done
done
