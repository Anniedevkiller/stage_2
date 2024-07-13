import Link from "next/link";
export default function Home() {
  return (
    <main className="bg-purple h-10 mx-auto">
      
    </main>
  );
}
const fetchProducts = async () => {
  const organizationId = 'YOURORGANIZATIONID'; // replace with your organization ID
  const appId = 'YOURAPPID'; // replace with your app ID
  const apiKey = 'YOURAPIKEY'; // replace with your API key
  const url = `https://timbu-get-all-products.reavdev.workers.dev/?organization_id=8778962a80534a3aaab4db4d61d81260&reverse_sort=false&page=1&size=10&Appid=K9OY1108HX678SZ&Apikey=f1ec948a08f1425bb86f3d0fd4d2c24c20240713182920270564`;
  try {
      const response = await fetch(url, {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json'
          }
      });
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data);
  } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
  }
};
fetchProducts();
const NavSection = () => {
  return (
    <nav className="bg-[#270526] h-[74px]">
      <div className="container flex w-full items-center justify-between h-full text-stone-50">
        <h2 className="font-semibold text-stone-50">ORANGE</h2>
        <div className="gap-5">
          <ul className="flex items-center gap-7">
            <li>
              <Link href="#">Sign up</Link>
            </li>
            <li>
              <Link href="#">Login</Link>
            </li>
            <Link href="/cart">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const HeroSection = () => {
  return (
    <section className="flex justify-between items-center sm: flex-shrink-0">
      <div className="mt-16 ml-40">
        <h1 className="font-black text-5xl ml-1 sm:text-center ">
          ORANGE STORE
        </h1>
        <h2 className="text-4xl ml-1 mt-10">
          Shop Female Lingerie <br /> And Sleepwear
        </h2>
        <button className="bg-purple text-stone-50  mt-8 ml-1 px-24 py-3 rounded-full">
          Shop
        </button>
      </div>
      <img src="/pic1.png" className="mt-3 mr-20 " alt="" />
    </section>
  );
};
const CatSection = () => {
  return (
    <section className="mx-auto w-[92%]">
    <div className="text-center text-5xl font-black">
      <h2>Our Catergories</h2>
    </div>
    <div className="grid grid-cols-4 mt-10">
      <div>
        <div className="mt-4">
          <img src="/1.png" alt="" />
          <h4 className="text-lg text-sm">Shipped from Aboard</h4>
          <h2 className="font-semibold">Full package red lace</h2>
          <button type="button" className="bg-orange px-10 py-1 rounded-full text-left">Add to cart</button>
        </div>
      </div>
      <div>
      <div className="mt-4">
        <img src="/2.png" alt="" />
          <h4 className="text-lg text-sm">Shipped from Aboard</h4>
          <h2 className="font-semibold">Full package red lace</h2>
          <button type="button" className="bg-orange px-10 py-1 rounded-full text-left">Add to cart</button>
        </div>
      </div>
      <div>
      <div className="mt-4">
        <img src="/3.png" alt="" />
          <h4 className="text-lg text-sm">Shipped from Aboard</h4>
          <h2 className="font-semibold">Full package red lace</h2>
          <button type="button" className="bg-orange px-10 py-1 rounded-full text-left">Add to cart</button>
        </div>
      </div>
      <div>
      <div className="mt-4">
        <img src="/4.png" alt="" />
          <h4 className="text-lg text-sm">Shipped from Aboard</h4>
          <h2 className="font-semibold">Full package red lace</h2>
          <button type="button" className="bg-orange px-10 py-1 rounded-full text-left">Add to cart</button>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-4">
      <div>

        <div className="mt-4">
          <img src="/5.png" alt="" />
          <h4 className="text-lg text-sm">Shipped from Aboard</h4>
          <h2 className="font-semibold">Full package red lace</h2>
          <button type="button" className="bg-orange px-10 py-1 rounded-full text-left">Add to cart</button>
        </div>
      </div>
      <div>
      <div className="mt-4">
        <img src="/6.png" alt="" />
          <h4 className="text-lg text-sm">Shipped from Aboard</h4>
          <h2 className="font-semibold">Full package red lace</h2>
          <button type="button" className="bg-orange px-10 py-1 rounded-full text-left">Add to cart</button>
        </div>
      </div>
      <div>
      <div className="mt-4">
        <img src="/7.png" alt="" />
          <h4 className="text-lg text-sm">Shipped from Aboard</h4>
          <h2 className="font-semibold">Full package red lace</h2>
          <button type="button" className="bg-orange px-10 py-1 rounded-full text-left">Add to cart</button>
        </div>
      </div>
      <div>
      <div className="mt-4">
        <img src="/8.png" alt="" />
          <h4 className="text-lg text-sm">Shipped from Aboard</h4>
          <h2 className="font-semibold">Full package red lace</h2>
          <button type="button" className="bg-orange px-10 py-1 rounded-full text-left">Add to cart</button>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-4">
      <div>

        <div className="mt-4">
          <img src="/9.png" alt="" />
          <h4 className="text-lg text-sm">Shipped from Aboard</h4>
          <h2 className="font-semibold">Full package red lace</h2>
          <button type="button" className="bg-orange px-10 py-1 rounded-full text-left">Add to cart</button>
        </div>
      </div>
      <div>
      <div className="mt-4">
        <img src="/10.png" alt="" />
          <h4 className="text-lg text-sm">Shipped from Aboard</h4>
          <h2 className="font-semibold">Full package red lace</h2>
          <button type="button" className="bg-orange px-10 py-1 rounded-full text-left">Add to cart</button>
        </div>
      </div>
      <div>
      <div className="mt-4">
        <img src="/11.png" alt="" />
          <h4 className="text-lg text-sm">Shipped from Aboard</h4>
          <h2 className="font-semibold">Full package red lace</h2>
          <button type="button" className="bg-orange px-10 py-1 rounded-full text-left">Add to cart</button>
        </div>
      </div>
      <div>
      <div className="mt-4">
        <img src="/12.png" alt="" />
          <h4 className="text-lg text-sm">Shipped from Aboard</h4>
          <h2 className="font-semibold">Full package red lace</h2>
          <button type="button" className="bg-orange px-10 py-1 rounded-full text-left">Add to cart</button>
        </div>
      </div>
    </div>
  </section>
  )
}


const NewArrival: React.FC = () => {
  return (
    <section className="mx-auto flex overflow-hidden relative flex-col justify-center items-center px-16 pt-96 pb-72 mt-24 max-w-full text-8xl font-semibold min-h-[820px] text-neutral-950 text-opacity-90 w-[1404px] max-md:px-5 max-md:py-10 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
    <div>
      <h3 className="font-bold text-8xl text-center">Our New Arrival</h3>
    </div>
    <div>
      <img src="/13.png" className="object-cover absolute inset-0 z-[-50]" alt="Our New Arrival" />
    </div>
  </section>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="flex gap-5 justify-between items-start self-stretch px-16 pt-12 pb-6 mt-16 w-full text-xl font-medium text-red-100 bg-[#270526] max-md:flex-wrap max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col">
        <h3 className="font-semibold">Categories</h3>
        <nav>
          <ul>
            <li className="mt-6">Lingerie</li>
            <li className="mt-6">Sleeping wear</li>
          </ul>
        </nav>
      </div>
      <div className="flex flex-col mt-2">
        <h3 className="font-semibold">About us</h3>
        <nav>
          <ul>
            <li className="mt-7">Our brands</li>
            <li className="mt-7">Blogs</li>
            <li className="mt-6">Get App</li>
            <li className="mt-6">Fraud Alert</li>
          </ul>
        </nav>
      </div>
      <div className="flex flex-col mt-2 text-white">
        <h3 className="font-semibold">Help</h3>
        <nav>
          <ul>
            <li className="mt-6">FAQS</li>
            <li className="mt-7">Cancellation</li>
            <li className="mt-7">Track order</li>
            <li className="mt-8">Contact us</li>
          </ul>
        </nav>
      </div>
      <div className="flex flex-col text-white">
        <h3 className="font-semibold">Policy</h3>
        <nav>
          <ul>
            <li className="mt-6">Terms of service</li>
            <li className="mt-7">Shipping Information</li>
            <li className="mt-6">Privacy policy</li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export { NavSection, HeroSection, CatSection, NewArrival, Footer };
