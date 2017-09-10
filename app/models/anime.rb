class Anime < ApplicationRecord
    has_many :posts, dependent: :destroy
end
