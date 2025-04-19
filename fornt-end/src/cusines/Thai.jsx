import React from 'react';

const thaiDishes = [
  { name: "Pad Thai", description: "Stir-fried rice noodles with shrimp or chicken, peanuts, and lime", image: "/images/pad-thai.jpg" },
  { name: "Tom Yum Goong", description: "Hot and sour shrimp soup with lemongrass, kaffir lime, and chili", image: "/images/tom-yum-goong.jpg" },
  { name: "Green Curry (Gaeng Keow Wan)", description: "Coconut milk-based curry with green curry paste, chicken, and bamboo shoots", image: "/images/green-curry.jpg" },
  { name: "Massaman Curry", description: "Mild, nutty curry with beef, potatoes, and peanuts", image: "/images/massaman-curry.jpg" },
  { name: "Red Curry (Gaeng Phet)", description: "Spicy curry with red curry paste, coconut milk, and meat (usually chicken or beef)", image: "/images/red-curry.jpg" },
  { name: "Panang Curry", description: "Thick, creamy curry with coconut milk, peanuts, and a variety of meats", image: "/images/panang-curry.jpg" },
  { name: "Pad Krapow", description: "Stir-fried ground meat (usually pork or chicken) with basil, chili, and garlic, often served with a fried egg", image: "/images/pad-krapow.jpg" },
  { name: "Basil Chicken (Gai Pad Krapow)", description: "Stir-fried chicken with Thai basil, chili, and soy sauce", image: "/images/basil-chicken.jpg" },
  { name: "Tom Kha Gai", description: "Coconut milk-based soup with chicken, galangal, lemongrass, and mushrooms", image: "/images/tom-kha-gai.jpg" },
  { name: "Kuay Tiew", description: "Thai noodle soup with broth, meat (beef, pork, or chicken), and fresh herbs", image: "/images/kuay-tiew.jpg" },
  { name: "Yam Nua (Thai Beef Salad)", description: "Spicy and sour salad with thinly sliced beef, fresh herbs, lime, and fish sauce", image: "/images/yam-nua.jpg" },
  { name: "Pla Pao (Grilled Fish)", description: "Fish, usually tilapia, stuffed with herbs, wrapped in banana leaves, and grilled", image: "/images/pla-pao.jpg" },
  { name: "Goong Ob Woon Sen", description: "Shrimp baked with glass noodles, garlic, and herbs", image: "/images/goong-ob-woon-sen.jpg" },
  { name: "Som Tum (Green Papaya Salad)", description: "Spicy, tangy salad with shredded papaya, tomatoes, peanuts, and chilies", image: "/images/som-tum.jpg" },
  { name: "Pla Rad Prik", description: "Fried fish topped with a spicy chili sauce and sweet-sour tamarind glaze", image: "/images/pla-rad-prik.jpg" },
  { name: "Satay", description: "Grilled skewers of chicken or pork served with peanut sauce", image: "/images/satay.jpg" },
  { name: "Khao Pad (Thai Fried Rice)", description: "Fried rice with vegetables, meat (usually chicken, pork, or shrimp), and fish sauce", image: "/images/khao-pad.jpg" },
  { name: "Roti", description: "Sweet or savory fried dough served with condensed milk or curry", image: "/images/roti.jpg" },
  { name: "Khanom Jeen", description: "Rice noodles served with a variety of spicy and sour curries", image: "/images/khanom-jeen.jpg" },
  { name: "Tod Mun (Thai Fish Cakes)", description: "Deep-fried fish cakes made from fish, curry paste, and green bean", image: "/images/tod-mun.jpg" },
  { name: "Khao Soi", description: "Northern Thai noodle soup with egg noodles, coconut milk, and crispy noodles on top", image: "/images/khao-soi.jpg" },
  { name: "Pad See Ew", description: "Stir-fried flat noodles with soy sauce, broccoli, and a choice of meat", image: "/images/pad-see-ew.jpg" },
  { name: "Khao Man Gai", description: "Thai-style chicken rice, often served with chili sauce and cucumber", image: "/images/khao-man-gai.jpg" },
  { name: "Jok", description: "Thai rice porridge served with pork or chicken, often eaten for breakfast", image: "/images/jok.jpg" },
  { name: "Khao Niew Mamuang (Sticky Rice with Mango)", description: "Sweet sticky rice with ripe mango and coconut milk", image: "/images/khao-niew-mamuang.jpg" },
  { name: "Larb (Larb Moo)", description: "Minced meat salad (usually pork or chicken) with mint, lime, fish sauce, and toasted rice powder", image: "/images/larb.jpg" },
  { name: "Nam Tok", description: "Grilled beef or pork salad with fresh herbs, chili, and lime juice", image: "/images/nam-tok.jpg" },
  { name: "Miang Kham", description: "Leaf-wrapped snacks with lime, peanuts, chili, and palm sugar", image: "/images/miang-kham.jpg" },
  { name: "Nam Prik", description: "Thai chili dip served with raw vegetables and sticky rice", image: "/images/nam-prik.jpg" },
  { name: "Khanom Krok", description: "Coconut milk-based sweet pancakes, crispy on the outside and soft inside", image: "/images/khanom-krok.jpg" }
];

const ThaiDishes = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {thaiDishes.map((dish, index) => (
        <div key={index} className="bg-white shadow-md rounded-2xl overflow-hidden border hover:scale-105 transition-transform">
          <img src={dish.image} alt={dish.name} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-bold">{dish.name}</h2>
            <p className="text-sm text-gray-700">{dish.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ThaiDishes;
