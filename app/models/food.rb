# frozen_string_literal: true

class Food < ApplicationRecord
  validates :name, :parameterized_name, presence: true
end
