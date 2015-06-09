module Co2Output
 
  def Co2Output.calculate_co2_output(footprint)
    energy_source = footprint.energy_source # "Coal"
    carbon_sources = footprint.carbon_sources # {"kilowatt-hours of Electricity"=>1234, "metric tons of Wood"=>234}


    # conversion to equivalent carbon dioxide (CO2e), numbers from carbonfootprint.com
  
    # Electricity (on average, not using):
    # 100000 kWh = 537.5 metric tons of CO2e
    # Natural Gas:
    # 1000000 therms = 5420.93 metric tons of CO2e
    # Heating Oil:
    # 100000 US gallons = 960.69 metric tons of CO2e
    # Coal:
    # 100 metric tons = 284.67 metric tons of CO2e
    # LP Gas:
    # 100000 therms = 628.63 metric tons of CO2e
    # Propane:
    # 100000 US gallons = 568.64 metric tons of CO2e
    # Wood:
    # 100 metric tons = 5.59 metric tons of CO2e


    # co2e for different power sources, unit: tonnes CO2e/GWh

    # source       mean   low   high
    # Coal          888   756   1310
    # Oil           733   547    935
    # Natural Gas   499   362    891
    # Solar PV       85    13    731
    # Biomass        45    10    101
    # Nuclear        29     2    130
    # Hydroelectric  26     2    237
    # Wind           26     6    124 

    # http://www.world-nuclear.org/uploadedFiles/org/WNA/Publications/Working_Group_Reports/comparison_of_lifecycle.pdf

    ##### Estimates
    # since http://en.wikipedia.org/wiki/Life-cycle_greenhouse-gas_emissions_of_energy_sources
    # says Solar Thermal is about same impact as hydropower and wind, and I can infer other ratios as well...
    # Therefore I will assume:
    # Solar Thermal = 26 tonnes CO2e/GWh
    # Biogas =  26 tonnes CO2e/GWh
    # Diesel = 733 tonnes CO2e/GWh
    # Fuel Cell = ( 664 / 778 ) * 733 tonnes CO2e/GWh    (used ratio to heavy oil)


    # revision for nuclear
    # Sovacool survey says nuclear is about 66/443 that of natural gas
    # Nuclear = ( 66 / 443 ) * 499

    #still need meat taxi and bus 
    

    # Final numbers

    co2_energy_sources = {
      "Coal": 888,
      "Diesel": 733,
      "Heavy Oil": 733,
      "Fuel Cell": 626,
      "Natural Gas": 499,
      "Nuclear": 74,
      "Geothermal": ,
      "Solar PV": 85,
      "Biomass": 45,
      "Solar Thermal": 26,
      "Biogas": 26,
      "Hydroelectric": 26,
      "Wind": 26
    }




    result = 0













    123.456
  end

end