class Api::AnimesController < ApplicationController
    before_action :authenticate_user!    
    def index 
        @animes = Anime.all
        render json: @animes
    end

    def show
        @animes = Anime.find(params[:id])
        render json: {
            animes: @animes
        }
    end

    def create
        @animes = Anime.create!(anime_params)
        render json: {
            animes: @animes
        }
    end

    private
    def anime_params
        params.require(:anime).permit(:title, :plot, :poster)
    end
end
