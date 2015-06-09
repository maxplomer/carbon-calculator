class MyFootprintsController < ApplicationController

  def index
    render json: current_user.footprints.sort_by(&:id).reverse
  end

end
