class Footprint < ActiveRecord::Base
  serialize :carbon_sources
  include Co2output

  belongs_to :user
end
