# frozen_string_literal: true

class Information < ApplicationRecord
  belongs_to :food

  validates :energy, :fat, :carbohydrates, :protein, presence: true
end
