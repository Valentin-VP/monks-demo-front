import pizzaImg from "./assets/productos/pizza.jpg";
import hamburguesaImg from "./assets/productos/hamburguesa.jpg";
import donaImg from "./assets/productos/dona.jpg";

const prods = {
  productData: [
    {
      id: 1,
      img: pizzaImg,
      title: "Pizza a la pala",
      desc: "Varios sabores a elección",
      precio: 310,
    },
    {
      id: 2,
      img: hamburguesaImg,
      title: "Hamburguesa",
      desc: "",
      precio: 240,
    },
    {
      id: 3,
      img: donaImg,
      title: "Dona",
      desc: "Chocolate o vainilla",
      precio: 80,
    },
  ],
};

export default prods;
