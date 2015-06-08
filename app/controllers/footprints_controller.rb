class FootprintsController < ApplicationController

  before_filter :authenticate_user!, only: [:create]

  def create

  	logger.info("HELLOWORLDHELLOWORLDHELLOWORLD")

    logger.info(footprint_params)

    logger.info("HELLOWORLDHELLOWORLDHELLOWORLD")

    # render json: Footprint.create(
    #   footprint_params.merge({
    #     user_id: current_user.id
    #   })
    # )
  end

  private

  def footprint_params
    params.require(:footprint).permit(
      :energy_source,
      carbon_sources: [
		"gallons of Heating Oil",
		"gallons of Propane",
		"kilowatt-hours of Electricity",
		"metric tons of Coal",
		"metric tons of Wood",
		"therms of LP Gas",
		"therms of Natural Gas",
		"pounds of Meat",
		"gallons of Gasoline",
		"miles in a Taxi",
		"miles on a Bus"
      ]
    )
  end

end
