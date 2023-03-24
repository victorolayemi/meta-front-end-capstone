import React from "react";
import Card from "./Card";
import greekSalad from "../assets/burger.jpg";
import bruschetta from "../assets/Bruchetta.svg";
import LemonDessert from "../assets/LemonDessert.jpg";

const specialsData = [
  {
    img: greekSalad,
    title: "Burger",
    price: 9.99,
    description:
      "Tasty, delicious, and has me craving more on the first bite.” to “Juicy, mouthwatering, tasty, and everything you'd ever want to savor.",
  },
  {
    img: bruschetta,
    title: "Bruschetta",
    price: 7.99,
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
  },
  {
    img: LemonDessert,
    title: "Lemon Dessert",
    price: 3.99,
    description:
      "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
  },
];

function Main() {
  const specialsCards = specialsData.map((item) => {
    return (
      <Card
        key={item.title}
        image={item.img}
        title={item.title}
        price={item.price}
        description={item.description}
      />
    );
  });

  return (
    <main>
      <section className="specials">
        <div className="top">
          <h1>This weeks specials!</h1>
          <button>Online Menu</button>
        </div>
        <div className="cards">{specialsCards}</div>
      </section>
      <br></br>
    </main>
  );
}

export default Main;
