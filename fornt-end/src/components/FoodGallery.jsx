







import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const countries = [
  { name: "India", flag: "🇮🇳", dish: "Biryani", link: "/india" },
  { name: "Italy", flag: "🇮🇹", dish: "Pizza", link: "/italy" },
  { name: "Mexico", flag: "🇲🇽", dish: "Tacos", link: "/mexico" },
  { name: "Thailand", flag: "🇹🇭", dish: "Pad Thai", link: "/thailand" },
  { name: "China", flag: "🇨🇳", dish: "Dim Sum", link: "/china" },
  { name: "France", flag: "🇫🇷", dish: "Croissant", link: "/france" },
  { name: "Japan", flag: "🇯🇵", dish: "Sushi", link: "/japan" },
  { name: "Spain", flag: "🇪🇸", dish: "Paella", link: "/spain" },
  { name: "Turkey", flag: "🇹🇷", dish: "Kebabs", link: "/turkey" },
  { name: "USA", flag: "🇺🇸", dish: "Burgers", link: "/usa" },
  { name: "Greece", flag: "🇬🇷", dish: "Gyros", link: "/greece" },
  { name: "Morocco", flag: "🇲🇦", dish: "Couscous", link: "/morocco" },
  { name: "Korea", flag: "🇰🇷", dish: "Kimchi", link: "/korea" },
  { name: "Brazil", flag: "🇧🇷", dish: "Feijoada", link: "/brazil" },
  { name: "Vietnam", flag: "🇻🇳", dish: "Pho", link: "/vietnam" },
  { name: "Your Favourite Food", flag: "💖", dish: "Surprise Dish!", link: "/favourite" },
];

const FoodGallery = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-pink-100 to-red-100 py-12 px-4">
      <motion.h1
        className="text-center text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-600 mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        🍽️ Global Food Gallery
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {countries.map((country, idx) => (
          <Link to={country.link} key={idx}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              className={`rounded-3xl p-6 bg-white shadow-xl backdrop-blur-md bg-opacity-70 flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                country.name === "Your Favourite Food" ? "ring-4 ring-pink-400 animate-pulse" : ""
              }`}
            >
              <div className="text-5xl mb-4">{country.flag}</div>
              <h2 className="text-2xl font-semibold text-red-700">{country.name}</h2>
              <p className="text-sm mt-2 text-gray-600 italic">{country.dish}</p>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FoodGallery;
