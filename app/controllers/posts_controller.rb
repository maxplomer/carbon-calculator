class PostsController < ApplicationController

  before_filter :authenticate_user!, only: [:create]

  def index
    render json: Post.all
  end

  def create
    render json: Post.create(
      post_params.merge({
        user_id: current_user.id
      })
    )
  end

  def show
    render json: Post.find(params[:id])
  end

  private
  
  def post_params
    params.require(:post).permit(
      :gal_of_gas_per_day,
      :gal_of_hotwater_per_day,
      :hotwater_source,
      :kwh_of_energy_per_day,
      :energy_source,
      :lbs_of_meat_per_day
    )
  end

end
