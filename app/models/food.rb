# frozen_string_literal: true

class Food < ApplicationRecord
  validates :name, :energy, :fat, :carbohydrates, :protein, presence: true
end
