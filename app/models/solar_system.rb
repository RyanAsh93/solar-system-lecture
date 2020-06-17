class SolarSystem < ApplicationRecord
  has_many :planets, dependent: :destroy
end
