class VisitorsController < ApplicationController
	before_action :redirect_if_logged_in

	def redirect_if_logged_in
		if user_signed_in?
			redirect_to dashboard_path
		end
	end
end
