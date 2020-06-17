class Api::PlanetsController < ApplicationController
  before_action :set_solar_system

  def index
    # i want to grap solar_system that is passed in params
    # and return the planets assicated with that
    render json: @solar_system.planets
  end
  def create
    planet = @solar_system.planets.new(planet_params)
    if planet.save
      render json: planet
    else
      render json: { errors: planet.errors, status: 422 }
    end
  end
  def update
    planet = Planet.find(params[:id])
    if planet.update(planet_params)
      render json: planet
    else
      render json: { errors: planet.errors, status: 422 }
    end
  end
  def destroy
    planet = Planet.find(params[:id])
    render json: planet.destroy
  end
  private
  def set_solar_system
    @solar_system = SolarSystem.find(params[:solar_system_id])
  end
  def planet_params
    params.require(:planet).permit(:name, :inhabited, :size)
  end
end
