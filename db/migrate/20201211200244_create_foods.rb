# frozen_string_literal: true

class CreateFoods < ActiveRecord::Migration[6.0]
  def change
    create_table :foods do |t|
      t.string :name, null: false
      t.string :parameterized_name, null: false

      t.timestamps
    end

    create_table :information do |t|
      t.integer :energy, null: false
      t.decimal :fat, null: false
      t.decimal :carbohydrates, null: false
      t.decimal :protein, null: false

      t.timestamps
    end
  end
end
