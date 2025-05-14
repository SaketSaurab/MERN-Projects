const Menu = [
  {
    id: 1,
    image: "https://madhurasrecipe.com/wp-content/uploads/2020/10/Masala-Maggie.jpg",
    name: "Maggie",
    category: "lunch",
    price: 25,
    description:
      "A steaming bowl of spicy instant noodles tossed with fresh veggies. Perfect for a quick lunch that’s comforting and filling.",
  },
  {
    id: 2,
    image: "https://www.marthastewart.com/thmb/Vgb9cQSlegZz5fcoSbkkqyHPmHY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/338185-basic-pancakes-09-00b18f8418fd4e52bb2050173d083d04.jpg",
    name: "Pancakes",
    category: "breakfast",
    price: 40,
    description:
      "Soft, fluffy pancakes stacked high and drizzled with golden maple syrup. Served with butter for that perfect bite.",
  },
  {
    id: 3,
    image: "https://www.cookwithkushi.com/wp-content/uploads/2016/07/best_white_sauce_pasta_bechamel_sauce-500x500.jpg",
    name: "White Sauce Pasta",
    category: "dinner",
    price: 120,
    description:
      "Creamy Alfredo pasta cooked with mushrooms, herbs, and parmesan. A smooth Italian classic for cozy evenings.",
  },
  {
    id: 4,
    image: "https://www.schwartz.co.uk/-/media/project/oneweb/schwartz/recipes/recipe_image_update/march_18_2025/greek_salad_800x800.webp?rev=af320a79b57b4c36aefcac5edd04c228&vd=20250325T174436Z&extension=webp&hash=2C60D2D80B3C50B265008836A0858C5E",
    name: "Greek Salad",
    category: "lunch",
    price: 70,
    description:
      "A refreshing blend of cucumbers, tomatoes, olives, and feta cheese. Dressed lightly with olive oil and oregano.",
  },
  {
    id: 5,
    image: "https://img.freepik.com/free-photo/top-view-hot-espresso-with-brown-coffee-seeds-brown-wooden-desk-coffee-cup-drink_140725-28168.jpg?semt=ais_hybrid&w=740&q=80",
    name: "Cappuccino",
    category: "drinks",
    price: 50,
    description:
      "A bold espresso topped with velvety steamed milk foam. The perfect balance of rich flavor and smooth texture.",
  },
  {
    id: 6,
    image: "https://media.istockphoto.com/id/1278998606/photo/fresh-homemade-pizza-margherita.jpg?s=612x612&w=0&k=20&c=sumJtj6CvBIsSOR0CKIDAOnth_DceTuNfz5utuN2Jxs=",
    name: "Margherita Pizza",
    category: "dinner",
    price: 150,
    description:
      "Classic wood-fired pizza with mozzarella, basil, and tomato sauce. Simple, aromatic, and authentically Italian.",
  },
  {
    id: 7,
    image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2024/05/vegetarian-club-sandwich-recipe.jpg",
    name: "Veg Club Sandwich",
    category: "snacks",
    price: 60,
    description:
      "Triple-layer sandwich packed with grilled veggies, lettuce, tomato, and mayo. A hearty vegetarian snack for any time of day.",
  },
  {
    id: 8,
    image: "https://vaya.in/recipes/wp-content/uploads/2018/02/Idli-and-Sambar-1.jpg",
    name: "Idli Sambhar",
    category: "breakfast",
    price: 35,
    description:
      "Soft, fluffy idlis served with warm sambhar and coconut chutney. A traditional South Indian favorite to start your morning right.",
  },
  {
    id: 9,
    image: "https://www.cookwithmanali.com/wp-content/uploads/2020/05/Masala-Dosa-500x500.jpg",
    name: "Masala Dosa",
    category: "breakfast",
    price: 45,
    description:
      "Crispy golden dosa stuffed with spiced potato filling. Served with sambhar and coconut chutney for a flavorful breakfast.",
  },
  {
    id: 10,
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Chole_Bhature_from_Nagpur.JPG",
    name: "Chole Bhature",
    category: "lunch",
    price: 90,
    description:
      "Fluffy fried bhature served with spicy and tangy chickpea curry. A North Indian street food classic loved by all ages.",
  },
  {
    id: 11,
    image: "https://foodtrails25.com/wp-content/uploads/2022/02/chutney-paneer-pakora-featured.jpg",
    name: "Paneer Pakora",
    category: "snacks",
    price: 50,
    description:
      "Crispy fritters stuffed with soft paneer and coated in spiced gram flour batter. Best enjoyed with mint chutney and tea.",
  },
  {
    id: 12,
    image: "https://images.themodernproper.com/production/posts/2022/Homemade-French-Fries_8.jpg?w=1200&h=1200&q=60&fm=jpg&fit=crop&dm=1662474181&s=15046582e76b761a200998df2dcad0fd",
    name: "French Fries",
    category: "snacks",
    price: 40,
    description:
      "Crispy golden fries sprinkled with salt and served hot. The ultimate comfort snack that goes with everything.",
  },
  {
    id: 13,
    image: "https://dukaan.b-cdn.net/700x700/webp/4338846/1f4ed201-cae3-41e6-90b8-319709966f5f/de726fb9-4660-4b12-8971-a28ecf9ceb69-2d715cb4-e510-4400-9e3b-02a4b69711d8.JPG",
    name: "Veg Momos",
    category: "snacks",
    price: 60,
    description:
      "Soft steamed dumplings filled with mixed vegetables and spices. Served with spicy chili sauce for an extra kick.",
  },
  {
    id: 14,
    image: "https://getinspiredeveryday.com/wp-content/uploads/2023/03/Mango-Smoothie-Get-Inspired-Everyday-8.jpg",
    name: "Mango Smoothie",
    category: "drinks",
    price: 65,
    description:
      "Thick and creamy mango smoothie blended with milk and ice. A tropical refreshment that’s both healthy and delicious.",
  },
  {
    id: 15,
    image: "https://cdn1.foodviva.com/static-content/food-images/punjabi-recipes/sweet-lassi/sweet-lassi.jpg",
    name: "Sweet Lassi",
    category: "drinks",
    price: 40,
    description:
      "A traditional Punjabi yogurt drink blended with sugar and cardamom. Cool, refreshing, and perfect for any meal.",
  },
  {
    id: 16,
    image: "https://i0.wp.com/cookingwithbry.com/wp-content/uploads/chocolate-brownies-recipe.png?fit=1080%2C1080&ssl=1",
    name: "Chocolate Brownie",
    category: "dessert",
    price: 70,
    description:
      "Moist chocolate brownie with a gooey center and crispy edges. Served warm with a scoop of vanilla ice cream.",
  },
  {
    id: 17,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE0lEhTo29DzmOliZ_2RRI-LAI_mx3dUIEqg&s",
    name: "Vanilla Ice Cream",
    category: "dessert",
    price: 50,
    description:
      "Classic creamy vanilla ice cream made with real milk and sugar. Smooth, rich, and perfectly sweet for any occasion.",
  },
  {
    id: 18,
    image: "https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Instant-Pot-Mumbai-Pav-Bhaji-Recipe.jpg",
    name: "Pav Bhaji",
    category: "dinner",
    price: 85,
    description:
      "A spicy mashed vegetable curry served with buttery pav buns. Mumbai’s most loved street food, bursting with flavor.",
  },
  {
    id: 19,
    image: "https://madhurasrecipe.com/wp-content/uploads/2023/03/Veg-Biryani-1.jpg",
    name: "Veg Biryani",
    category: "dinner",
    price: 110,
    description:
      "Aromatic basmati rice cooked with mixed vegetables and Indian spices. Served with raita for a wholesome, flavorful meal.",
  },
  {
    id: 20,
    image: "https://spicecravings.com/wp-content/uploads/2020/10/Paneer-Tikka-Featured-1.jpg",
    name: "Paneer Tikka",
    category: "snacks",
    price: 95,
    description:
      "Chunks of paneer marinated in yogurt and spices, grilled to perfection. Smoky, soft, and bursting with tandoori flavor.",
  },
];

export default Menu;
