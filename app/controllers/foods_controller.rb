# frozen_string_literal: true

class FoodsController < ApplicationController
  def index
    search = params[:search]  

    if search.blank?
      results = Food.all
    else
      results = Food.where("parameterized_name like ?", "%#{search}%")
    end

    render json: ordered_results(results, params[:order])
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

  def ordered_results(results, order)
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

    return ordered_results
  end

  def food_params
    params.require(:food).permit(:name, :energy, :fat, :carbohydrates, :protein)
  end
end
