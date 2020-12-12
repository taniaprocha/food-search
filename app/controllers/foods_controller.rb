# frozen_string_literal: true

class FoodsController < ApplicationController
  def index
    render json: Food.all
  end

  def create
    food = Food.new(food_params)
    food.save
  end

  def destroy
    Food.find(params[:id]).destroy
  end

  def update
    food = Food.find(params[:id])
    food.update_attributes(food_params)
  end

  private

  def food_params
    params.require(:food).permit(:name, :energy, :fat, :carbohydrates, :protein)
  end
end
