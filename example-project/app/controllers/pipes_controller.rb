class PipesController < ApplicationController
    def index
        render json:Pipe.all, status: :ok 
    end


    def create
        pipe= Pipe.create!(pipe_params)
        render json: pipe, status: :created
    end 
    private
    def pipe_params
        params.permit(:item_name,:color,:size,:image)
    end
end
