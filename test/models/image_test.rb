# == Schema Information
#
# Table name: images
#
#  id         :integer          not null, primary key
#  title      :string(255)
#  image      :string(255)
#  tags       :string(255)
#  location   :string(255)
#  mode       :string(255)
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_images_on_user_id  (user_id)
#

require 'test_helper'

class ImageTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
