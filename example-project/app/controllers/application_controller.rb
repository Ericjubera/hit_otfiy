class ApplicationController < ActionController::API
rescue_from ActiveRecord::RecordInvalid, with: :nosir
rescue_from ActiveRecord::RecordNotFound, with: :nosirski
    include ActionController::Cookies
    # def hello_world
    #     session[:count] = (session[:count] || 0) + 1
    #     render json: { count: session[:count] }
    #   end
    private
    def nosir(invaild)
      render json: {errors:invaild.record.errors},status: 404
    end
    def nosirski(error)
      render json: {errors:{error.model=>"Not Found"}},
      status: :not_found
    end
end
