class HitsController < ApplicationController
    def index
        render json:Hit.all, status: :ok 

    end

    def update
        plant=Hit.find(params[:id])
        plant.update(time:Time.now)
        render json: plant 
        
    end

    
end
