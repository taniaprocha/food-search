class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  include Pagy::Backend
  private

  def not_authenticated
    head :not_found
  end
end
