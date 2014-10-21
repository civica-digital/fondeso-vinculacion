class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session
  layout :layout_by_resource
  respond_to :html, :json
  before_action :configure_permitted_parameters, if: :devise_controller?
  before_action :configure_webapp

  protected

    def configure_permitted_parameters
      devise_parameter_sanitizer.for(:sign_up) << :name
    end

    def configure_webapp
      @app_title = ENV["APP_NAME"]
    end

    def layout_by_resource
      if devise_controller? && resource_name == :user || "landing" || "terms_and_conditions" || "privacy"
        "fondesosession"
      else
        "application"
      end
    end
end
