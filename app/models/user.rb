class User < ActiveRecord::Base
  # Include default devise modules.
  devise :database_authenticatable, :registerable,
          :recoverable, :rememberable, :trackable, :validatable,
          :omniauthable
  has_many :posts, dependent: :destroy
  has_many :animes
  include DeviseTokenAuth::Concerns::User
end
