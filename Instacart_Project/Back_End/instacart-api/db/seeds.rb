# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create(first_Name: 'Arthur', last_Name: 'Hakobyan', email: 'arthur.hakobyan@gmail.com', password: '123456', password_confirmation: '123456', address: 'Abovyan 22', phone: '099001100')
User.create(first_Name: 'Hakob', last_Name: 'Hakobyan', email: 'hakob.hakobyan@gmail.com', password: '123456', password_confirmation: '123456', address: 'Abovyan 22', phone: '099001100')