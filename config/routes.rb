# frozen_string_literal: true

Rails.application.routes.draw do
  namespace :admin do
    resources :users
    resources :foods

    root to: 'users#index'
  end

  resource :session, only: %i[show create destroy]
  resources :foods, only: %i[index create update destroy]

  root to: 'home#index'
  get '*path' => 'home#index'
end
