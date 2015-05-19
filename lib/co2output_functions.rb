module Co2outputFunctions
 
  class Co2outputCalculation
    attr_writer :gal_of_gas_per_day, :gal_of_hotwater_per_day, :hotwater_source
    attr_writer :kwh_of_energy_per_day, :energy_source, :lbs_of_meat_per_day
    attr_writer :airline_miles_per_year

    def initialize
      @gal_of_gas_per_day
      @gal_of_hotwater_per_day
      @hotwater_source
      @kwh_of_energy_per_day
      @energy_source
      @lbs_of_meat_per_day
      @airline_miles_per_year
    end

    def result
      @gal_of_gas_per_day + @gal_of_hotwater_per_day + @kwh_of_energy_per_day + @lbs_of_meat_per_day + @airline_miles_per_year
    end
  end

end