class CreateFootprints < ActiveRecord::Migration
  def change
    create_table :footprints do |t|
      t.integer :user_id
      t.string :energy_source
      t.text :carbon_sources
      t.float :co2_output

      t.timestamps
    end
  end
end
