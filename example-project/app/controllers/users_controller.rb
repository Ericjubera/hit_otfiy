
class UsersController < ApplicationController
    def index
        render json:User.all, status: :ok 
    end

    def show 
      user=User.find(params[:id])
          render json: current_user #,include: :pipes #serializer: UserPipesSerializer
    end

    def create
        user=User.create!(user_params)
        render json:user, status: :created
    end 

    private
    def user_params
        params.permit(:name,:password,:age)
    end
end
