class Api::SolarSystemsController < ApplicationController
  
  def index
    render json: SolarSystem.all
  end

  def create
    # SolarSystem.create(name: params[:solar_system][:name])
    solar_system = SolarSystem.new(solar_system_params)
    if solar_system.save
      render json: solar_system
    else
      render json: { errors: solar_system.errors, status: 422 }
    end
  end

  def update
    solar_system = SolarSystem.find(params[:id])
    if solar_system.update(solar_system_params)
      render json: solar_system
    else
      render json: { errors: solar_system.errors, status: 422 }
    end
  end

  def destroy
    solar_system = SolarSystem.find(params[:id])
    render json: solar_system.destroy
  end

  private

  def solar_system_params
    params.require(:solar_system).permit(:name)
  end
end