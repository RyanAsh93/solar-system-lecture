class CreateSolarSystems < ActiveRecord::Migration[6.0]
  def change
    create_table :solar_systems do |t|
      t.string :name

      t.timestamps
    end
  end
end
