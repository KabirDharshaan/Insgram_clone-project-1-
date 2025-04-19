
import React from 'react';

// Define each Italian dish in an array with image URLs
const dishes = [
      { name: "Spaghetti Carbonara", description: "Creamy egg-based sauce with pancetta", image: "/images/spaghetti-carbonara.jpg" },
      { name: "Lasagna alla Bolognese", description: "Layered pasta with meat, béchamel & cheese", image: "/images/lasagna-bolognese.jpg" },
      { name: "Penne all’Arrabbiata", description: "Spicy tomato garlic sauce", image: "/images/penne-arrabbiata.jpg" },
      { name: "Tagliatelle al Ragù (Bolognese)", description: "Fresh ribbon pasta with meat sauce", image: "/images/tagliatelle-ragu.jpg" },
      { name: "Cacio e Pepe", description: "Simple and cheesy (Pecorino + black pepper)", image: "/images/cacio-e-pepe.jpg" },
      { name: "Fettuccine Alfredo", description: "Buttery cream sauce (more famous outside Italy)", image: "/images/fettuccine-alfredo.jpg" },
      { name: "Orecchiette con Cime di Rapa", description: "With broccoli rabe (Southern Italy)", image: "/images/orecchiette-cime-di-rapa.jpg" },
      { name: "Tortellini in Brodo", description: "Pasta rings in broth", image: "/images/tortellini-in-brodo.jpg" },
      { name: "Pasta Puttanesca", description: "Olives, capers, anchovies in tomato sauce", image: "/images/pasta-puttanesca.jpg" },
      { name: "Gnocchi alla Sorrentina", description: "Potato dumplings with tomato & mozzarella", image: "/images/gnocchi-sorrentina.jpg" },
      { name: "Pizza Margherita", description: "Tomato, mozzarella, basil", image: "/images/pizza-margherita.jpg" },
      { name: "Pizza Quattro Stagioni", description: "4 flavors for 4 seasons", image: "/images/pizza-quattro-stagioni.jpg" },
      { name: "Pizza Capricciosa", description: "Artichokes, ham, mushrooms, olives", image: "/images/pizza-capricciosa.jpg" },
      { name: "Pizza Marinara", description: "Oldest style, with tomato, garlic & oregano", image: "/images/pizza-marinara.jpg" },
      { name: "Pizza Napoletana (Neapolitan)", description: "Soft, chewy base with fresh ingredients", image: "/images/pizza-neapolitana.jpg" },
      { name: "Melanzane alla Parmigiana (Eggplant Parmesan)", description: "Baked eggplant with tomato sauce & cheese", image: "/images/eggplant-parmesan.jpg" },
      { name: "Risotto alla Milanese", description: "Creamy rice with saffron", image: "/images/risotto-milanese.jpg" },
      { name: "Arancini", description: "Fried rice balls stuffed with cheese or meat", image: "/images/arancini.jpg" },
      { name: "Polenta", description: "Creamy or grilled cornmeal dish", image: "/images/polenta.jpg" },
      { name: "Cannelloni", description: "Pasta tubes stuffed with meat or spinach and cheese", image: "/images/cannelloni.jpg" },
      { name: "Osso Buco", description: "Braised veal shanks with gremolata", image: "/images/osso-buco.jpg" },
      { name: "Saltimbocca", description: "Veal with sage and prosciutto", image: "/images/saltimbocca.jpg" },
      { name: "Bistecca alla Fiorentina", description: "Thick-cut Tuscan T-bone steak", image: "/images/bistecca-fiorentina.jpg" },
      { name: "Braciole", description: "Stuffed meat rolls in tomato sauce", image: "/images/braciole.jpg" },
      { name: "Tiramisu", description: "Espresso-soaked ladyfingers with mascarpone", image: "/images/tiramisu.jpg" },
      { name: "Panna Cotta", description: "Creamy dessert with berries or caramel", image: "/images/panna-cotta.jpg" },
      { name: "Cannoli", description: "Crispy pastry tubes filled with sweet ricotta", image: "/images/cannoli.jpg" },
      { name: "Zabaglione", description: "Whipped custard with wine", image: "/images/zabaglione.jpg" },
      { name: "Sfogliatella", description: "Flaky pastry filled with ricotta and citrus", image: "/images/sfogliatella.jpg" },
      { name: "Gelato", description: "Italian-style ice cream (smoother & richer than regular ice cream)", image: "/images/gelato.jpg" },
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
