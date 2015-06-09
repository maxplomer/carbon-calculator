class Footprint < ActiveRecord::Base
  serialize :carbon_sources

  include Co2Output

  before_validation :ensure_co2_output

  belongs_to :user


  def self.generate_co2_output(footprint)
    Co2Output::calculate_co2_output(footprint)
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

  private

  def ensure_co2_output
    self.co2_output ||= self.class.generate_co2_output(self)
  end

end
