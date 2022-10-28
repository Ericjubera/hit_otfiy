class HitsController < ApplicationController
    def index
        render json:Hit.all, status: :ok 

    end
    def show
        hitss=Hit.find(params[:id])
        render json:hitss
    end 

    def create
        hits=Hit.create!(hit_params)
        render json: hits
    end

    def update
        plant=Hit.find(params[:id])
        plant.update(time:Time.now)
        render json: plant 
    end

    def destroy
        pipe= Hit.find(params[:id])
        pipe.destroy
    end
private

def hit_params
    params.permit(:user_id,:pipe_id)
    end

    
end
