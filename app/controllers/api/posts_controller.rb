class Api::PostsController < ApplicationController
    before_action :authenticate_user!
    def index
         @anime = Anime.find(params[:anime_id])
         @posts = @anime.posts
         render json: @posts
    end

    def show
        @anime = Anime.find(params[:anime_id])
        @post= Post.find(params[:id])
        render json: @post
    end 

   def create
    @animes = Anime.find(params[:anime_id])
    @post = @animes.posts.new(post_params)
    @post.user_id = current_user.id
    # @user = current_user.posts.new(post_params)
        if @post.save
        render json: @post
        else
        render json: {
           message: "error creating post"
        }
        end
    end

    def destroy
        @anime = Anime.find(params[:anime_id])
        @post = @anime.posts.find(params[:id])
        @post.destroy
        render json: {
          message: 'Post successfully deleted'
        }
      end

    def new
        @anime = Anime.find(params[:anime_id])
        @post = @anime.posts.new
    end

    def edit
        @anime = Anime.find(params[:anime_id])
        @post = Post.find(params[:id])
    end

    def update
        @anime = Anime.find(params[:anime_id])
        @post = Post.find(params[:id])
        @post.update(post_params)
    end
    

     private
     def post_params
         params.require(:post).permit(:comment)
     end

end
