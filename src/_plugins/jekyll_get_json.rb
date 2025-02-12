require 'json'
require 'open-uri'

module Jekyll_Get_Json
  class Generator < Jekyll::Generator
    safe true
    priority :highest

    def get_final_url(url)
      if url.start_with? "https://api.github.com/"
        access_token = ENV['GITHUB_ACCESS_TOKEN']
        if access_token
          return "#{url}?access_token=#{access_token}"
        end
      end
      url
    end

    def load_json(site, feed)
      name = feed['name']
      url = feed['json']
      path = ".json_data_cache/#{name}.json"
      if not File.exist?(path)
        FileUtils.mkpath File.dirname(path)
        print "* Caching #{url}\n".green
        print "  in "
        print "#{path}\n".cyan
        githubJekyllCache = URI(get_final_url(url)).open
        data = JSON.load(githubJekyllCache)
        File.open(path, 'wb') do |file|
          file << JSON.pretty_generate(data)
        end
      end
      cacheJSON = File.open(path)
      site.data[name] = JSON.load(cacheJSON)
    end

    def generate(site)
      config = site.config['github_releases']
      if !config
        return
      end
      if !config.kind_of?(Array)
        config = [config]
      end
      config.each do |feed|
        url = feed['json']
        begin
          load_json(site, feed)
        rescue => e
          print "jekyll_get: error fetching #{url}: #{e}\n".red
          next
        end
      end
    end
  end
end