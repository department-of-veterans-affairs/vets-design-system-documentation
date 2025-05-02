# Plugin to make Storybook environment variable available to Jekyll
module Jekyll
  class StorybookEnvGenerator < Generator
    safe true

    def generate(site)
      # Set the storybook_path based on environment variable if it exists
      if ENV['STORYBOOK_ENV']
        port = ENV['STORYBOOK_ENV']
        puts "Setting storybook_path to use port #{port}"
        site.config['storybook_path'] = "http://localhost:#{port}"
      else
        puts "STORYBOOK_ENV environment variable not found, using default storybook_path: #{site.config['storybook_path']}"
      end
    end
  end
end