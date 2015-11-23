module ApplicationHelper
	def full_url(image)
		request.protocol + request.host_with_port + image.url if image.url
	end
	def uri?(string)
	  uri = URI.parse(string)
	  %w( http https ).include?(uri.scheme)
	rescue URI::BadURIError
	  false
	rescue URI::InvalidURIError
	  false
	end
end
