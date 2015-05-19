class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.float :gal_of_gas_per_day
      t.float :gal_of_hotwater_per_day
      t.string :hotwater_source
      t.float :kwh_of_energy_per_day
      t.string :energy_source
      t.float :lbs_of_meat_per_day
      t.float :airline_miles_per_year

      t.timestamps
    end
  end
end
