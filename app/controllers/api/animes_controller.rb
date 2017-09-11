class Api::AnimesController < ApplicationController
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
end
