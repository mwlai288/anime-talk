class Api::AnimesController < ApplicationController
    def index 
        @animes = Anime.all
        render json: @animes
    end

    def show
        @animes = AnimeList.find(params[:id])
        @posts = @animes.posts
        render json: {
            animes: @anime,
            posts: @posts
        }
    end
end
