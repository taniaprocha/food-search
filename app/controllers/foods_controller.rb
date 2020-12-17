# frozen_string_literal: true

class FoodsController < ApplicationController
  def index
    if params[:search].present?
      results = Food.where("parameterized_name like ?", "%#{params[:search]}%")
    else
      results = Food.all
    end

    render json: ordered_results(results, params[:order], params[:page])
  end

  def create
    Food.create(name: params[:name], parameterized_name: ActiveSupport::Inflector.parameterize(params[:name]), energy: params[:energy], fat: params[:fat], carbohydrates: params[:carbohydrates], :protein => params[:protein])
  end

  def destroy
    Food.find(params[:id]).destroy
  end

  def update
    food = Food.find(params[:id])
    food.update(food_params)
  end

  private

  def ordered_results(results, order, page)
    if order === 'energy'
      ordered_results = results.order(energy: :asc)      
    elsif order === 'fat'
      ordered_results = results.order(fat: :asc) 
    elsif order === 'carbohydrates'
      ordered_results = results.order(carbohydrates: :asc) 
    elsif order === 'protein'
      ordered_results = results.order(protein: :asc)     
    else
      ordered_results = results.order(name: :asc)
    end

    return pagy(ordered_results, page: page, items: 5)
  end

  def food_params
    params.require(:food).permit(:name, :energy, :fat, :carbohydrates, :protein)
  end
end
