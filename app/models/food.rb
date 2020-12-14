# frozen_string_literal: true

class Food < ApplicationRecord
  validates :name, :energy, :fat, :carbohydrates, :protein, presence: true

  attribute(:parameterized_name) do
    ActiveSupport::Inflector.parameterize(name, separator: " ")
  end
end
