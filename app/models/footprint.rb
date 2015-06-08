class Footprint < ActiveRecord::Base
  include Co2output

  belongs_to :user
end
