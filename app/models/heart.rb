# == Schema Information
#
# Table name: hearts
#
#  id         :integer          not null, primary key
#  user_id    :integer
#  image_id   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_hearts_on_image_id  (image_id)
#

class Heart < ActiveRecord::Base
  belongs_to :image
  belongs_to :user
end
