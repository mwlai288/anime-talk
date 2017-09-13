class Post < ApplicationRecord
  belongs_to :anime
  belongs_to :user
end
