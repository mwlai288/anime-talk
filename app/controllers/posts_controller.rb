class PostsController < ApplicationController
    def index
        @anime = Anime.find(params[:anime_id])
        # @posts = @anime.posts.all.order('created_at DESC')
        @posts = @anime.posts.order('created_at DESC').paginate(:page => params[:page], :per_page => 10)
        # @posts = Post.all
    end

    def show
        @anime = Anime.find(params[:anime_id])
        @post= Post.find(params[:id])
    end

    def destroy
        @anime = Anime.find(params[:anime_id])
        @post = Post.find(params[:id])
        @post.delete
        redirect_to anime_posts_path(@anime)
      end
      
    def create
    @anime = Anime.find(params[:anime_id])
    @post = @anime.posts.new(post_params)
    if @post.save
        redirect_to anime_post_path(@anime, @post)
    else
        flash.now[:alert] = @post.errors.full_messages.join(", ")
        render :new
    end
    # redirect_to anime_posts_path(@anime, @post)
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
    
        redirect_to anime_post_path(@anime, @post)
    end
    

     private
     def post_params
         params.require(:post).permit(:comment)
     end

end
