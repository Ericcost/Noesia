class CreateEnigmas < ActiveRecord::Migration[7.0]
  def change
    create_table :enigmas do |t|
      t.string :title, null: false
      t.text :description, null: false

      t.timestamps
    end
  end
end
