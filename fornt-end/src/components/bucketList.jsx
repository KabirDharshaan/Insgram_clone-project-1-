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
    image: "https://example.com/surfing.jpg", // Replace with actual image URL
  },
  {
    title: "Paragliding",
    description: "Soar high in the air and enjoy the view from above.",
    image: "https://example.com/paragliding.jpg", // Replace with actual image URL
  },
  {
    title: "Whitewater Rafting",
    description: "Navigate through rough waters and experience the excitement of the river.",
    image: "https://example.com/whitewater-rafting.jpg", // Replace with actual image URL
  },
  {
    title: "Hot Air Balloon Ride",
    description: "Float above the landscape and take in the breathtaking views.",
    image: "https://example.com/hot-air-balloon.jpg", // Replace with actual image URL
  },
  {
    title: "Motorcycle Road Trip",
    description: "Ride through scenic routes and feel the wind on your face.",
    image: "https://example.com/motorcycle-trip.jpg", // Replace with actual image URL
  },
  {
    title: "Jet Skiing",
    description: "Zoom across the water at high speeds for a fun ride.",
    image: "https://example.com/jet-skiing.jpg", // Replace with actual image URL
  },
  {
    title: "Wakeboarding",
    description: "Ride the waves while being pulled behind a boat.",
    image: "https://example.com/wakeboarding.jpg", // Replace with actual image URL
  },
  {
    title: "Paintball",
    description: "Engage in a fun and competitive shooting game with friends.",
    image: "https://example.com/paintball.jpg", // Replace with actual image URL
  },
  {
    title: "Obstacle Course Racing",
    description: "Tackle challenging obstacles and test your strength.",
    image: "https://example.com/obstacle-course.jpg", // Replace with actual image URL
  },
  {
    title: "Sandboarding",
    description: "Glide down sand dunes for a unique thrill.",
    image: "https://example.com/sandboarding.jpg", // Replace with actual image URL
  },
  {
    title: "Cage Diving with Sharks",
    description: "Get up close with sharks in their natural habitat (while safely inside a cage).",
    image: "https://example.com/cage-diving.jpg", // Replace with actual image URL
  },
  {
    title: "Ice Climbing",
    description: "Scale frozen waterfalls or glaciers for a cold but exhilarating challenge.",
    image: "https://example.com/ice-climbing.jpg", // Replace with actual image URL
  },
  {
    title: "Mountain Biking",
    description: "Ride through rugged trails and experience the thrill of the outdoors.",
    image: "https://example.com/mountain-biking.jpg", // Replace with actual image URL
  },
  {
    title: "Go-Kart Racing",
    description: "Feel the adrenaline of high-speed karting around a track.",
    image: "https://example.com/go-kart-racing.jpg", // Replace with actual image URL
  },
  {
    title: "Snorkeling with Dolphins",
    description: "Swim alongside dolphins and other sea creatures in clear waters.",
    image: "https://example.com/snorkeling-dolphins.jpg", // Replace with actual image URL
  },
  {
    title: "Driving a Race Car",
    description: "Get behind the wheel of a race car and feel the speed on a track.",
    image: "https://example.com/race-car-driving.jpg", // Replace with actual image URL
  },
  {
    title: "Caving or Spelunking",
    description: "Explore underground caves and discover hidden wonders.",
    image: "https://example.com/caving.jpg", // Replace with actual image URL
  },
  {
    title: "Fly in a Fighter Jet",
    description: "Experience the thrill of flying in a high-speed fighter jet.",
    image: "https://example.com/fighter-jet.jpg", // Replace with actual image URL
  },
  {
    title: "Hang Gliding",
    description: "Soar through the air like a bird and take in the stunning views below.",
    image: "https://example.com/hang-gliding.jpg", // Replace with actual image URL
  },
  {
    title: "Horseback Riding in the Mountains",
    description: "Ride through scenic mountain trails and enjoy nature.",
    image: "https://example.com/horseback-mountain.jpg", // Replace with actual image URL
  },
  {
    title: "Canoeing or Kayaking",
    description: "Paddle through rivers, lakes, or even the open sea.",
    image: "https://example.com/canoeing.jpg", // Replace with actual image URL
  },
  {
    title: "Snowmobiling",
    description: "Ride a snowmobile through snowy landscapes for a thrilling winter adventure.",
    image: "https://example.com/snowmobiling.jpg", // Replace with actual image URL
  },
  {
    title: "Take a Cooking Class",
    description: "Learn how to make gourmet dishes from professional chefs.",
    image: "https://example.com/cooking-class.jpg", // Replace with actual image URL
  },
  {
    title: "Go to a Music Festival",
    description: "Dance and enjoy live music in an electrifying atmosphere.",
    image: "https://example.com/music-festival.jpg", // Replace with actual image URL
  },
  {
    title: "Nighttime Zip-lining",
    description: "Zip through the forest or over water at night, illuminated by lights.",
    image: "https://example.com/night-zip-lining.jpg", // Replace with actual image URL
  },
  {
    title: "Attend a Live Theater Performance",
    description: "Enjoy an unforgettable performance on stage.",
    image: "https://example.com/theater-performance.jpg", // Replace with actual image URL
  },
  {
    title: "Visit an Amusement Park",
    description: "Ride the roller coasters and enjoy the fun attractions.",
    image: "https://example.com/amusement-park.jpg", // Replace with actual image URL
  },
  {
    title: "Hot Springs Bathing",
    description: "Relax in natural hot springs surrounded by beautiful scenery.",
    image: "https://example.com/hot-springs.jpg", // Replace with actual image URL
  },
  {
    title: "Go on a Safari",
    description: "Witness wildlife in its natural habitat and experience a thrilling adventure.",
    image: "https://example.com/safari.jpg", // Replace with actual image URL
  },
  {
    title: "Cliff Diving",
    description: "Jump into crystal-clear waters from cliffs for an exhilarating experience.",
    image: "https://example.com/cliff-diving.jpg", // Replace with actual image URL
  },
  {
    title: "Swimming with Sea Turtles",
    description: "Glide through the water and swim alongside sea turtles.",
    image: "https://example.com/swim-sea-turtles.jpg", // Replace with actual image URL
  },
  {
    title: "Go to a Haunted House",
    description: "Experience the thrill and fright of a haunted house during Halloween.",
    image: "https://example.com/haunted-house.jpg", // Replace with actual image URL
  },
  {
    title: "Try Axe Throwing",
    description: "Test your aim and precision by throwing axes at a target.",
    image: "https://example.com/axe-throwing.jpg", // Replace with actual image URL
  },
  {
    title: "Go to a Haunted Hotel",
    description: "Stay in a spooky, allegedly haunted location for an eerie experience.",
    image: "https://example.com/haunted-hotel.jpg", // Replace with actual image URL
  },
  {
    title: "Swim with Sharks (without the Cage)",
    description: "If you're brave, experience an even more intense shark encounter.",
    image: "https://example.com/swim-with-sharks.jpg", // Replace with actual image URL
  },
  {
    title: "Take Part in a Marathon",
    description: "Push your limits while being part of a high-energy crowd.",
    image: "https://example.com/marathon.jpg", // Replace with actual image URL
  },
  {
    title: "Attend a Professional Sports Game",
    description: "Feel the excitement of live sports and cheer for your favorite team.",
    image: "https://example.com/pro-sports-game.jpg", // Replace with actual image URL
  },
  {
    title: "Take Part in a Scavenger Hunt",
    description: "Enjoy the thrill of searching for clues and racing against time.",
    image: "https://example.com/scavenger-hunt.jpg", // Replace with actual image URL
  },
  {
    title: "Go Sledding or Tobogganing",
    description: "Enjoy the winter fun of racing down snowy hills.",
    image: "https://example.com/sledding.jpg", // Replace with actual image URL
  },
  {
    title: "Try a Flying Trapeze",
    description: "Swing through the air on a trapeze for a fun and thrilling experience.",
    image: "https://example.com/flying-trapeze.jpg", // Replace with actual image URL
  },
  {
    title: "Go Dog Sledding",
    description: "Ride through snowy landscapes pulled by a team of energetic sled dogs.",
    image: "https://example.com/dog-sledding.jpg", // Replace with actual image URL
  },
  {
    title: "Explore an Abandoned Place",
    description: "Discover the eerie beauty of abandoned buildings or towns.",
    image: "https://example.com/abandoned-place.jpg", // Replace with actual image URL
  },
  {
    title: "Ride a Ferris Wheel",
    description: "Enjoy a peaceful, scenic view from the top of a giant Ferris wheel.",
    image: "https://example.com/ferris-wheel.jpg", // Replace with actual image URL
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
