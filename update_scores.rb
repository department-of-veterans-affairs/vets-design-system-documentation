#!/usr/bin/env ruby

require 'yaml'

# Get all YAML files in the component-checklist directory
files = Dir.glob('src/_data/component-checklist/*.yml')
puts "Found #{files.length} files to update"

files.each do |file|
  next if file.include?('va-accordion.yml') # Skip the one we already updated
  
  begin
    content = File.read(file)
    
    # Replace 'score:' with 'web-score:' but preserve the spacing
    updated_content = content.gsub(/^(\s+)score:/, '\1web-score:')
    
    # Only write if changes were made
    if content != updated_content
      File.write(file, updated_content)
      puts "✅ Updated: #{File.basename(file)}"
    else
      puts "⚠️  No changes needed: #{File.basename(file)}"
    end
  rescue => e
    puts "❌ Error updating #{file}: #{e.message}"
  end
end

puts "\nBatch update completed!"
