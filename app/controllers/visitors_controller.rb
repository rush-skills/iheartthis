class VisitorsController < ApplicationController
	before_action :redirect_if_logged_in

	def index
		@images = Image.all.sample(6)
	end

	def redirect_if_logged_in
		if user_signed_in?
			redirect_to dashboard_path
		end
	end
end
