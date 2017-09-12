class Api::PostsController < ApplicationController
    def index
         @animes = Anime.find(params[:anime_id])
         @posts = @anime.posts.all
         render json: @posts
    end

    def show
        @animes = Anime.find(params[:anime_id])
        @post= Post.find(params[:id])
        render json: @posts
    end

   def create
    @animes = Anime.find(params[:anime_id])
    @post = @animes.posts.new(post_params)
        if @post.save
        render json: @posts
        else
        render json: {
           message: "error creating post"
        }
        end
    end

    def destroy
        @animes = Anime.find(params[:anime_id])
        @posts = @animes.posts.find(params[:id])
        @posts.destroy
        render json: {
          message: 'Post successfully deleted'
        }
      end

    def new
        @animes = Anime.find(params[:anime_id])
        @posts = @animes.posts.new
    end

    def edit
        @animes = Anime.find(params[:anime_id])
        @posts = Post.find(params[:id])
    end

    def update
        @animes = Anime.find(params[:anime_id])
        @posts = Post.find(params[:id])
        @posts.update(post_params)
    
        redirect_to anime_post_path(@animes, @post)
    end
    

     private
     def post_params
         params.require(:post).permit(:comment)
     end

end
