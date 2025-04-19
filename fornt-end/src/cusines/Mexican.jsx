import React from 'react';

// Define each Mexican dish in an array with names, descriptions, and image URLs
const mexicanDishes = [

  { name: "Tacos de Asada", description: "Grilled beef with onions, cilantro, and lime", image: "https://tse2.mm.bing.net/th?id=OIP.sb5j3DELNFQX0f_YPxY3cQHaFA&pid=Api&P=0&h=180" },
  { name: "Tacos de Carnitas", description: "Slow-cooked pork with a crispy finish", image: "https://tse2.mm.bing.net/th?id=OIP.0KCTlET89Cfb9BOkMIf2jQHaE8&pid=Api&P=0&h=180" },
  { name: "Tacos de Pescado", description: "Fish tacos, typically served with cabbage and crema", image: "https://tse4.mm.bing.net/th?id=OIP.Y6lKWsbZGx5YwB3TFc0EjgHaE7&pid=Api&P=0&h=180" },
  { name: "Tacos de Barbacoa", description: "Slow-cooked beef or lamb, often cooked in an underground pit", image: "https://animalgourmet.com/wp-content/uploads/2023/12/barbacoa-de-res-en-tacos.jpg" },
  { name: "Tacos de Pollo", description: "Chicken tacos, usually with avocado and salsa", image: "https://tse3.mm.bing.net/th?id=OIP.dbSqmdwbsNYA1YBidNWm9gHaE8&pid=Api&P=0&h=180" },
  { name: "Baleadas", description: "Flour tortillas filled with beans, cheese, sour cream, and hot sauce", image: "https://cdn.tasteatlas.com/images/recipes/09fdf49ae2ab4b3683e580b120040db7.jpg?mw=1300" },
  { name: "Tacos Dorados", description: "Fried tacos filled with beef or chicken", image: "https://tse1.mm.bing.net/th?id=OIP.ClalS9KW1whyEItRxVKd7AHaE8&pid=Api&P=0&h=180" },
  { name: "Pozole", description: "Hominy soup with pork or chicken, garnished with radishes, lettuce, and lime", image: "https://tse3.mm.bing.net/th?id=OIP.x-IPbIbS6olVF65sWISSlgHaE6&pid=Api&P=0&h=180" },
  { name: "Menudo", description: "Beef tripe stew, a classic hangover cure", image: "https://tse4.mm.bing.net/th?id=OIP.Is_yTykfNgfyF0DB06K1hgHaE6&pid=Api&P=0&h=180" },
  { name: "Sopa de Tortilla", description: "Tomato-based soup with fried tortilla strips, avocado, and cheese", image: "https://tse4.mm.bing.net/th?id=OIP.8fp1HdPgOaadxT6LXyUUZQHaE8&pid=Api&P=0&h=180" },
  { name: "Caldo de Res", description: "Hearty beef soup with vegetables", image: "https://tse2.mm.bing.net/th?id=OIP.Wkadc39JZwawS0jFau-0GgHaE8&pid=Api&P=0&h=180" },
  { name: "Mole Poblano", description: "Chicken or turkey with a rich, spiced chocolate-based sauce", image: "https://tse3.mm.bing.net/th?id=OIP.RWJpfhOZApVgU7L6_BoBHQHaE7&pid=Api&P=0&h=180" },
  { name: "Mole Verde", description: "Green sauce made from tomatillos, green chilies, and cilantro", image: "https://tse1.mm.bing.net/th?id=OIP.QmvGfkCX_c9Az5ZB3HxCPwHaEK&pid=Api&P=0&h=180" },
  { name: "Mole Rojo", description: "A deep red sauce made with dried chiles, tomatoes, and chocolate", image: "https://woodlandfoods.com/img/WF_Images/c15-mole-rojo-with-chicken-1.jpg" },
  { name: "Salsa Roja", description: "Red salsa made from tomatoes, chiles, and garlic", image: "https://www.tasteofhome.com/wp-content/uploads/2018/01/Salsa-Roja_EXPS_GHTJM17_50795_C07_18__4bC-4.jpg" },
  { name: "Salsa Verde", description: "Tangy green salsa made from tomatillos, cilantro, and lime", image: "https://www.thespruceeats.com/thmb/9HAhNW-cn8gSpVlMZ2PF8Gee1L0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/mexican-salsa-verde-recipe-2342979-hero-01-eccf74c32d1f4c3491f243861abf5d54.jpg" },
  { name: "Chilaquiles", description: "Tortilla chips cooked in a red or green salsa, topped with chicken, cheese, and sour cream", image: "https://tse1.mm.bing.net/th?id=OIP.40TtBVP6woVbPpCMMownaQHaE7&pid=Api&P=0&h=180" },
  { name: "Arroz a la Mexicana", description: "Mexican-style rice cooked with tomato, garlic, and onion", image: "https://tse2.mm.bing.net/th?id=OIP.AduYJH4-k6aKY-a46lHcpgHaDt&pid=Api&P=0&h=180" },
  { name: "Frijoles Charros", description: "Spicy, flavorful beans cooked with bacon, sausage, and chili", image: "https://tse4.mm.bing.net/th?id=OIP.GsIhHTcoxGs9cyIEDoNE2QHaE8&pid=Api&P=0&h=180" },
  { name: "Refried Beans", description: "Mashed and fried pinto beans, often served with tacos or tortillas", image: "https://tse1.mm.bing.net/th?id=OIP.Qf74VRy_WPPdRIs2Zo7FIwHaE9&pid=Api&P=0&h=180" },
  { name: "Elote (Street Corn)", description: "Corn on the cob slathered with mayonnaise, cheese, chili powder, and lime", image: "https://tse2.mm.bing.net/th?id=OIP.HeHQfXKNdyZqW0raaXOIZwAAAA&pid=Api&P=0&h=180" },
  { name: "Quesadillas", description: "Tortillas stuffed with cheese and other fillings, then grilled", image: "https://tse4.mm.bing.net/th?id=OIP.HMPw0hL8ue5PgtXNLBDU3QHaE8&pid=Api&P=0&h=180" },
  { name: "Chiles Rellenos", description: "Roasted peppers stuffed with cheese or meat, often battered and fried", image: "https://tse2.mm.bing.net/th?id=OIP.2pYPmsIEaU6DnsbVmQmETgHaE8&pid=Api&P=0&h=180" },
  { name: "Sopes", description: "Thick tortillas topped with beans, meat, lettuce, cheese, and salsa", image: "https://tse4.mm.bing.net/th?id=OIP.nIyzeNF1iZjzl0qA74i3EgHaE7&pid=Api&P=0&h=180" },
  { name: "Tamales", description: "Steamed masa filled with pork, chicken, or cheese, wrapped in corn husks", image: "https://tse1.mm.bing.net/th?id=OIP.XXioLcDHwiwVtbZ07NiBvQHaE7&pid=Api&P=0&h=180" },
  { name: "Tostadas", description: "Crispy fried tortillas topped with beans, chicken, lettuce, cheese, and salsa", image: "https://www.simplyrecipes.com/thmb/52Ye0fkyGDQQRFa7yAzmeMDfBpw=/1800x1182/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2009__09__mexican-tostada-horiz-b-1800-5724693e64d949c5838c57e4726a3be4.jpg" },
  { name: "Ceviche", description: "Fresh fish or shrimp marinated in citrus juice, with onions, cilantro, and chili", image: "https://tse1.mm.bing.net/th?id=OIP.DX8CXkVq04UnpYeSBXOuxQHaFW&pid=Api&P=0&h=180" },
  { name: "Guacamole", description: "Mashed avocado mixed with tomatoes, onions, cilantro, and lime", image: "https://www.giallozafferano.com/images/255-25549/Guacamole_1200x800.jpg" },
  { name: "Pico de Gallo", description: "A fresh salsa made from tomatoes, onions, cilantro, and lime", image: "https://tse1.mm.bing.net/th?id=OIP.EgyT6HQ5NcOBSJxT4BF2BwHaEk&pid=Api&P=0&h=180" },
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
