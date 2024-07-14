import React from "react";
import Link from "next/link";

interface CartItemProps {
  item: {
    id: string;
    name: string;
    color: string;
    price: number;
    image: string;
  };
}

interface CartItemData {
  id: string;
  name: string;
  color: string;
  price: number;
  image: string;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  return (
    <article className="flex justify-between items-center mt-14 max-md:mt-10">
      <div className="flex gap-5">
        <img
          loading="lazy"
          src={item.image}
          alt={item.name}
          className="shrink-0 w-28 max-w-full aspect-[0.78]"
        />
        <div className="flex flex-col my-auto">
          <h3 className="text-2xl font-medium">{item.name}</h3>
          <p className="mt-4">{item.id}</p>
          <p className="mt-4">Colour: {item.color}</p>
        </div>
      </div>
      <p className="font-light">${item.price}</p>
      <div className="flex gap-5 justify-between items-center max-w-full text-3xl font-medium whitespace-nowrap w-[129px]">
        <button className="self-stretch my-auto">-</button>
        <span className="self-stretch">1</span>
        <button className="self-stretch my-auto">+</button>
      </div>
      <p className="font-light">${item.price}</p>
    </article>
  );
};

const cartItems: CartItemData[] = [
  {
    id: "#345667722456",
    name: "Sleepwear",
    color: "Red",
    price: 25,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/39d09e1b48dd4404f98389f942f32e9385b09ba3f11cb39f2c591696729962e0?apiKey=af97e94b909e4cdbb531b36fb1b19598&",
  },
  {
    id: "#345667722456",
    name: "Sleepwear",
    color: "Red",
    price: 25,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/1ad580478b308edce4dd581a714eb7662f2f71ab57074a8da23eb7a716deadd6?apiKey=af97e94b909e4cdbb531b36fb1b19598&",
  },
];

interface CheckoutButtonProps {
  totalPrice: number;
}

const CheckoutButton: React.FC<CheckoutButtonProps> = ({ totalPrice }) => {
  return (
    <Link
      href="/checkout"
      className="flex gap-5 self-end px-10 py-6 mt-36 max-w-full font-bold bg-red-400 rounded-[30px] w-[480px] max-md:flex-wrap max-md:px-5 max-md:mt-10"
    >
      <span className="flex-auto">Checkout</span>
      <span>${totalPrice}</span>
    </Link>
  );
};

const MyCart: React.FC = () => {
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <main className="flex flex-col pb-16 bg-white">
      <h1 className="self-start mt-28 ml-7 text-5xl font-bold text-black max-md:mt-10 max-md:ml-2.5 max-md:text-4xl">
        My Cart
      </h1>
      <section className="flex flex-col px-20 mt-20 w-full text-2xl text-black max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex justify-between">
          <h2 className="self-center text-2xl font-medium">Product</h2>
          <h2 className="self-center font-medium">Price</h2>
          <h2 className="self-center font-medium">QTY</h2>
          <h2 className="font-medium">Total</h2>
        </div>
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
        <CheckoutButton totalPrice={totalPrice} />
      </section>
    </main>
  );
};

export default MyCart;
