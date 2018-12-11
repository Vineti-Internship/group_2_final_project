# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create(first_Name: 'Arthur', last_Name: 'Hakobyan', email: 'arthur.hakobyan@gmail.com', password: '123456', password_confirmation: '123456', address: 'Abovyan 22', phone: '099001100')
User.create(first_Name: 'Hakob', last_Name: 'Hakobyan', email: 'hakob.hakobyan@gmail.com', password: '123456', password_confirmation: '123456', address: 'Abovyan 22', phone: '099001100')
Store.create(name: 'Giant',logo: 'https://pbs.twimg.com/profile_images/1009155488024547336/STKKfGPE_400x400.jpg',description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ')
Store.create(name: 'Pos',logo:  'https://tumo.org/wp-content/uploads/2018/03/1-10.png',description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ')
Store.create(name: 'Chirikner',logo: 'https://tumo.org/wp-content/uploads/2018/03/1-11.png',description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ')
Store.create(name: 'Smart food',logo: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/2d6a8946241309.584d3d01f38b5.png',description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ')