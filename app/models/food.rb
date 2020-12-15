# frozen_string_literal: true

class Food < ApplicationRecord
  validates :name, :parameterized_name, :energy, :fat, :carbohydrates, :protein, presence: true
end
