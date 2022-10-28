class PipesController < ApplicationController
    def index
        render json:Pipe.all, status: :ok 
    end
    def  show
        pipe= Pipe.find(params[:id])
        render json:pipe
    end

    def create
        pipe= Pipe.create!(pipe_params)
        render json: pipe, status: :created
    end 

    def destroy
        pipe= Pipe.find(params[:id])
        pipe.destroy
    end
    private
    def pipe_params
        params.permit(:item_name,:color,:size,:image)
    end
end
