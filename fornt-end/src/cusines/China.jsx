import React from 'react';

const chineseDishes = [
  { name: "Fried Rice (Chǎofàn)", description: "Stir-fried rice with vegetables, eggs, and meat (chicken, beef, or shrimp)", image: "https://www.everydayeasyeats.com/wp-content/uploads/2016/06/Chinese-Fried-Rice-1.jpg" },
  { name: "Chicken Chow Mein", description: "Stir-fried noodles with chicken, vegetables, and soy sauce", image: "https://christieathome.com/wp-content/uploads/2022/04/Chicken-Chow-Mein-11.jpg" },
  { name: "Beef Chow Fun", description: "Stir-fried flat rice noodles with beef, soy sauce, and bean sprouts", image: "https://tse2.mm.bing.net/th?id=OIP.Kbev8BAVnA6845eZO9NmYgHaE8&pid=Api&P=0&h=180" },
  { name: "Dan Dan Noodles", description: "Spicy noodles with ground chicken or beef, sesame paste, and chili oil", image: "https://khinskitchen.com/wp-content/uploads/2022/12/dan-dan-noodles-06-1024x1024.jpg" },
  { name: "Yangzhou Fried Rice", description: "Fried rice with shrimp, chicken, peas, and egg", image: "https://www.2foodtrippers.com/wp-content/uploads/2021/04/Yangzhou-Fried-Rice-Social-IMG.jpg" },
  { name: "Hot and Sour Soup", description: "A flavorful broth made with tofu, mushrooms, bamboo shoots, and vinegar", image: "https://tse4.mm.bing.net/th?id=OIP.9y74h76iE8WC-NwqU0TzcAHaF4&pid=Api&P=0&h=180" },
  { name: "Wonton Soup", description: "Dumplings filled with ground chicken or shrimp served in a clear broth", image: "https://tse2.mm.bing.net/th?id=OIP.7DKa0PHWKOCYjcnS44fD2wAAAA&pid=Api&P=0&h=180" },
  { name: "Egg Drop Soup", description: "Silky soup with beaten eggs, tofu, and sometimes crab or shrimp", image: "https://tse2.mm.bing.net/th?id=OIP.zZV5dvsZGigzLVq3u7mzhQHaE8&pid=Api&P=0&h=180" },
  { name: "Sour Fish Soup (Suan Tang Yu)", description: "A tangy fish soup with pickled vegetables", image: "https://tse1.mm.bing.net/th?id=OIP.jzASF7ZQxnL-iATlChbCGwHaFj&pid=Api&P=0&h=180" },
  { name: "Chicken Corn Soup", description: "A comforting soup with chicken, sweet corn, and eggs", image: "https://www.thecookingcollective.com.au/wp-content/uploads/2022/08/chicken-and-corn-soup-3.jpg" },
  { name: "Peking Duck", description: "Crispy duck served with pancakes, hoisin sauce, and cucumber", image: "https://tse4.mm.bing.net/th?id=OIP.OWYLfzs7AWc6pbreO1qf8wHaEJ&pid=Api&P=0&h=180" },
  { name: "Kung Pao Chicken", description: "Stir-fried chicken with peanuts, chili peppers, and soy sauce", image: "https://tse2.mm.bing.net/th?id=OIP.FxFeOJPRJNr-cd8aio0mNAHaE8&pid=Api&P=0&h=180" },
  { name: "General Tso’s Chicken", description: "Fried chicken in a sweet, tangy sauce with chili peppers", image: "https://christieathome.com/wp-content/uploads/2022/02/General-Tso-Chicken-8.jpg" },
  { name: "Mongolian Beef", description: "Stir-fried beef with onions, soy sauce, and garlic", image: "https://www.allrecipes.com/thmb/3kUKhYfUuJ8glgfSeElH4fKiv5s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/9112752-5f83b552d7794ee296a8f0c6017ede8a.jpg" },
  { name: "Lemon Chicken", description: "Crispy fried chicken served in a sweet, tangy lemon sauce", image: "https://bunnyswarmoven.net/wp-content/uploads/2020/06/Lemon-Herb-Grilled-Chicken-6-2.jpg" },
  { name: "Dim Sum", description: "Assorted bite-sized dishes such as dumplings, buns, and rolls (without pork)", image: "https://tse2.mm.bing.net/th?id=OIP.ds6CGmAY-B7yZNDy7hE9fAHaE9&pid=Api&P=0&h=180" },
  { name: "Jiaozi (Chinese Dumplings)", description: "Dumplings filled with chicken, beef, or vegetables, either steamed or pan-fried", image: "https://preview.redd.it/v6y78ga5dnc31.jpg?auto=webp&s=3c92efbf2f06a236bc31d5b66b7890805e527451" },
  { name: "Xiao Long Bao", description: "Soup dumplings filled with broth and minced chicken or beef", image: "https://www.hungryhuy.com/wp-content/uploads/steaming-xiao-long-bao.jpg" },
  { name: "Vegetable Baozi (Steamed Buns)", description: "Soft buns stuffed with vegetables like mushrooms, cabbage, or tofu", image: "https://tse3.mm.bing.net/th?id=OIP.cKnTDGCnkR-o7nWJfJBWEAHaEl&pid=Api&P=0&h=180" },
  { name: "Siu Mai", description: "Open-topped dumplings filled with chicken, shrimp, or vegetables", image: "https://tse2.mm.bing.net/th?id=OIP.8OoKWtojOQWBlpM35THXwQHaE8&pid=Api&P=0&h=180" },
  { name: "Sweet and Sour Chicken", description: "Crispy chicken chunks in a sweet and tangy sauce", image: "https://www.modernhoney.com/wp-content/uploads/2023/01/Sweet-and-Sour-Chicken-3-crop-1200x1250.jpg" },
  { name: "Ma Po Tofu", description: "Spicy tofu with ground chicken or beef, chili oil, and fermented bean paste", image: "https://i.ytimg.com/vi/wj24Tb8Lmtc/maxresdefault.jpg" },
  { name: "Chop Suey", description: "Stir-fried vegetables with chicken, beef, tofu, or shrimp, served with rice or noodles", image: "https://tse1.mm.bing.net/th?id=OIP.XprbzCsgCAfhwC7oSt6lkgHaFC&pid=Api&P=0&h=180" },
  { name: "Beef and Broccoli", description: "Stir-fried beef with broccoli in a savory soy-based sauce", image: "https://tse2.mm.bing.net/th?id=OIP.U6PxIsIZoCfk2AIvMOHdngHaE7&pid=Api&P=0&h=180" },
  { name: "Kung Pao Shrimp", description: "Shrimp stir-fried with peanuts, chili peppers, and soy sauce", image: "https://food.fnr.sndimg.com/content/dam/images/food/video/5/56/562/5626/5626165.jpg.rend.hgtvcom.826.620.suffix/1568858385959.jpeg" },
  { name: "Salt and Pepper Shrimp", description: "Shrimp stir-fried with salt, pepper, garlic, and sometimes chili", image: "https://1.bp.blogspot.com/-phOqKI7xCvI/TY5FMZRnccI/AAAAAAAAAnI/mHT5d-8B9Uk/s1600/IMG_2811.JPG" },
  { name: "Steamed Fish with Ginger and Soy Sauce", description: "Whole fish steamed with ginger, soy sauce, and scallions", image: "https://www.marionskitchen.com/wp-content/uploads/2019/02/Steamed-Soy-Ginger-Fish%E0%B9%85-1-1024x1024.jpg" },
  { name: "Crispy Shrimp with Sesame", description: "Shrimp battered and deep-fried, served with a sweet and savory sesame sauce", image: "https://blogchef.net/wp-content/uploads/2011/03/sesame_shrimp_1.jpg" },
  { name: "Chili Crab", description: "Crab stir-fried in a spicy, savory sauce made with chili and garlic", image: "http://assets.epicurious.com/photos/5908b4aa4321d935776c6abe/master/pass/singaporean-chili-crab-042317.jpg" },
  { name: "Lobster Cantonese Style", description: "Lobster stir-fried with garlic, ginger, and scallions", image: "https://i.redd.it/l95ecn1vdj831.jpg" }
];

const ChineseDishes = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {chineseDishes.map((dish, index) => (
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

export default ChineseDishes;
