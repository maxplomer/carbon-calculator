class PostSerializer < ActiveModel::Serializer

  attributes :id, :gal_of_gas_per_day, :gal_of_hotwater_per_day, 
             :hotwater_source, :kwh_of_energy_per_day, :energy_source,
             :lbs_of_meat_per_day, :airline_miles_per_year, :co2_output, 
             :formatted_created_at

  has_one :user

end