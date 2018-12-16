# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or create!d alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create!([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create!(name: 'Luke', movie: movies.first)
User.create(first_Name: 'Arthur', last_Name: 'Hakobyan', email: 'arthur.hakobyan@gmail.com', password: '123456', password_confirmation: '123456', address: 'Abovyan 22', phone: '+37499001100')
User.create(first_Name: 'Hakob', last_Name: 'Hakobyan', email: 'hakob.hakobyan@gmail.com', password: '123456', password_confirmation: '123456', address: 'Abovyan 22', phone: '+37499001100')
Store.create(name: 'Giant',logo: 'https://cbsbaltimore.files.wordpress.com/2016/05/screen-shot-2016-05-10-at-11-25-48-am.png?w=616',description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ')
Store.create(name: 'Pos',logo:  'https://tumo.org/wp-content/uploads/2018/03/1-10.png',description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ')
Store.create(name: 'Chirikner',logo: 'https://tumo.org/wp-content/uploads/2018/03/1-11.png',description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ')
Store.create(name: 'Smart food',logo: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/2d6a8946241309.584d3d01f38b5.png',description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ')
Product.create(Name: 'Macaroni Al Dente', price: 990, store_id: 1, imageUrl: 'https://img3.zakaz.ua/20150818.1439921016.ad72436478c_2015-08-18_Yana/20150818.1439921016.SNCPSG10.obj.0.1.jpg.oe.jpg.pf.jpg.1350nowm.jpg.1350x.jpg', description: 'Macaroni from Poland (400gr)')
Product.create(Name: 'Entenmanns Donuts', price: 1099, store_id: 1, imageUrl: 'https://www.entenmanns.com/sites/default/files/styles/large/public/x00072030011080CR.png,qitok=qarshio4.pagespeed.ic.I7BLJSW2_9.png', description: 'Entenmanns Donuts (100gr)')
Product.create(Name: 'Sadia Nuggets', price: 890, store_id: 1, imageUrl: 'https://www.deliveryextra.com.br/img/uploads/1/436/544436.jpg?type=product', description: 'Sadia Chicken Nuggets (300gr)')
Product.create(Name: 'Pasta Spaghetti Divella Private', price: 590, store_id: 2, imageUrl: 'http://highstreet.co.kr/web/product/big/shop2/web/upload/pdtimg3/divella_vermicelli_500g.jpg', description: 'Spaghetti from Italy (500gr)')
Product.create(Name: 'Milk', price: 790, store_id: 2, imageUrl: 'https://image.netxpress.biz/pi/b4/dcac7878fdc5cac0dd1e4ff5b4d4acbc514a56-2592778/full.jpg', description: 'Daily Farmers Milk (1 litre)')
Product.create(Name: 'White Rice', price: 690, store_id: 2, imageUrl: 'https://dati.probios.it/prodotti/CERBB0005.png', description: 'Probios basmati white grain rice (500gr)')
Product.create(Name: 'Dried Peach', price: 4000, store_id: 3, imageUrl: 'https://www.sas.am/images/cache/4e2/ae0/9beeab2273185991d70150f29e1ccab7.JPG', description: 'Voske Tsiran Dried Peach (500gr)')
Product.create(Name: 'Black Dried Plum', price: 2500, store_id: 3, imageUrl: 'https://www.sas.am/images/cache/87c/6ea/801996f427d17ad91a3cbd0c67989c43.JPG', description: 'Voske Tsiran Black Dried Plum (Prune) (500gr)')
Product.create(Name: 'Dried Apricot', price: 2800, store_id: 3, imageUrl: 'https://www.sas.am/images/cache/75f/839/4cb6fea0295f3943f7a057ab038c5a7b.JPG', description: 'Voske Tsiran Dried Apricot (500gr)')
Product.create(Name: 'Cheddar Popcorn', price: 799, store_id: 4, imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/81s8kB0bduL._SY550_.jpg', description: 'Smart Ready to Eat Popcorn with Cheddar (300gr)')
Product.create(Name: 'Jalopeno and Cheddar Popcorn', price: 799, store_id: 4, imageUrl: 'https://i5.walmartimages.ca/images/Large/956/910/6000197956910.jpg', description: 'Smart Ready to Eat Popcorn with Jalopeno and Cheddar (300gr)')
Product.create(Name: 'Milk Chocolate And Caramel Drizzle Popcorn', price: 899, store_id: 4, imageUrl: 'https://i5.walmartimages.ca/images/Large/554/063/6000196554063.jpg', description: 'Smart Ready to Eat Popcorn with  Milk Chocolate And Caramel Drizzle (300gr)')
Courier.create(type_name: 'Free', price: 0, image: 'https://pp.userapi.com/c846122/v846122737/14eb66/HXckfjE0PIA.jpg')
Courier.create(type_name: 'Regular', price: 20, image: 'https://pp.userapi.com/c846122/v846122737/14eb5c/-kKOdLD4IJ0.jpg')
Courier.create(type_name: 'Premium', price: 50, image: 'https://pp.userapi.com/c846122/v846122737/14eb52/vb0y8q4dkcU.jpg')
