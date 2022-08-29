# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Mountain.destroy_all

Mountain.create :name => 'Kosciuszko', :native_name => 'Kunama Namadgi', :country => 'Australia', :elevation => 2228, :parent_range => 'Main Range, Great Dividing Range'
Mountain.create :name => 'Machu Picchu', :country => 'Peru', :elevation => 2430, :parent_range => 'Andes'
Mountain.create :name => 'Huayna Potosi', :country => 'Bolivia', :elevation => 6088, :parent_range => 'Andes'
Mountain.create :name => 'Mount Blanc', :country => 'France, Italy', :elevation => 4808, :parent_range => 'Graian Alps'