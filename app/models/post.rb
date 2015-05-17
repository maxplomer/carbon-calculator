class Post < ActiveRecord::Base
  belongs_to :user

  def co2_output
    self.gal_of_gas_per_day + gal_of_hotwater_per_day + kwh_of_energy_per_day
  end

  def as_json(options = {})
    super(options.merge(include: [:user]))
  end
end
