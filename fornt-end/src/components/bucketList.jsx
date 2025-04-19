import React from "react";

const activities = [
  {
    title: "Scuba Diving",
    description: "Explore the underwater world and discover vibrant marine life.",
    image: "https://irp-cdn.multiscreensite.com/fec25c4f/dms3rep/multi/scuba-diving-website-background-scubaland-adventures-website.jpg", // Replace with actual image URL
  },
  {
    title: "Bungee Jumping",
    description: "Take the plunge and feel the thrill of freefalling from great heights.",
    image: "https://tse4.mm.bing.net/th?id=OIP.sT-uSCAMW2GrsH6WGI2ofQHaEH&pid=Api&P=0&h=180", // Replace with actual image URL
  },
  {
    title: "Skydiving",
    description: "Jump out of a plane and experience the ultimate adrenaline rush.",
    image: "https://d3rr2gvhjw0wwy.cloudfront.net/uploads/activity_galleries/17/2000x2000-0-70-1ea3f0ba850c37c846cfff18404dcbd2.jpg", // Replace with actual image URL
  },
  {
    title: "Rock Climbing",
    description: "Challenge yourself by scaling a rock wall or natural cliff.",
    image: "https://tse4.mm.bing.net/th?id=OIP.0CER6NxWjZ9pckcc-B47GQHaFL&pid=Api&P=0&h=180", // Replace with actual image URL
  },
  {
    title: "Zip-lining",
    description: "Glide through treetops or across canyons for a thrilling ride.",
    image: "https://loveoahu.org/wp-content/uploads/climbworks-zipline-banner-image.jpg", // Replace with actual image URL
  },
  {
    title: "Horseback Riding on the Beach",
    description: "Ride along the coast and enjoy the waves and wind.",
    image: "https://tse1.mm.bing.net/th?id=OIP.6A9dnp0iFXcsZgE9E-bDQAHaE8&pid=Api&P=0&h=180", // Replace with actual image URL
  },
  {
    title: "Skiing or Snowboarding",
    description: "Hit the slopes for some exhilarating snow sports.",
    image: "https://newtoski.com/wp-content/uploads/2022/05/yellow-pants.jpg", // Replace with actual image URL
  },
  {
    title: "Surfing",
    description: "Catch some waves and feel the rush of riding the ocean.",
    image: "https://tse1.mm.bing.net/th?id=OIP.uApTaanyuAWrJci9Sbz0bwHaC-&pid=Api&P=0&h=180", // Replace with actual image URL
  },
  {
    title: "Paragliding",
    description: "Soar high in the air and enjoy the view from above.",
    image: "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_960,h_590,f_auto/w_59,x_11,y_11,g_south_west,l_klook_water/activities/ud9ea2fi6upgzb78xdn0/KamshetParaglidingExperience.jpg", // Replace with actual image URL
  },
  {
    title: "Whitewater Rafting",
    description: "Navigate through rough waters and experience the excitement of the river.",
    image: "https://i.pinimg.com/originals/a6/a1/82/a6a182cf7ff3f1b8529915eacea3e9d7.jpg", // Replace with actual image URL
  },
  {
    title: "Hot Air Balloon Ride",
    description: "Float above the landscape and take in the breathtaking views.",
    image: "https://tse1.mm.bing.net/th?id=OIP.75gR8TJJPQErrf86gRfcZgHaGN&pid=Api&P=0&h=180", // Replace with actual image URL
  },
  {
    title: "Motorcycle Road Trip",
    description: "Ride through scenic routes and feel the wind on your face.",
    image: "https://tse2.mm.bing.net/th?id=OIP.K4kQsP2CX8a9UFnFpon6ewHaE8&pid=Api&P=0&h=180", // Replace with actual image URL
  },
  {
    title: "Jet Skiing",
    description: "Zoom across the water at high speeds for a fun ride.",
    image: "https://tse1.mm.bing.net/th?id=OIP.zsNIn_mD54vBLEV6P9IcMQHaE7&pid=Api&P=0&h=180", // Replace with actual image URL
  },
  {
    title: "Wakeboarding",
    description: "Ride the waves while being pulled behind a boat.",
    image: "https://tse2.mm.bing.net/th?id=OIP.--3HYWPq4n4QKEUszGFYdgHaEm&pid=Api&P=0&h=180", // Replace with actual image URL
  },
  {
    title: "Paintball",
    description: "Engage in a fun and competitive shooting game with friends.",
    image: "https://manofmany.com/wp-content/uploads/2021/03/8-spots-for-the-best-paintball-in-sydney-1-1200x800.jpeg", // Replace with actual image URL
  },
  {
    title: "Obstacle Course Racing",
    description: "Tackle challenging obstacles and test your strength.",
    image: "https://tse4.mm.bing.net/th?id=OIP.VXN0DxdZXxgekGMTTAERoQHaE8&pid=Api&P=0&h=180", // Replace with actual image URL
  },
  {
    title: "Sandboarding",
    description: "Glide down sand dunes for a unique thrill.",
    image: "https://tse4.mm.bing.net/th?id=OIP.WNuU4lJi02XbH1xIg86oqAHaEm&pid=Api&P=0&h=180", // Replace with actual image URL
  },
  {
    title: "Cage Diving with Sharks",
    description: "Get up close with sharks in their natural habitat (while safely inside a cage).",
    image: "https://www.touristsecrets.com/wp-content/uploads/2023/09/cage-diving-with-great-white-sharks-in-south-africa-1693914984.jpg", // Replace with actual image URL
  },
  {
    title: "Ice Climbing",
    description: "Scale frozen waterfalls or glaciers for a cold but exhilarating challenge.",
    image: "https://57hours.com/wp-content/uploads/2022/09/advanced-ice-climbing-in-kranjska-gora-min.jpg", // Replace with actual image URL
  },
  {
    title: "Mountain Biking",
    description: "Ride through rugged trails and experience the thrill of the outdoors.",
    image: "https://tse1.mm.bing.net/th?id=OIP.XfOkdCZJkGlgyHsUqRJX6AHaE7&pid=Api&P=0&h=180", // Replace with actual image URL
  },
  {
    title: "Go-Kart Racing",
    description: "Feel the adrenaline of high-speed karting around a track.",
    image: "https://tse3.mm.bing.net/th?id=OIP.DtzCf2k-b3RMCjti1b75QwHaE8&pid=Api&P=0&h=180", // Replace with actual image URL
  },
  {
    title: "Snorkeling with Dolphins",
    description: "Swim alongside dolphins and other sea creatures in clear waters.",
    image: "https://tse3.mm.bing.net/th?id=OIP.H0usOvRGo1fO5ZA1-XlksAHaED&pid=Api&P=0&h=180", // Replace with actual image URL
  },
  {
    title: "Driving a Race Car",
    description: "Get behind the wheel of a race car and feel the speed on a track.",
    image: "https://www.automobilemag.com/uploads/sites/11/2018/12/50-Years-of-IMSA-16.jpg", // Replace with actual image URL
  },
  {
    title: "Caving or Spelunking",
    description: "Explore underground caves and discover hidden wonders.",
    image: "https://tse4.mm.bing.net/th?id=OIP.Caf6ytvm5mmuBdNHHVj2eQHaE7&pid=Api&P=0&h=180", // Replace with actual image URL
  },
  {
    title: "Fly in a Fighter Jet",
    description: "Experience the thrill of flying in a high-speed fighter jet.",
    image: "https://tse4.mm.bing.net/th?id=OIP.ujQmIT3UJZQgTVVP1xtIugHaEK&pid=Api&P=0&h=180", // Replace with actual image URL
  },
  {
    title: "Hang Gliding",
    description: "Soar through the air like a bird and take in the stunning views below.",
    image: "http://3.bp.blogspot.com/-Hit5v_NxQe8/VDiYgHpFHWI/AAAAAAAAAJc/kJ00UVHer70/s1600/hang_gliding_flight_fly_extreme_sport_glider__7__1600x1200.jpg", // Replace with actual image URL
  },
  {
    title: "Horseback Riding in the Mountains",
    description: "Ride through scenic mountain trails and enjoy nature.",
    image: "https://i.pinimg.com/originals/6b/46/0c/6b460c796bc07a5060bcc88db6a0c81a.jpg", // Replace with actual image URL
  },
  {
    title: "Canoeing or Kayaking",
    description: "Paddle through rivers, lakes, or even the open sea.",
    image: "https://www.australiangeographic.com.au/wp-content/uploads/2021/02/MJW2314web.jpg", // Replace with actual image URL
  },
  {
    title: "Snowmobiling",
    description: "Ride a snowmobile through snowy landscapes for a thrilling winter adventure.",
    image: "https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_797,q_75,w_2000/v1/clients/newyorkstate/a1ca13d5_8fdc_40e9_a6ac_ff024c644d6a_440d31a4-2e4c-432c-864b-6acf69cea9b4.jpg", // Replace with actual image URL
  },
  {
    title: "Take a Cooking Class",
    description: "Learn how to make gourmet dishes from professional chefs.",
    image: "https://tse1.mm.bing.net/th?id=OIP.lh5gGIHWD4q1RRpvEUXOZQHaFj&pid=Api&P=0&h=180", // Replace with actual image URL
  },
  {
    title: "Go to a Music Festival",
    description: "Dance and enjoy live music in an electrifying atmosphere.",
    image: "https://media.timeout.com/images/101887547/image.jpg", // Replace with actual image URL
  },
  {
    title: "Nighttime Zip-lining",
    description: "Zip through the forest or over water at night, illuminated by lights.",
    image: "https://www.sonomacanopytours.com/wp-content/uploads/2018/06/Night-6-1030x687.jpg", // Replace with actual image URL
  },
  {
    title: "Attend a Live Theater Performance",
    description: "Enjoy an unforgettable performance on stage.",
    image: "https://tse4.mm.bing.net/th?id=OIP.vNbJW5LsMYHzihPcjPV_3AHaDt&pid=Api&P=0&h=180", // Replace with actual image URL
  },
  {
    title: "Visit an Amusement Park",
    description: "Ride the roller coasters and enjoy the fun attractions.",
    image: "https://i.pinimg.com/originals/eb/80/7f/eb807fc5bb1f159647949f7a9e1f1313.jpg", // Replace with actual image URL
  },
  {
    title: "Hot Springs Bathing",
    description: "Relax in natural hot springs surrounded by beautiful scenery.",
    image: "https://www.economist.com/cdn-cgi/image/width=1424,quality=80,format=auto/content-assets/images/20230603_ASP006.jpg", // Replace with actual image URL
  },
  {
    title: "Go on a Safari",
    description: "Witness wildlife in its natural habitat and experience a thrilling adventure.",
    image: "https://tse4.mm.bing.net/th?id=OIP.DPq_ehuKa4M6DAtqW5dcjwHaE8&pid=Api&P=0&h=180", // Replace with actual image URL
  },
  {
    title: "Cliff Diving",
    description: "Jump into crystal-clear waters from cliffs for an exhilarating experience.",
    image: "https://www.agoda.com/wp-content/uploads/2022/07/Boracay-Cliff-Diving-Marc-Go-philippines.jpg", // Replace with actual image URL
  },
  {
    title: "Swimming with Sea Turtles",
    description: "Glide through the water and swim alongside sea turtles.",
    image: "https://ladymusgraveexperience.com.au/wp-content/uploads/2020/04/great-barrier-reef-turtle-tours.jpg", // Replace with actual image URL
  },
  {
    title: "Go to a Haunted House",
    description: "Experience the thrill and fright of a haunted house during Halloween.",
    image: "https://tse2.mm.bing.net/th?id=OIP.Z3NohRTXnHNbw7pLW-4W4wHaFj&pid=Api&P=0&h=180", // Replace with actual image URL
  },
  {
    title: "Try Axe Throwing",
    description: "Test your aim and precision by throwing axes at a target.",
    image: "https://tse2.mm.bing.net/th?id=OIP.fFLi8ZTyCSvz8w4W-Lh9mQHaHV&pid=Api&P=0&h=180", // Replace with actual image URL
  },
  {
    title: "Go to a Haunted Hotel",
    description: "Stay in a spooky, allegedly haunted location for an eerie experience.",
    image: "https://img.huffingtonpost.com/asset/5da9f146210000c21334a63c.jpeg?ops=1778_1000", // Replace with actual image URL
  },
  {
    title: "Swim with Sharks (without the Cage)",
    description: "If you're brave, experience an even more intense shark encounter.",
    image: "https://www.scuba.com/blog/wp-content/uploads/2023/07/scuba-diving-sharks-bahamas-shutterstock_1837047451-1024x576.jpg", // Replace with actual image URL
  },
  {
    title: "Take Part in a Marathon",
    description: "Push your limits while being part of a high-energy crowd.",
    image: "https://bdc2020.o0bc.com/wp-content/uploads/2017/04/boston-marathon-start-line-850x478.jpg", // Replace with actual image URL
  },
  {
    title: "Attend a Professional Sports Game",
    description: "Feel the excitement of live sports and cheer for your favorite team.",
    image: "https://tse1.mm.bing.net/th?id=OIP.-47ICSQfy3PO6sTHmNKofQHaE8&pid=Api&P=0&h=180", // Replace with actual image URL
  },
  {
    title: "Take Part in a Scavenger Hunt",
    description: "Enjoy the thrill of searching for clues and racing against time.",
    image: "https://tse3.mm.bing.net/th?id=OIP.81N0MKL18IyR_aXewWeengHaHa&pid=Api&P=0&h=180", // Replace with actual image URL
  },
  {
    title: "Go Sledding or Tobogganing",
    description: "Enjoy the winter fun of racing down snowy hills.",
    image: "https://visitrainier.com/wp-content/uploads/2014/06/Caven-110213-5617.jpg", // Replace with actual image URL
  },
  {
    title: "Try a Flying Trapeze",
    description: "Swing through the air on a trapeze for a fun and thrilling experience.",
    image: "https://tse4.mm.bing.net/th?id=OIP.4g_0OjAD7oA7GyOyd6pOOgHaE6&pid=Api&P=0&h=180", // Replace with actual image URL
  },
  {
    title: "Go Dog Sledding",
    description: "Ride through snowy landscapes pulled by a team of energetic sled dogs.",
    image: "https://adventures.com/media/17557/s-al-winter-dog-sledding-lapland-sweden-forest.jpg", // Replace with actual image URL
  },
  {
    title: "Explore an Abandoned Place",
    description: "Discover the eerie beauty of abandoned buildings or towns.",
    image: "https://www.noupe.com/wp-content/uploads/2020/12/florian-olivo-gQ5I9EaFeEA-unsplash-1024x683.jpg", // Replace with actual image URL
  },
  {
    title: "Ride a Ferris Wheel",
    description: "Enjoy a peaceful, scenic view from the top of a giant Ferris wheel.",
    image: "https://www.thebeijinger.com/sites/default/files/thebeijinger/blog-images/265699/rsz_ocean_city_ferris_wheel.jpg", // Replace with actual image URL
  }
];

const BucketList = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-12">Bucket List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {activities.map((activity, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={activity.image}
              alt={activity.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                {activity.title}
              </h2>
              <p className="text-gray-600">{activity.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BucketList;
