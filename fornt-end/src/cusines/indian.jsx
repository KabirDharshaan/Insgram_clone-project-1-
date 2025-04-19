import React from 'react';

const dishes = [
  {
    name: 'Butter Chicken (Murgh Makhani)',
    region: 'Delhi/Punjab',
    image: 'https://tse1.mm.bing.net/th?id=OIP.rAjsPqAddx2RZnslg4d8FwHaE7&pid=Api&P=0&h=180', // replace with real image URL
    description: 'Creamy tomato-based chicken curry known for its rich flavor.'
  },
  {
    name: 'Rogan Josh',
    region: 'Kashmir',
    image: 'https://img.taste.com.au/TFQ_zAsZ/taste/2017/06/lamb-rogan-josh-127388-1.jpg',
    description: 'Aromatic lamb curry infused with Kashmiri spices.'
  },
  {
    name: 'Chole Bhature',
    region: 'Delhi',
    image: 'https://tse1.mm.bing.net/th?id=OIP.Y484f7AzHY0b45zV4uPMawHaEK&pid=Api&P=0&h=180',
    description: 'Spicy chickpeas served with deep-fried bread.'
  },
  {
    name: 'Rajma Chawal',
    region: 'Punjab',
    image: 'https://www.cubesnjuliennes.com/wp-content/uploads/2020/06/Authentic-Punjabi-Rajma-Recipe.jpg',
    description: 'Kidney beans in a spicy gravy served with rice.'
  },
  {
    name: 'Aloo Paratha',
    region: 'Punjab',
    image: 'https://www.archanaskitchen.com/images/archanaskitchen/Indian_Breads/Easy_Aloo_Paratha_Recipe_North_Indian_Punjabi_Style-1.jpg',
    description: 'Stuffed flatbread filled with spicy mashed potatoes.'
  },
  {
    name: 'Tandoori Chicken',
    region: 'Punjab',
    image: 'https://tse2.mm.bing.net/th?id=OIP.21xfGQ9jUczQhBfBTgASHwHaEJ&pid=Api&P=0&h=180',
    description: 'Chicken marinated in yogurt and spices, cooked in a tandoor.'
  },
  {
    name: 'Kadhi Pakora',
    region: 'Haryana/Rajasthan',
    image: 'https://tse2.mm.bing.net/th?id=OIP.3LThFyKdUYECFSemNFMr_wHaHa&pid=Api&P=0&h=180',
    description: 'Gram flour curry with deep-fried dumplings.'
  },
  {
    name: 'Baingan Bharta',
    region: 'UP/Punjab',
    image: 'https://www.cookwithmanali.com/wp-content/uploads/2014/08/Baingan-Bharta-Recipe.jpg',
    description: 'Roasted eggplant mashed and cooked with spices.'
  },
  {
    name: 'Pav Bhaji',
    region: 'Mumbai',
    image: 'https://www.ruchikrandhap.com/wp-content/uploads/2018/04/Pav-Bhaji-2-1.jpg',
    description: 'Spicy mashed vegetables served with buttered bread rolls.'
  },
  {
    name: 'Masala Dosa',
    region: 'Karnataka',
    image: 'https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Divya_Shivaraman_/Onion_Tomato_Podi_Masala_Dosa.jpg',
    description: 'Crispy fermented rice pancake filled with potato masala.'
  },
  {
    name: 'Hyderabadi Biryani',
    region: 'Telangana',
    image: 'https://i.ytimg.com/vi/BCKMeHuRX0I/maxresdefault.jpg',
    description: 'Fragrant rice and meat dish layered with spices.'
  },
  {
    name: 'Fish Curry & Rice',
    region: 'Kerala',
    image: 'https://static.toiimg.com/photo/74474551.cms',
    description: 'Spicy fish curry with coconut served with rice.'
  },
  {
    name: 'Meen Pollichathu',
    region: 'Kerala',
    image: 'https://i.pinimg.com/originals/5d/8c/f2/5d8cf29eae7a3df7349dc55b5eeb4a4f.jpg',
    description: 'Fish wrapped in banana leaf and cooked with spices.'
  },
  {
    name: 'Pesarattu',
    region: 'Andhra Pradesh',
    image: 'https://img-global.cpcdn.com/recipes/e46db89bea028e6d/680x482cq70/pesarattu-or-green-moong-dosa-recipe-main-photo.jpg',
    description: 'Green gram crepe served with chutney.'
  },
  {
    name: 'Chettinad Chicken Curry',
    region: 'Tamil Nadu',
    image: 'https://tse1.mm.bing.net/th?id=OIP.-Dht8SqO26CLqwUMHLquEgHaEK&pid=Api&P=0&h=180',
    description: 'Spicy chicken curry with roasted spices.'
  },
  {
    name: 'Sambhar & Rice',
    region: 'Tamil Nadu',
    image: 'https://thumbs.dreamstime.com/z/sambar-rice-south-indian-cuisine-21902158.jpg',
    description: 'Lentil stew served with rice, seasoned with mustard and curry leaves.'
  },
  {
    name: 'Idli-Vada-Sambhar',
    region: 'Tamil Nadu',
    image: 'https://as2.ftcdn.net/v2/jpg/04/65/28/87/1000_F_465288715_F3uc0aZMhzSbNbftEzHSb6RfUVQfCHeU.jpg',
    description: 'Steamed rice cakes and fried lentil donuts with sambhar.'
  },
  {
    name: 'Bisi Bele Bath',
    region: 'Karnataka',
    image: 'https://tse3.mm.bing.net/th?id=OIP.Oc16JxpdwlJlu6TRGmjG4wHaEK&pid=Api&P=0&h=180',
    description: 'Spiced lentil and rice dish with vegetables.'
  },
  {
    name: 'Macher Jhol (Fish Curry)',
    region: 'West Bengal',
    image: 'https://jayeetacha.com/wp-content/uploads/2020/06/img_5538.jpg',
    description: 'Light fish curry with potatoes and mustard seeds.'
  },
  {
    name: 'Litti Chokha',
    region: 'Bihar',
    image: 'https://i.pinimg.com/originals/c7/30/e1/c730e1d29ef4a5cef9b07486edd31b60.jpg',
    description: 'Wheat balls stuffed with gram flour, served with mashed veggies.'
  },
  {
    name: 'Momos',
    region: 'Sikkim/North-East',
    image: 'https://tse2.mm.bing.net/th?id=OIP.IZOhccHipIq3CRNknZAQygHaE7&pid=Api&P=0&h=180',
    description: 'Steamed or fried dumplings filled with veggies or meat.'
  },
  {
    name: 'Chingri Malai Curry',
    region: 'Bengal',
    image: 'https://i0.wp.com/easyrecipe.in/wp-content/uploads/2019/05/chingri-malai-curry.jpg?fit=1280%2C720&ssl=1',
    description: 'Prawns in creamy coconut milk curry.'
  },
  {
    name: 'Thukpa',
    region: 'Arunachal/Sikkim',
    image: 'https://tse2.mm.bing.net/th?id=OIP.fgoeUGW5oS1Tz9ZJQpB8UAHaE-&pid=Api&P=0&h=180',
    description: 'Hot noodle soup with veggies or meat.'
  },
  
  {
    name: 'Dhokla',
    region: 'Gujarat',
    image: 'https://tse1.mm.bing.net/th?id=OIP.USPL36uTU1O_qIuANMz_EQHaHa&pid=Api&P=0&h=180',
    description: 'Steamed savory cake made from fermented batter.'
  },
  {
    name: 'Dal Baati Churma',
    region: 'Rajasthan',
    image: 'https://tse4.mm.bing.net/th?id=OIP.kveQynAGXpPmDw4iNEahRgHaFj&pid=Api&P=0&h=180',
    description: 'Lentils served with baked dough balls and sweet churma.'
  },
  {
    name: 'Laal Maas',
    region: 'Rajasthan',
    image: 'https://tse1.mm.bing.net/th?id=OIP.I5-rD3LpkFdRz3pbBIPx2QHaE8&pid=Api&P=0&h=180',
    description: 'Fiery red meat curry made with Mathania chillies.'
  },
  {
    name: 'Goan Prawn Curry',
    region: 'Goa',
    image: 'https://theflavoursofkitchen.com/wp-content/uploads/2015/12/Goan-Prawn-Curry-3.jpg',
    description: 'Prawns cooked in a coconut-based tangy curry.'
  },
  {
    name: 'Undhiyu',
    region: 'Gujarat',
    image: 'https://www.nehascookbook.com/wp-content/uploads/2022/09/Surti-undhiyu-WS-1.jpg',
    description: 'Mixed vegetable dish cooked in earthen pots.'
  },
  {
    name: 'Misal Pav',
    region: 'Maharashtra',
    image: 'https://www.desidakaar.com/wp-content/uploads/2017/03/misal-pav.jpg',
    description: 'Spicy sprouted lentil curry with bread.'
  }
];

const Indian = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {dishes.map((dish, index) => (
        <div key={index} className="bg-white shadow-md rounded-2xl overflow-hidden border hover:scale-105 transition-transform">
          <img src={dish.image} alt={dish.name} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-bold">{dish.name}</h2>
            <h4 className="text-gray-600 mb-2">{dish.region}</h4>
            <p className="text-sm text-gray-700">{dish.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Indian;



