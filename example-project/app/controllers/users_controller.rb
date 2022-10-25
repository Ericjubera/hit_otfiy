
class UsersController < ApplicationController
    def index
        render json:User.all, status: :ok 
    end

    def show 
        use=User.find(params[:id])
         render json:use, serializer: UserPipesSerializer
    end

    def create
        use=User.create!(user_params)
        render json:use, status: :created
    end 

    private
    def user_params
        params.permit(:name,:password,:age)
    end
end
