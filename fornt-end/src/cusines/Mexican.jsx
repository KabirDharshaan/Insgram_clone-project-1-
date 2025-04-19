import React from 'react';

// Define each Mexican dish in an array with names, descriptions, and image URLs
const mexicanDishes = [
  { name: "Tacos al Pastor", description: "Marinated pork with pineapple served in soft corn tortillas", image: "/images/tacos-al-pastor.jpg" },
  { name: "Tacos de Asada", description: "Grilled beef with onions, cilantro, and lime", image: "/images/tacos-de-asada.jpg" },
  { name: "Tacos de Carnitas", description: "Slow-cooked pork with a crispy finish", image: "/images/tacos-de-carnitas.jpg" },
  { name: "Tacos de Pescado", description: "Fish tacos, typically served with cabbage and crema", image: "/images/tacos-de-pescado.jpg" },
  { name: "Tacos de Barbacoa", description: "Slow-cooked beef or lamb, often cooked in an underground pit", image: "/images/tacos-de-barbacoa.jpg" },
  { name: "Tacos de Pollo", description: "Chicken tacos, usually with avocado and salsa", image: "/images/tacos-de-pollo.jpg" },
  { name: "Baleadas", description: "Flour tortillas filled with beans, cheese, sour cream, and hot sauce", image: "/images/baleadas.jpg" },
  { name: "Tacos Dorados", description: "Fried tacos filled with beef or chicken", image: "/images/tacos-dorados.jpg" },
  { name: "Pozole", description: "Hominy soup with pork or chicken, garnished with radishes, lettuce, and lime", image: "/images/pozole.jpg" },
  { name: "Menudo", description: "Beef tripe stew, a classic hangover cure", image: "/images/menudo.jpg" },
  { name: "Sopa de Tortilla", description: "Tomato-based soup with fried tortilla strips, avocado, and cheese", image: "/images/sopa-de-tortilla.jpg" },
  { name: "Caldo de Res", description: "Hearty beef soup with vegetables", image: "/images/caldo-de-res.jpg" },
  { name: "Mole Poblano", description: "Chicken or turkey with a rich, spiced chocolate-based sauce", image: "/images/mole-poblano.jpg" },
  { name: "Mole Verde", description: "Green sauce made from tomatillos, green chilies, and cilantro", image: "/images/mole-verde.jpg" },
  { name: "Mole Rojo", description: "A deep red sauce made with dried chiles, tomatoes, and chocolate", image: "/images/mole-rojo.jpg" },
  { name: "Salsa Roja", description: "Red salsa made from tomatoes, chiles, and garlic", image: "/images/salsa-roja.jpg" },
  { name: "Salsa Verde", description: "Tangy green salsa made from tomatillos, cilantro, and lime", image: "/images/salsa-verde.jpg" },
  { name: "Chilaquiles", description: "Tortilla chips cooked in a red or green salsa, topped with chicken, cheese, and sour cream", image: "/images/chilaquiles.jpg" },
  { name: "Arroz a la Mexicana", description: "Mexican-style rice cooked with tomato, garlic, and onion", image: "/images/arroz-a-la-mexicana.jpg" },
  { name: "Frijoles Charros", description: "Spicy, flavorful beans cooked with bacon, sausage, and chili", image: "/images/frijoles-charros.jpg" },
  { name: "Refried Beans", description: "Mashed and fried pinto beans, often served with tacos or tortillas", image: "/images/refried-beans.jpg" },
  { name: "Elote (Street Corn)", description: "Corn on the cob slathered with mayonnaise, cheese, chili powder, and lime", image: "/images/elote.jpg" },
  { name: "Quesadillas", description: "Tortillas stuffed with cheese and other fillings, then grilled", image: "/images/quesadillas.jpg" },
  { name: "Chiles Rellenos", description: "Roasted peppers stuffed with cheese or meat, often battered and fried", image: "/images/chiles-rellenos.jpg" },
  { name: "Sopes", description: "Thick tortillas topped with beans, meat, lettuce, cheese, and salsa", image: "/images/sopes.jpg" },
  { name: "Tamales", description: "Steamed masa filled with pork, chicken, or cheese, wrapped in corn husks", image: "/images/tamales.jpg" },
  { name: "Tostadas", description: "Crispy fried tortillas topped with beans, chicken, lettuce, cheese, and salsa", image: "/images/tostadas.jpg" },
  { name: "Ceviche", description: "Fresh fish or shrimp marinated in citrus juice, with onions, cilantro, and chili", image: "/images/ceviche.jpg" },
  { name: "Guacamole", description: "Mashed avocado mixed with tomatoes, onions, cilantro, and lime", image: "/images/guacamole.jpg" },
  { name: "Pico de Gallo", description: "A fresh salsa made from tomatoes, onions, cilantro, and lime", image: "/images/pico-de-gallo.jpg" },
];

const MexicanDishes = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {mexicanDishes.map((dish, index) => (
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

export default MexicanDishes;
