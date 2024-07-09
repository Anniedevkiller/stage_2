import Image from "next/image";

export default function Home() {
  return (
   <main className="bg-purple h-10 mx-auto">
    <div className=" text-stone-50 h-10 flex justify-between items-center mx-auto w-[92%]">
     <h2 className="font-semibold">ORANGE</h2>
     <div className="gap-5">
     <ul className="flex items-center gap-7">
      <li><a href="#">Sign up</a></li>
      <li><a href="#">Login</a></li>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg>

     </ul>
     </div>
    </div>
    <section className="flex justify-between items-center">
      <div className="mt-16 ml-40">
        <h1 className="font-black text-5xl ml-1">ORANGE STORE</h1>
        <h2 className="text-4xl ml-1 mt-10">Shop Lingerie <br /> And Sleepwear</h2>
        <button type="button" className="bg-purple text-stone-50  mt-8 ml-1 px-24 py-3 rounded-full">Shop</button>
      </div>
      <div className="mt-16 mr-40">
      <img src="/pic1.png" width={300} height={500} alt=""/>
      </div>
    </section>
    <section className="mx-auto w-[92%]">
      <div className="text-center text-5xl font-black">
        <h2>Our Catergories</h2>
      </div>
      <div className="grid grid-cols-4">
        <div>
        
          <div className="mt-4">
            <img src="/1.png" alt="" />
            <h4 className="text-lg text-sm">Shipped from Aboard</h4>
            <h2 className="font-semibold">Full package red lace</h2>
            <button type="button" className="bg-orange px-10 py-1 rounded-full text-left">$20</button>
          </div>
        </div>
        <div>
        <div className="mt-4">
          <img src="/2.png" alt="" />
            <h4 className="text-lg text-sm">Shipped from Aboard</h4>
            <h2 className="font-semibold">Full package red lace</h2>
            <button type="button" className="bg-orange px-10 py-1 rounded-full text-left">$20</button>
          </div>
        </div>
        <div>
        <div className="mt-4">
          <img src="/3.png" alt="" />
            <h4 className="text-lg text-sm">Shipped from Aboard</h4>
            <h2 className="font-semibold">Full package red lace</h2>
            <button type="button" className="bg-orange px-10 py-1 rounded-full text-left">$20</button>
          </div>
        </div>
        <div>
        <div className="mt-4">
          <img src="/4.png" alt="" />
            <h4 className="text-lg text-sm">Shipped from Aboard</h4>
            <h2 className="font-semibold">Full package red lace</h2>
            <button type="button" className="bg-orange px-10 py-1 rounded-full text-left">$20</button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4">
        <div>
        
          <div className="mt-4">
            <img src="/5.png" alt="" />
            <h4 className="text-lg text-sm">Shipped from Aboard</h4>
            <h2 className="font-semibold">Full package red lace</h2>
            <button type="button" className="bg-orange px-10 py-1 rounded-full text-left">$20</button>
          </div>
        </div>
        <div>
        <div className="mt-4">
          <img src="/6.png" alt="" />
            <h4 className="text-lg text-sm">Shipped from Aboard</h4>
            <h2 className="font-semibold">Full package red lace</h2>
            <button type="button" className="bg-orange px-10 py-1 rounded-full text-left">$20</button>
          </div>
        </div>
        <div>
        <div className="mt-4">
          <img src="/7.png" alt="" />
            <h4 className="text-lg text-sm">Shipped from Aboard</h4>
            <h2 className="font-semibold">Full package red lace</h2>
            <button type="button" className="bg-orange px-10 py-1 rounded-full text-left">$20</button>
          </div>
        </div>
        <div>
        <div className="mt-4">
          <img src="/8.png" alt="" />
            <h4 className="text-lg text-sm">Shipped from Aboard</h4>
            <h2 className="font-semibold">Full package red lace</h2>
            <button type="button" className="bg-orange px-10 py-1 rounded-full text-left">$20</button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4">
        <div>
        
          <div className="mt-4">
            <img src="/9.png" alt="" />
            <h4 className="text-lg text-sm">Shipped from Aboard</h4>
            <h2 className="font-semibold">Full package red lace</h2>
            <button type="button" className="bg-orange px-10 py-1 rounded-full text-left">$20</button>
          </div>
        </div>
        <div>
        <div className="mt-4">
          <img src="/10.png" alt="" />
            <h4 className="text-lg text-sm">Shipped from Aboard</h4>
            <h2 className="font-semibold">Full package red lace</h2>
            <button type="button" className="bg-orange px-10 py-1 rounded-full text-left">$20</button>
          </div>
        </div>
        <div>
        <div className="mt-4">
          <img src="/11.png" alt="" />
            <h4 className="text-lg text-sm">Shipped from Aboard</h4>
            <h2 className="font-semibold">Full package red lace</h2>
            <button type="button" className="bg-orange px-10 py-1 rounded-full text-left">$20</button>
          </div>
        </div>
        <div>
        <div className="mt-4">
          <img src="/12.png" alt="" />
            <h4 className="text-lg text-sm">Shipped from Aboard</h4>
            <h2 className="font-semibold">Full package red lace</h2>
            <button type="button" className="bg-orange px-10 py-1 rounded-full text-left">$20</button>
          </div>
        </div>
      </div>
    </section>
    <section className="mx-auto w-[92%] mt-10">
      <div>
        <h3 className="font-bold text-4xl text-center">Our New Arrival</h3>
      </div>
      <div>
        <img src="/13.png" alt="Our New Arrival" />
      </div>
    </section>
    <section  className="mx-auto w-[92%]">
      <div>
        <h3>Get Your Discount</h3>
      </div>
      <div className="grid grid-cols-4">
        <img src="/14.png" alt="" />
        <img src="/15.png" alt="" />
        <img src="/16.png" alt="" />
        <img src="/17.png" alt="" />


      </div>
    </section>
    </main>
  );
}
