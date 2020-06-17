class Api::PlanetsController < ApplicationController

  def index
    # i want to grap solar_system that is passed in params
    # and return the planets assicated with that ss
    ss = SolarSystem.find(params[:solar_system_id])
    render json: ss.planets

    #  render json: Planet.all
  end
end
