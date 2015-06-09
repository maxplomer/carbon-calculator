class Footprint < ActiveRecord::Base
  serialize :carbon_sources
  include Co2output

  belongs_to :user

  def co2_output
    # calc = Co2outputCalculation.new

    # calc.gal_of_gas_per_day = self.gal_of_gas_per_day 
    # calc.gal_of_hotwater_per_day = self.gal_of_hotwater_per_day 
    # calc.kwh_of_energy_per_day = self.kwh_of_energy_per_day 
    # calc.lbs_of_meat_per_day = self.lbs_of_meat_per_day
    # calc.airline_miles_per_year = self.airline_miles_per_year

    # calc.result
    9999
  end

  def formatted_created_at
    self.created_at
      .in_time_zone("Eastern Time (US & Canada)")
      .strftime("%m/%d/%Y")
  end

  def formatted_updated_at
    self.updated_at
      .in_time_zone("Eastern Time (US & Canada)")
      .strftime("%m/%d/%Y")
  end

  def updated_at_id
    self.updated_at.to_i
  end
end
