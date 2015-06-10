class FootprintSerializer < ActiveModel::Serializer

  attributes :id, :energy_source, :carbon_sources, :co2_output, 
             :formatted_created_at, :formatted_updated_at, :updated_at_id,
             :created_at

  has_one :user

end