class MyPostsController < ApplicationController

  def index
    render json: current_user.posts.sort_by(&:id).reverse
  end

end
