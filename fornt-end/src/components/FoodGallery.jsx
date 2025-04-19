
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const countries = [
  { name: "Indian Cuisine", link: "/india", image: "https://media.istockphoto.com/photos/banana-leaf-rice-picture-id682477410?k=20&m=682477410&s=612x612&w=0&h=1oFeF8CvPJygHwdVOBaqSLoiTA9vt0qSt26nxiBp9XQ=" },
  { name: "Italian Cuisine", link: "/italy", image: "https://tse2.mm.bing.net/th?id=OIP.d96JzTpT3XUR6_cIfZqHywHaE8&pid=Api&P=0&h=180" },
  { name: "Mexican Cuisine", link: "/mexico", image: "https://a.cdn-hotels.com/gdcs/production193/d1584/e9aee6b0-7118-4b33-9967-0aff8473cae2.jpg" },
  { name: "Thai Cuisine", link: "/thailand", image: "https://tse4.mm.bing.net/th?id=OIP.aWSympkEOqAF_PZkVZTv3wHaEc&pid=Api&P=0&h=180" },
  { name: "Chinese Cuisine", link: "/china", image: "https://tse3.mm.bing.net/th?id=OIP.Z7Ns-eB2AvlVO_tiYIC2LQHaFW&pid=Api&P=0&h=180" },
  { name: "French Cuisine", link: "/france", image: "https://tse4.mm.bing.net/th?id=OIP.u_aMUl9x8aIH1lZ86_ZS6QHaE7&pid=Api&P=0&h=180" },
  { name: "Japanese Cuisine", link: "/japan", image: "https://tse1.mm.bing.net/th?id=OIP.5SXmLbT4j-oGi1nakw6dggHaEo&pid=Api&P=0&h=180" },
  { name: "Spanish Cuisine", link: "/spain", image: "https://s.inyourpocket.com/gallery/madrid/2019/10/shutterstock-1012480639.jpg" },
  { name: "Turkish Cuisine", link: "/turkey", image: "https://nomadparadise.com/wp-content/uploads/2019/12/turkishfood8-1024x640.jpg" },
  { name: "American Cuisine", link: "/usa", image: "https://aws.wideinfo.org/hangryum.com/wp-content/uploads/2022/05/09044217/american-cuisine-1200x900%401000worldrecipes-1024x768.jpg" },
  { name: "Greek Cuisine", link: "/greece", image: "https://tse2.mm.bing.net/th?id=OIP.l1sFiAOHm35ln0VAjrX5cAHaEE&pid=Api&P=0&h=180" },
  { name: "Moroccan Cuisine", link: "/morocco", image: "https://tse1.mm.bing.net/th?id=OIP.FXo3qjbFPeCmK5g_LtIqSgHaE8&pid=Api&P=0&h=180" },
  { name: "Korean Cuisine", link: "/korea", image: "https://handluggageonly.co.uk/wp-content/uploads/2015/09/Hand-Luggage-Only-5-1.jpg" },
  { name: "Brazilian Cuisine", link: "/brazil", image: "https://nomadparadise.com/wp-content/uploads/2020/08/brazilian-food-06-1024x640.jpg" },
  { name: "Vietnamese Cuisine", link: "/vietnam", image: "https://tse1.mm.bing.net/th?id=OIP.bJztynIjr2HAjgh5AVU9XQHaDX&pid=Api&P=0&h=180" },
  { name: "Your Favourite Cuisine", link: "/favourite", image: "https://tse4.mm.bing.net/th?id=OIP.Tq0RCu4jQmB5NDgfm3XLGAHaFa&pid=Api&P=0&h=180" },
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
                country.name === "Your Favourite Cuisine" ? "ring-4 ring-pink-400 animate-pulse" : ""
              }`}
            >
              {/* Display the cuisine image */}
              <img src={country.image} alt={country.name} className="w-24 h-24 object-cover rounded-full mb-4" />
              <h2 className="text-2xl font-semibold text-red-700">{country.name}</h2>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FoodGallery;
