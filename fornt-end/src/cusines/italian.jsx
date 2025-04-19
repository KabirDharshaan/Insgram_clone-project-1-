
import React from 'react';

// Define each Italian dish in an array with image URLs
const dishes = [
      { name: "Spaghetti Carbonara", description: "Creamy egg-based sauce with pancetta", image: "https://thestayathomechef.com/wp-content/uploads/2020/03/Pasta-Carbonara-2-3-scaled.jpg" },
      { name: "Lasagna alla Bolognese", description: "Layered pasta with meat, béchamel & cheese", image: "https://1.bp.blogspot.com/-RdIvxhmBLXI/Vf2A4AG4fBI/AAAAAAAAOsI/Y4JDCAMm21M/s1600/DSC_6746_web.jpg" },
      { name: "Penne all’Arrabbiata", description: "Spicy tomato garlic sauce", image: "https://tse3.mm.bing.net/th?id=OIP.e1tg9ZkD9fcX1NnNWDhtmQHaFj&pid=Api&P=0&h=180" },
      { name: "Tagliatelle al Ragù (Bolognese)", description: "Fresh ribbon pasta with meat sauce", image: "https://cdn.tasteatlas.com/images/dishes/8889349736294b0a929b69eb29d67dad.jpg" },
      { name: "Cacio e Pepe", description: "Simple and cheesy (Pecorino + black pepper)", image: "https://tse2.mm.bing.net/th?id=OIP.OGdOQ2QHps25yPGUJ2jz2gHaE8&pid=Api&P=0&h=180" },
      { name: "Fettuccine Alfredo", description: "Buttery cream sauce (more famous outside Italy)", image: "https://recipes.net/wp-content/uploads/2023/05/old-spaghetti-factory-fettuccine-alfredo-recipe_41338b937b520e945d7eb14b9f4c1384.jpeg" },
      { name: "Orecchiette con Cime di Rapa", description: "With broccoli rabe (Southern Italy)", image: "https://tse4.mm.bing.net/th?id=OIP.JXHvasQ4AdYQFtRwTPtwHQHaE6&pid=Api&P=0&h=180" },
      { name: "Tortellini in Brodo", description: "Pasta rings in broth", image: "https://static.agrodolce.it/app/uploads/2016/12/tortellini-1.jpg" },
      { name: "Pasta Puttanesca", description: "Olives, capers, anchovies in tomato sauce", image: "https://hips.hearstapps.com/hmg-prod/images/190130-pasta-puttanesca-horizontal-1549421254.png" },
      { name: "Gnocchi alla Sorrentina", description: "Potato dumplings with tomato & mozzarella", image: "https://tse3.mm.bing.net/th?id=OIP.HoGSy0T_u2ct_MVl-J4ePgHaE8&pid=Api&P=0&h=180" },
      { name: "Pizza Margherita", description: "Tomato, mozzarella, basil", image: "https://tse2.mm.bing.net/th?id=OIP.t0J2QjLquQNzsap6GtAEPAHaFp&pid=Api&P=0&h=180" },
      { name: "Pizza Quattro Stagioni", description: "4 flavors for 4 seasons", image: "https://wfgp.s3.amazonaws.com/media/dishes/pizza_quattro_stagioni_1214.jpg" },
      { name: "Pizza Capricciosa", description: "Artichokes, ham, mushrooms, olives", image: "https://cdn.tasteatlas.com/images/dishes/6b28b438a3b64a7e9fca9081c89f07ff.jpg?mw=1300" },
      { name: "Pizza Marinara", description: "Oldest style, with tomato, garlic & oregano", image: "https://tse3.mm.bing.net/th?id=OIP.Et76a08DAMWWWkO-VxTqcwHaE8&pid=Api&P=0&h=180" },
      { name: "Pizza Napoletana (Neapolitan)", description: "Soft, chewy base with fresh ingredients", image: "https://tse4.mm.bing.net/th?id=OIP.Vg9JP5qjbRIwj0wtxayN_wHaE8&pid=Api&P=0&h=180" },
      { name: "Melanzane alla Parmigiana (Eggplant Parmesan)", description: "Baked eggplant with tomato sauce & cheese", image: "https://theeatdown.com/wp-content/uploads/keto-eggplant-parmesant-alla-parmigiana-melanzane-recipe-5.jpg" },
      { name: "Risotto alla Milanese", description: "Creamy rice with saffron", image: "https://tse2.mm.bing.net/th?id=OIP.-EU2QcqyoPPDQYMJm8W2LgHaE5&pid=Api&P=0&h=180" },
      { name: "Arancini", description: "Fried rice balls stuffed with cheese or meat", image: "https://gloriosos.com/wp-content/uploads/2019/06/arancini-2.jpg" },
      { name: "Polenta", description: "Creamy or grilled cornmeal dish", image: "https://www.seriouseats.com/thmb/ojnVwwGNvVzg06Nlos5VYbMyFUU=/1500x1125/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2015__05__20150501-polenta-vicky-wasik-5-018e7507df9940f9b1d9cd0b5f67339b.jpg" },
      { name: "Cannelloni", description: "Pasta tubes stuffed with meat or spinach and cheese", image: "https://tse4.mm.bing.net/th?id=OIP.B3xWs9bUm5We212pg1cubgHaE8&pid=Api&P=0&h=180" },
      { name: "Osso Buco", description: "Braised veal shanks with gremolata", image: "https://www.simplyrecipes.com/thmb/DBvXQXAr-z9Wj7GMA3-179r6gsw=/2000x1334/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2006__12__Osso-Buco-LEAD-5-a816159cbe9740a5b21f3c1e515f9da2.jpg" },
      { name: "Saltimbocca", description: "Veal with sage and prosciutto", image: "https://tse4.mm.bing.net/th?id=OIP.R-Mpn_q1vS-VhL2o1SMf6QHaEU&pid=Api&P=0&h=180" },
      { name: "Bistecca alla Fiorentina", description: "Thick-cut Tuscan T-bone steak", image: "https://tse1.mm.bing.net/th?id=OIP.TKRID0Nch6vDRbOOvfDzAwHaE7&pid=Api&P=0&h=180" },
      { name: "Braciole", description: "Stuffed meat rolls in tomato sauce", image: "https://tse2.mm.bing.net/th?id=OIP.T0C8pEYzyxUn4cxY2M-tHAHaE7&pid=Api&P=0&h=180" },
      { name: "Tiramisu", description: "Espresso-soaked ladyfingers with mascarpone", image: "https://www.galbani.fr/wp-content/uploads/2018/10/mon-tiramisu.jpg" },
      { name: "Panna Cotta", description: "Creamy dessert with berries or caramel", image: "https://www.buonapappa.net/wp-content/uploads/2015/08/vanilla-bean-panna-cotta-square.jpg" },
      { name: "Cannoli", description: "Crispy pastry tubes filled with sweet ricotta", image: "https://tse4.mm.bing.net/th?id=OIP.ZM3GahV-GXau-gDbEMh3igHaEv&pid=Api&P=0&h=180" },
      { name: "Zabaglione", description: "Whipped custard with wine", image: "https://www.simplyrecipes.com/thmb/DUktLTTQjGujwSITXxk6BlOqn2U=/3441x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Zabaglione-LEAD-17-f1eefa39eac24367a1e049dc06ad4a83.jpg" },
      { name: "Sfogliatella", description: "Flaky pastry filled with ricotta and citrus", image: "https://dolciveloci.it/wp-content/uploads/2022/01/SH_sfogliatella.jpg" },
      { name: "Gelato", description: "Italian-style ice cream (smoother & richer than regular ice cream)", image: "https://www.theitalianacademy.com/wp-content/uploads/2016/02/GelatoParadiso_HomePage.jpg" },
    ];
    

const Italian = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {dishes.map((dish, index) => (
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

export default Italian;
