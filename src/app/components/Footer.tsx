import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className='py-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-gray-100 text-sm mt-24'>
      {/* Top */}
      <div className="flex flex-col md:flex-row justify-between gap-24">
        {/* Left */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <Link href='/'>
            <div className="text-2xl tracking-wide">Midnight Runners</div>
          </Link>
          <p>Latvia</p>
          <span className="font-semibold">midnightrunners96@gmail.com</span>
          <span className="font-semibold">+371 22 320 238</span>
          <div className="flex gap-6">
            <Image src='/facebook.png' alt='Facebook' width={16} height={16} />
            <Image src='/instagram.png' alt='Instagram' width={16} height={16} />
          </div>
        </div>

        {/* Center */}
        <div className="hidden lg:flex justify-between w-1/2">
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">COMPANY</h1>
            <div className="flex flex-col gap-6">
              <Link href=''>About Us</Link>
              <Link href=''>Careers</Link>
              <Link href=''>Affiliates</Link>
              <Link href=''>Blog</Link>
              <Link href=''>Contact Us</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">SHOP</h1>
            <div className="flex flex-col gap-6">
              <Link href=''>New Arrivals</Link>
              <Link href=''>Accessories</Link>
              <Link href=''>Men</Link>
              <Link href=''>Women</Link>
              <Link href=''>All Products</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">HELP</h1>
            <div className="flex flex-col gap-6">
              <Link href=''>Customer Service</Link>
              <Link href=''>My Account</Link>
              <Link href=''>Find a Store</Link>
              <Link href=''>Legal & Privacy</Link>
              <Link href=''>Gift Card</Link>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <h1 className="font-medium text-lg">SUBSCRIBE</h1>
          <p>Be the first to get the latest news about trends, promotions, and more!</p>
          <div className="flex">
            <input type='text' placeholder='Email Address' className="p-4 w-3/4"/>
            <button className="w-1/4 bg-lama text-white">JOIN</button>
          </div>
          <span className="font-semibold">Secure Payments</span>
          <div className="flex justify-between">
            <Image src='/discover.png' alt='Discover' width={40} height={20}/>
            <Image src='/skrill.png' alt='Skrill' width={40} height={20}/>
            <Image src='/paypal.png' alt='PayPal' width={40} height={20}/>
            <Image src='/mastercard.png' alt='Mastercard' width={40} height={20}/>
            <Image src='/visa.png' alt='Visa' width={40} height={20}/>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="flex flex-col md:flex-row items-center gap-6 justify-between mt-16">
        <div>@ 2024 Midnight Runners Shop</div>
        <div className="flex flex-col gap-8 md:flex-row">
          <div>
            <span className="text-gray-500 mr-4">Language</span>
            <span>United States | English</span>
          </div>
          <div>
            <span className="text-gray-500 mr-4">Currency</span>
            <span>€ EUR</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
