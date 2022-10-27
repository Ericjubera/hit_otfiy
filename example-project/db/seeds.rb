# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
u1 = User.create(name:"uska",password:"12345",age:21)
u2 = User.create(name:"chris",password:"1234567",age:22)
u3 = User.create(name:"jesus",password:"12345789",age:19)
u4 = User.create(name:"kiwi",password:"123457890",age:30)

     p1= Pipe.create(item_name:"uska",color:"blue",size:"medium",image:"https://i.pinimg.com/originals/9f/f8/6f/9ff86f4166119cee3040e6bc0dbc0c0e.jpg")
     p2= Pipe.create(item_name:"DOUBLE PICKLE RICKKKK",color:"green",size:"small",image: "https://cdn.shopify.com/s/files/1/2105/7969/products/image_3002bc7a-2edf-4a66-85b7-347bc0b9deac_1024x1024@2x.jpg?v=1589215001")
      p3=Pipe.create(item_name:"Puff co pro",color:"blue",size:"large",image: "https://helios-i.mashable.com/imagery/articles/00fipX1IlpydijBuOgUMZE5/hero-image.fill.size_1200x1200.v1623391109.png")
      p4=Pipe.create(item_name:"Thanos",color:"purp",size:"large", image:"https://p.globalsources.com/IMAGES/PDT/S1189258182/Mask-Bong.jpg")

      Hit.create(user_id: u1.id, pipe_id: p1.id, time:Time.now)
      Hit.create(user_id: u1.id, pipe_id: p2.id, time:Time.now)
      Hit.create(user_id: u3.id, pipe_id: p3.id, time:Time.now)
      Hit.create(user_id: u4.id, pipe_id: p4.id, time:Time.now)
      puts("done seeding")

    
      
     