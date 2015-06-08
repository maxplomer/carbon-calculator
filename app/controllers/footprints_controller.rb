class FootprintsController < ApplicationController

  before_filter :authenticate_user!, only: [:create]

  def create

  	logger.info("HELLOWORLDHELLOWORLDHELLOWORLD")

    logger.info(params.inspect)

    # render json: Footprint.create(
    #   footprint_params.merge({
    #     user_id: current_user.id
    #   })
    # )
  end

  private

  def footprint_params
    params.require(:footprint).permit(
      :gal_of_gas_per_day,
      :gal_of_hotwater_per_day,
      :hotwater_source,
      :kwh_of_energy_per_day,
      :energy_source,
      :lbs_of_meat_per_day,
      :airline_miles_per_year
    )
  end

end
