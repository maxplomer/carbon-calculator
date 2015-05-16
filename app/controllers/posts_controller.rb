class PostsController < ApplicationController

  before_filter :authenticate_user!, only: [:create]

  def index
    respond_with Post.all
  end

  def create
    respond_with Post.create(
      post_params.merge({
        user_id: current_user.id
      })
    )
  end

  def show
    respond_with Post.find(params[:id])
  end

  private
  
  def post_params
    params.require(:post).permit(
      :link, 
      :title,
      :gal_of_gas_per_day,
      :gal_of_hotwater_per_day
    )
  end

end
