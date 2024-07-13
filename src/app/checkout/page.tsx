import React from "react";

interface OrderItem {
  name: string;
  price: number;
}

const OrderSummary: React.FC = () => {
  const orderItems: OrderItem[] = [
    { name: "Red lacy sleepwear", price: 25 },
    { name: "black lacy sleepwear", price: 25 },
  ];

  return (
    <div className="flex gap-5 justify-between self-start mt-5 text-2xl">
      <div className="flex flex-col px-5">
        <h2 className="text-5xl font-bold max-md:text-4xl">My Cart</h2>
        <h3 className="mt-20 max-md:mt-10">Order summary</h3>
        {orderItems.map((item, index) => (
          <div key={index} className="mt-16 max-md:mt-10">
            1 {item.name}
          </div>
        ))}
      </div>
      <div className="flex flex-col self-end px-5 mt-52 whitespace-nowrap max-md:mt-10">
        {orderItems.map((item, index) => (
          <div key={index} className={index > 0 ? "mt-20 max-md:mt-10" : ""}>
            ${item.price}
          </div>
        ))}
      </div>
    </div>
  );
};

const PaymentMethod: React.FC = () => {
  return (
    <form className="flex flex-col items-start px-9 py-16 text-base border-black border-solid shadow-sm border-[5px] max-md:px-5 max-md:max-w-full">
      <h2 className="self-center text-3xl text-neutral-950">Payment Method</h2>
      <label htmlFor="name" className="mt-9 ml-2.5">
        Name
      </label>
      <input
        type="text"
        id="name"
        className="shrink-0 mt-8 ml-2.5 max-w-full h-11 border border-solid border-black border-opacity-70 w-[412px]"
      />
      <label htmlFor="cardNumber" className="mt-8 ml-2.5">
        Card Number
      </label>
      <input
        type="text"
        id="cardNumber"
        className="shrink-0 mt-8 ml-2.5 max-w-full h-11 border border-solid border-black border-opacity-70 w-[412px]"
      />
      <div className="flex gap-5 self-stretch mt-14 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col flex-1">
          <label htmlFor="expiry" className="self-start ml-2.5">
            MM /YY
          </label>
          <input
            type="text"
            id="expiry"
            className="shrink-0 mt-6 h-11 border border-solid border-black border-opacity-70"
          />
        </div>
        <div className="flex flex-col flex-1 self-start">
          <label htmlFor="securityCode">Security Code</label>
          <input
            type="text"
            id="securityCode"
            className="shrink-0 mt-5 h-11 border border-solid border-black border-opacity-70"
          />
        </div>
      </div>
      <button
        type="submit"
        className="justify-center items-center self-stretch px-16 py-5 mt-12 text-2xl bg-red-400 rounded-[30px] max-md:px-5 max-md:mt-10 max-md:max-w-full"
      >
        Complete Payment
      </button>
    </form>
  );
};

const MyCart: React.FC = () => {
  return (
    <main className="flex flex-col pb-20 font-medium bg-white">
      <section className="flex gap-5 justify-between self-center mt-24 w-full text-black max-w-[1379px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        <OrderSummary />
        <PaymentMethod />
      </section>
    </main>
  );
};

export default MyCart;
