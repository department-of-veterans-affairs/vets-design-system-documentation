require 'uri'

module VADS

  def regexreplace(input, regex, replacement = '')
    input.to_s.gsub(Regexp.new(regex), replacement.to_s)
  end
end

Liquid::Template.register_filter(VADS)
