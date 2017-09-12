Rails.application.routes.draw do
  namespace :api do
    resources :animes do
      resources :posts
    end
  end
end
