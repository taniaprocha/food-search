# frozen_string_literal: true

class FoodsController < ApplicationController
  def index
    render json: Food.all
  end

  def create
    food = Food.new(food_params)
    food.save

    render json: food, status: :created
  end

  private

  def food_params
    params.require(:food).permit(:name, :energy, :fat, :carbohydrates, :protein)
  end
end
