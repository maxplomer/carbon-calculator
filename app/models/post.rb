class Post < ActiveRecord::Base
  belongs_to :user

  def co2_output
    result = self.gal_of_gas_per_day 
    result += self.gal_of_hotwater_per_day 
    result += self.kwh_of_energy_per_day 
    result += self.lbs_of_meat_per_day
    result += self.airline_miles_per_year

    result
  end

  def formatted_created_at
    self.created_at
      .in_time_zone("Eastern Time (US & Canada)")
      .strftime("%m/%d/%Y")
  end
end
