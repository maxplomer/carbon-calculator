class CreateFootprints < ActiveRecord::Migration
  def change
    create_table :footprints do |t|
      t.integer :user_id
      t.text :data

      t.timestamps
    end
  end
end
