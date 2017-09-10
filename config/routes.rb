Rails.application.routes.draw do
  namespace :api do
    resources :animes, :posts do
      resources :posts
    end
  end
end
