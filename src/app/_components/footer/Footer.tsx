import React from "react";
import Link from "next/link";

export default function Footer() {

  const shopLinks = [
    { href: "/products", label: "All Products" },
    { href: "/categories", label: "Categories" },
    { href: "/brands", label: "Brands" },
    { href: "/electronics", label: "Electronics" },
    { href: "/mens-fashion", label: "Men's Fashion" },
    { href: "/womens-fashion", label: "Women's Fashion" },
  ];

  const accountLinks = [
    { href: "/account", label: "My Account" },
    { href: "/orders", label: "Order History" },
    { href: "/wishlist", label: "Wishlist" },
    { href: "/cart", label: "Shopping Cart" },
    { href: "/login", label: "Sign In" },
    { href: "/register", label: "Create Account" },
  ];

  const supportLinks = [
    { href: "/contact", label: "Contact Us" },
    { href: "/help", label: "Help Center" },
    { href: "/shipping", label: "Shipping Info" },
    { href: "/returns", label: "Returns & Refunds" },
    { href: "/track-order", label: "Track Order" },
  ];

  const legalLinks = [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
    { href: "/cookies", label: "Cookie Policy" },
  ];

  const socialLinks = [
    {
      href: "https://facebook.com",
      label: "Facebook",
      path: "M279.14 288l14.22-92.66h-88.91v-45.71c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z",
      viewBox: "0 0 320 512",
    },
    {
      href: "https://twitter.com",
      label: "Twitter",
      path: "M459.4 151.7c.3 4.5.3 9 .3 13.5 0 137.8-104.9 296.7-296.7 296.7-59.4 0-114.4-17.2-160.9-47 8.5.9 16.7 1.3 25.4 1.3 49.1 0 94.2-16.8 130.3-45.3-46-.9-84.5-31.2-97.9-72.8 6.4 1 12.9 1.6 19.6 1.6 9.4 0 18.5-1.3 27.2-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14.1 7.8 30.4 12.6 47.6 13.1-28.4-19-47-51.4-47-88.2 0-19.6 5.2-37.6 14.4-53.2 51.7 63.6 129.4 105.3 216.7 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.4 0 57.8 12.6 77.1 33.1 24-4.5 46.8-13.1 67.3-24.7-7.8 24.4-24.4 45-46 57.8 21.3-2.3 41.5-8.1 60.1-16.2-13.9 20.9-31.6 39.4-51.9 54.3z",
      viewBox: "0 0 512 512",
    },
    {
      href: "https://instagram.com",
      label: "Instagram",
      path: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z",
      viewBox: "0 0 448 512",
    },
    {
      href: "https://youtube.com",
      label: "YouTube",
      path: "M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z",
      viewBox: "0 0 576 512",
    },
  ];

  return (
    <>
      <div className="bg-green-200/50">
        <div className="container grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 ">
          <div className="flex gap-2 items-center p-5">
            <div className="bg-green-300/60 p-4 rounded-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                className="h-5 w-5 fill-current text-green-600"
              >
                <path d="M48 0C21.5 0 0 21.5 0 48V368c0 26.5 21.5 48 48 48H64c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7C500 102.7 483.7 96 466.7 96H416V48c0-26.5-21.5-48-48-48H48zM416 160h50.7L544 237.3V256H416V160zM160 464a48 48 0 1 1 0-96 48 48 0 1 1 0 96zm272-48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z" />
              </svg>
            </div>

            <div className="px-2">
              <span className="text-md font-medium">Free shiping</span>
              <p className="text-gray-500 text-sm leading-4.5">
                on orders over 500EGP
              </p>
            </div>
          </div>

          <div className="flex gap-2 items-center p-4">
            <div className="bg-green-300/60 p-4 rounded-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="h-5 w-5 fill-current text-green-600"
              >
                <path d="M125.7 160H176c17.7 0 32 14.3 32 32s-14.3 32-32 32H48c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32s32 14.3 32 32v51.2L97.6 97.6c87.5-87.5 229.3-87.5 316.8 0s87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3s-163.8-62.5-226.3 0L125.7 160z" />
              </svg>
            </div>

            <div className="px-2">
              <span className="text-md font-medium">Easy Returns</span>
              <p className="text-gray-500 text-sm leading-4.5">
                4-day return policy
              </p>
            </div>
          </div>

          <div className="flex gap-2 items-center p-4">
            <div className="bg-green-300/60 p-4 rounded-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="h-5 w-5 fill-current text-green-600"
              >
                <path d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0zm0 66.8V444.8C394 378 431.1 230.1 432 141.4L256 66.8l0 0z" />
              </svg>
            </div>

            <div className="px-2">
              <span className="text-md font-medium">Secure Payment</span>
              <p className="text-gray-500 text-sm leading-4.5">
                100% secure checkout
              </p>
            </div>
          </div>

          <div className="flex gap-2 items-center p-4">
            <div className="bg-green-300/60 p-4 rounded-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="h-5 w-5 fill-current text-green-600"
              >
                <path d="M256 80C149.9 80 63.4 165.4 64 271.5V336c-19.1 8.5-32 27.5-32 49.4v46c0 25.5 18.8 47.4 44.1 51.4l30.1 4.7c.8 .1 1.6 .1 2.4 .1c26.4 0 47.9-21.5 47.9-47.9V320c0-26.4-21.5-47.9-47.9-47.9c-.6 0-1.2 0-1.8 0C110.6 187.6 175 128 256 128s145.4 59.6 149.3 144.1c-.6 0-1.2 0-1.8 0c-26.4 0-47.9 21.5-47.9 47.9v119.7c0 26.4 21.5 47.9 47.9 47.9c.8 0 1.6 0 2.4-.1l30.1-4.7c25.3-4 44.1-25.9 44.1-51.4v-46c0-21.9-12.9-40.9-32-49.4V271.5C448.6 165.4 362.1 80 256 80z" />
              </svg>
            </div>

            <div className="px-2">
              <span className="text-md font-medium">24/7 Support</span>
              <p className="text-gray-500 text-sm leading-4.5">
                Contact us anytime
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-900/95 text-gray-300">
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Brand */}
            <div className="lg:col-span-1">
              <Link href="/" className="inline-flex items-center gap-2 bg-white rounded-lg px-3 py-2 mb-4">
                <img
                  src="https://freshcart-route.vercel.app/_next/static/media/freshcart-logo.49f1b44d.svg"
                  alt="FreshCart"
                  className="h-8 w-auto"
                />
              </Link>

              <p className="text-sm leading-6 mb-6">
                FreshCart is your one-stop destination for quality products.
                From fashion to electronics, we bring you the best brands at
                competitive prices with a seamless shopping experience.
              </p>

              <ul className="space-y-3 text-sm mb-6">
                <li className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-4 w-4 fill-current text-green-500">
                    <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 296.5 187.5 484 420 484c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L279.2 342c-58.9-29.5-106.8-77.4-136.3-136.3l52.3-42.9c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                  </svg>
                  <span>+1 (800) 123-4567</span>
                </li>
                <li className="flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-4 w-4 fill-current text-green-500">
                    <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                  </svg>
                  <span>support@freshcart.com</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="h-4 w-4 fill-current text-green-500 mt-1">
                    <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                  </svg>
                  <span>123 Commerce Street, New York, NY 10001</span>
                </li>
              </ul>

              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="h-9 w-9 flex items-center justify-center rounded-full bg-gray-800 text-gray-300 hover:bg-green-600 hover:text-white transition-colors duration-200"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox={social.viewBox} className="h-4 w-4 fill-current">
                      <path d={social.path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Shop */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Shop</h3>
              <ul className="space-y-3 text-sm">
                {shopLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-green-500 transition-colors duration-200">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Account */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Account</h3>
              <ul className="space-y-3 text-sm">
                {accountLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-green-500 transition-colors duration-200">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Support</h3>
              <ul className="space-y-3 text-sm">
                {supportLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-green-500 transition-colors duration-200">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Legal</h3>
              <ul className="space-y-3 text-sm">
                {legalLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-green-500 transition-colors duration-200">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-700">
          <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <p>© 2026 FreshCart. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="h-4 w-4 fill-current">
                  <path d="M64 32C28.7 32 0 60.7 0 96v32H576V96c0-35.3-28.7-64-64-64H64zM576 224H0V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V224zM112 352h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm112 16c0-8.8 7.2-16 16-16h128c8.8 0 16 7.2 16 16s-7.2 16-16 16H240c-8.8 0-16-7.2-16-16z" />
                </svg>
                Visa
              </span>
              <span className="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="h-4 w-4 fill-current">
                  <path d="M64 32C28.7 32 0 60.7 0 96v32H576V96c0-35.3-28.7-64-64-64H64zM576 224H0V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V224zM112 352h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm112 16c0-8.8 7.2-16 16-16h128c8.8 0 16 7.2 16 16s-7.2 16-16 16H240c-8.8 0-16-7.2-16-16z" />
                </svg>
                Mastercard
              </span>
              <span className="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="h-4 w-4 fill-current">
                  <path d="M64 32C28.7 32 0 60.7 0 96v32H576V96c0-35.3-28.7-64-64-64H64zM576 224H0V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V224zM112 352h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm112 16c0-8.8 7.2-16 16-16h128c8.8 0 16 7.2 16 16s-7.2 16-16 16H240c-8.8 0-16-7.2-16-16z" />
                </svg>
                PayPal
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}