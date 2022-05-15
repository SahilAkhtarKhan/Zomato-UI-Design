const cards = document.getElementById("cards");
const cardDetails = [
  {
    image:
      "https://b.zmtcdn.com/data/pictures/5/19343635/bae667b306c1599987614c5c63d219f7_o2_featured_v2.jpg?output-format=webp",
    promotion: "Promoted",
    discount: "10% OFF",
    time: "30min",
    shopName: "Rotiwale",
    foodRating: "3.9☆",
    location: "North Indian, Chinese",
    rates: "₹100 for one",
    img: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
    orderQty: "625+ orders placed from here recently",
    logoImg:
      "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
  },
  {
    image:
      "https://b.zmtcdn.com/data/dish_photos/7d9/cc51fa5c56876cac2706a3d1b98dd7d9.jpg?output-format=webp",
    discount: "60% OFF",
    time: "30min",
    shopName: "Sharma Bhojnalaya",
    foodRating: "3.9☆",
    location: "North Indian",
    rates: "₹100 for one",
    img: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
    orderQty: "5325+ orders placed from here recently",
    logoImg:
      "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
  },
  {
    image:
      "https://b.zmtcdn.com/data/dish_photos/078/86f959b31d096fb60cf2e59401717078.jpg?output-format=webp",
    promotion: "Promoted",
    discount: "60% OFF",
    time: "31min",
    shopName: "Shikha Restaurant",
    foodRating: "4.0☆",
    location: "North Indian, Chinese, South Indian,Peer Gate Area, Bhopal",
    rates: "₹200 for one",
    img: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
    orderQty: "925+ orders placed from here recently",
    logoImg:
      "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
  },
  {
    image:
      "https://b.zmtcdn.com/data/dish_photos/0a6/ed1a8ce3d5021918d8fd3b6c861b50a6.jpg?output-format=webp",
    discount: "40% OFF",
    time: "39min",
    shopName: "Rama'aahar Food Court",
    foodRating: "3.8☆",
    location:
      "North Indian, Chinese, Fast Food, Beverages, Pizza, Burger, Desserts Aura Mall, Bhopal",
    rates: "₹200 for one",
    img: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
    orderQty: "325+ orders placed from here recently",
    logoImg:
      "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
  },
  {
    image:
      "https://b.zmtcdn.com/data/pictures/3/19337953/7e964b5109c483cd9555308ea73674cf_o2_featured_v2.jpg?output-format=webp",
    promotion: "Promoted",
    discount: "60% OFF",
    time: "41min",
    shopName: "Mahadev Bhojnalay",
    foodRating: "3.6☆",
    location: "North Indian, Biryani, Chinese Maharana Pratap Nagar, Bhopal",
    rates: "₹200 for one",
    img: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
    orderQty: "8625+ orders placed from here recently",
    logoImg:
      "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
  },
  {
    image:
      "https://b.zmtcdn.com/data/dish_photos/611/43a98f22573cb56d9efc6cba41eb9611.jpg?output-format=webp",
    promotion: "Promoted",
    discount: "50% OFF",
    time: "36min",
    shopName: "Haus Of Taste Cafe & Restaurant",
    foodRating: "3.5☆",
    location:
      "Chinese, North Indian, Fast Food, Continental, Beverages Arera Colony, Bhopal",
    rates: "₹200 for one",
    img: "https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png?output-format=webp",
    orderQty: "150+ orders placed from here recently",
    logoImg:
      "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp",
  },
];
for (let i = 0; i < cardDetails.length; i++) {
  let promoted = "";
  if (cardDetails[i].hasOwnProperty("promotion")) {
    promoted = `<div class= 'promoted'><p>
    ${cardDetails[i].promotion}
    </p></div>`;
  } else {
    promoted = `<div class= 'not-promoted'><p>
  </p></div>`;
  }
  const element = document.createElement("div");
  element.innerHTML = `<div class= 'card'> 
  <img src= ${cardDetails[i].image} />
  ${promoted}
    <div class= 'discount-coupon'><p>
    ${cardDetails[i].discount}
    </p></div>
    <div class= 'time'><p>
    ${cardDetails[i].time}
    </p></div>
    <div id= 'food-card-details'>
    <div class = 'shop-name'><h3>
    ${cardDetails[i].shopName}
    </h3></div>
    <div class = 'food-rating'><p>
    ${cardDetails[i].foodRating}
    </p></div>
    <div class = 'food-shop-location'><p>
    ${cardDetails[i].location}
    </p></div>
    <div class = rate-of-food><p>
    ${cardDetails[i].rates}
    </p></div></div>
    <div class= 'orders-qty'><img src= ${cardDetails[i].img} />
    <p> ${cardDetails[i].orderQty} </p><img id= 'logo' src= ${cardDetails[i].logoImg} /></div>
    </div>`;
  cards.appendChild(element);
}
