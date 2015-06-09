class Post < ActiveRecord::Base

  belongs_to :user

  def co2_output
    9999999
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
