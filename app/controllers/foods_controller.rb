# frozen_string_literal: true

class FoodsController < ApplicationController
  def index
    order = params[:order]
    search = params[:name]

    if search.nil?
      results = Food.where("name like ?", "%#{search}%")
    else
      results = Food.all
    end

    if order === 'energy'
      ordered_results = results.order(energy: :asc)      
    elsif order === 'fat'
      ordered_results = results.order(fat: :asc) 
    elsif order === 'carbohydrates'
      ordered_results = results.order(carbohydrates: :asc) 
    elsif order === 'protein'
      ordered_results = results.order(protein: :asc)     
    else
      ordered_results = results
    end

    render json: ordered_results
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
