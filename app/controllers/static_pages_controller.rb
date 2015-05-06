class StaticPagesController < ApplicationController
  def root
  	render :root, layout: false
  end
end
