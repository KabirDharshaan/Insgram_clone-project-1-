import React from 'react';

const thaiDishes = [
  { name: "Pad Thai", description: "Stir-fried rice noodles with shrimp or chicken, peanuts, and lime", image: "https://tse3.mm.bing.net/th?id=OIP.bkrM-Aahk-pj8prv-mTNhQHaE8&pid=Api&P=0&h=180" },
  { name: "Tom Yum Goong", description: "Hot and sour shrimp soup with lemongrass, kaffir lime, and chili", image: "https://tse2.mm.bing.net/th?id=OIP.y_DkXXOvZytP0uvPCZVXsgHaE8&pid=Api&P=0&h=180" },
  { name: "Green Curry (Gaeng Keow Wan)", description: "Coconut milk-based curry with green curry paste, chicken, and bamboo shoots", image: "https://tse1.mm.bing.net/th?id=OIP.tGkrk0oZcKX0GI3B3kuHkQHaE8&pid=Api&P=0&h=180" },
  { name: "Massaman Curry", description: "Mild, nutty curry with beef, potatoes, and peanuts", image: "https://tse1.mm.bing.net/th?id=OIP._mUTSeco8FEMDv12locixgHaE8&pid=Api&P=0&h=180" },
  { name: "Red Curry (Gaeng Phet)", description: "Spicy curry with red curry paste, coconut milk, and meat (usually chicken or beef)", image: "https://tse4.mm.bing.net/th?id=OIP.xWopW0EMbtmkO-UX9NiDQQHaEU&pid=Api&P=0&h=180" },
  { name: "Panang Curry", description: "Thick, creamy curry with coconut milk, peanuts, and a variety of meats", image: "https://tse2.mm.bing.net/th?id=OIP.UTjJhvx3aOJlwPUL_FUuwgAAAA&pid=Api&P=0&h=180" },
  { name: "Pad Krapow", description: "Stir-fried ground meat (usually pork or chicken) with basil, chili, and garlic, often served with a fried egg", image: "https://tse2.mm.bing.net/th?id=OIP.JCjuUtYzvhWSv7hdCufMCQHaEK&pid=Api&P=0&h=180" },
  { name: "Basil Chicken (Gai Pad Krapow)", description: "Stir-fried chicken with Thai basil, chili, and soy sauce", image: "https://tse4.mm.bing.net/th?id=OIP.c2oEx0zDbOm97gyIrp1OQQHaE7&pid=Api&P=0&h=180" },
  { name: "Tom Kha Gai", description: "Coconut milk-based soup with chicken, galangal, lemongrass, and mushrooms", image: "https://i.pinimg.com/originals/b4/73/28/b473283401ba2467d4e92ec7ccdf84d6.jpg" },
  { name: "Kuay Tiew", description: "Thai noodle soup with broth, meat (beef, pork, or chicken), and fresh herbs", image: "https://images.deliveryhero.io/image/fd-th/LH/v9jl-hero.jpg" },
  { name: "Yam Nua (Thai Beef Salad)", description: "Spicy and sour salad with thinly sliced beef, fresh herbs, lime, and fish sauce", image: "https://tse1.mm.bing.net/th?id=OIP.ZyOFR3ru5CeCb1Z1G0YZAwHaE8&pid=Api&P=0&h=180" },
  { name: "Pla Pao (Grilled Fish)", description: "Fish, usually tilapia, stuffed with herbs, wrapped in banana leaves, and grilled", image: "https://www.ajinomotofoodbizpartner.com.my/wp-content/uploads/2023/09/Thai-Grill-Fish-Pla-Paothumbnail-03.jpg" },
  { name: "Goong Ob Woon Sen", description: "Shrimp baked with glass noodles, garlic, and herbs", image: "https://i.ytimg.com/vi/LWpzG6sRskQ/maxresdefault.jpg" },
  { name: "Som Tum (Green Papaya Salad)", description: "Spicy, tangy salad with shredded papaya, tomatoes, peanuts, and chilies", image: "https://tse3.mm.bing.net/th?id=OIP.Hr-sKeClT9aCkUNpw9-oFQHaFj&pid=Api&P=0&h=180" },
  { name: "Pla Rad Prik", description: "Fried fish topped with a spicy chili sauce and sweet-sour tamarind glaze", image: "https://tse2.mm.bing.net/th?id=OIP.PTNFM2nnfDdzobShCTrhpgHaE8&pid=Api&P=0&h=180" },
  { name: "Satay", description: "Grilled skewers of chicken or pork served with peanut sauce", image: "https://tse1.mm.bing.net/th?id=OIP.36BisB2SeBxwQF_IPPQgcAHaDt&pid=Api&P=0&h=180" },
  { name: "Khao Pad (Thai Fried Rice)", description: "Fried rice with vegetables, meat (usually chicken, pork, or shrimp), and fish sauce", image: "https://i2.wp.com/www.whenavagabondcooks.com/wp-content/uploads/2021/04/thai-fried-rice-khao-pad_0008.jpg?resize=1024%2C841&ssl=1" },
  { name: "Roti", description: "Sweet or savory fried dough served with condensed milk or curry", image: "https://tse4.mm.bing.net/th?id=OIP.MRiF56iuAxeftytqrLJt-gHaEL&pid=Api&P=0&h=180" },
  { name: "Khanom Jeen", description: "Rice noodles served with a variety of spicy and sour curries", image: "https://tse4.mm.bing.net/th?id=OIP.XOO5kmKlgmwHgsii0n_WxwHaE7&pid=Api&P=0&h=180" },
  { name: "Tod Mun (Thai Fish Cakes)", description: "Deep-fried fish cakes made from fish, curry paste, and green bean", image: "https://tse4.mm.bing.net/th?id=OIP.2YzZLFoAk5ukoIB1oyZZRwHaE8&pid=Api&P=0&h=180" },
  { name: "Khao Soi", description: "Northern Thai noodle soup with egg noodles, coconut milk, and crispy noodles on top", image: "https://asianinspirations.com.au/wp-content/uploads/2023/07/0C9A7280R_LowRes%20(1).jpg" },
  { name: "Pad See Ew", description: "Stir-fried flat noodles with soy sauce, broccoli, and a choice of meat", image: "https://tse3.mm.bing.net/th?id=OIP.mP7kJHf7spTfO1gFcT8r3wHaFj&pid=Api&P=0&h=180" },
  { name: "Khao Man Gai", description: "Thai-style chicken rice, often served with chili sauce and cucumber", image: "http://img.taste.com.au/EcQPfWVg/taste/2016/11/chicken-fried-rice-28524-1.jpeg" },
  { name: "Jok", description: "Thai rice porridge served with pork or chicken, often eaten for breakfast", image: "http://www.templeofthai.com/images/asian-food-life/jok-rice-porridge-960x617.jpg" },
  { name: "Khao Niew Mamuang (Sticky Rice with Mango)", description: "Sweet sticky rice with ripe mango and coconut milk", image: "https://img.freepik.com/premium-photo/khao-niew-mamuang-thai-mango-sticky-rice-with-coconut-cream_641010-25437.jpg" },
  { name: "Larb (Larb Moo)", description: "Minced meat salad (usually pork or chicken) with mint, lime, fish sauce, and toasted rice powder", image: "https://tse4.mm.bing.net/th?id=OIP.GCgZdjT6UUZIW5rHlhALkQHaD5&pid=Api&P=0&h=180" },
  { name: "Nam Tok", description: "Grilled beef or pork salad with fresh herbs, chili, and lime juice", image: "https://tse3.mm.bing.net/th?id=OIP.mTaz734oHvXemRQi0lkmHgHaE8&pid=Api&P=0&h=180" },
  { name: "Miang Kham", description: "Leaf-wrapped snacks with lime, peanuts, chili, and palm sugar", image: "https://tse3.mm.bing.net/th?id=OIP.5BaLzyaHEVL2vucW4qqzKQHaE8&pid=Api&P=0&h=180" },
  { name: "Nam Prik", description: "Thai chili dip served with raw vegetables and sticky rice", image: "https://pepperscale.com/wp-content/uploads/2019/03/What-is-Nam-Prik-Pao-450x325.jpg" },
  { name: "Khanom Krok", description: "Coconut milk-based sweet pancakes, crispy on the outside and soft inside", image: "https://tse3.mm.bing.net/th?id=OIP.T6B-IoadCXxiaOvZIUDbOQHaE6&pid=Api&P=0&h=180" }
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
