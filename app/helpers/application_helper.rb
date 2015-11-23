module ApplicationHelper
	def full_url(image)
		request.protocol + request.host_with_port + image.url if image.url
	end
end
