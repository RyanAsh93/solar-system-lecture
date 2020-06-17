Product.destroy_all
100.times do
  Product.create(
    name: Faker::Commerce.product_name,
    description: Faker::Lorem.sentence,
    price: Faker::Commerce.price.to_f,
    department: Faker::Commerce.department,
  )
end

puts "100 Products Seeded"

SolarSystem.destroy_all
Planet.destroy_all
10.times do |i|
  s = SolarSystem.create(name: Faker::Space.galaxy)
  5.times do |j|
    s.planets.create(name: Faker::Space.meteorite, inhabited: false, size:rand(1000...100000))
  end
end

puts "SolarSystem seeded size is #{SolarSystem.all.size}"
puts "planets seeded size is #{Planet.all.size}"
