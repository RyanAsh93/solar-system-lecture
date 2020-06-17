class CreatePlanets < ActiveRecord::Migration[6.0]
  def change
    create_table :planets do |t|
      t.string :name
      t.boolean :inhabited
      t.integer :size
      t.belongs_to :solar_system, null: false, foreign_key: true

      t.timestamps
    end
  end
end
