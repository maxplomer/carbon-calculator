class RecentFootprintsController < ApplicationController

  def index
    render json: Footprint.find(:all, :order => "id desc", :limit => 5).reverse
  end

end
