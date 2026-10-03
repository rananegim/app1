import Link from "next/link";
import React from "react";
import { link } from "node:fs";

export default function Contact() {
  return (
    <>
      <div className="bg-[#1CB555] p-8 pb-9">
        <span className="flex gap-1 items-center">
          <Link
            href="/"
            className=" text-gray-300 hover:text-white duration-150 "
          >
            Home
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 512"
            className="h-4 w-4 fill-current text-gray-300"
          >
            <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L178.7 256 41.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
          </svg>
          <Link href="/contact" className="text-white">
            Contact
          </Link>
        </span>

        <div className="flex gap-3 py-5">
          <div className="bg-green-300/60 p-4 rounded-2xl w-fit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="h-11 w-11 fill-current text-white"
            >
              <path d="M256 80C149.9 80 63.4 165.4 64 271.5V336c-19.1 8.5-32 27.5-32 49.4v46c0 25.5 18.8 47.4 44.1 51.4l30.1 4.7c.8 .1 1.6 .1 2.4 .1c26.4 0 47.9-21.5 47.9-47.9V320c0-26.4-21.5-47.9-47.9-47.9c-.6 0-1.2 0-1.8 0C110.6 187.6 175 128 256 128s145.4 59.6 149.3 144.1c-.6 0-1.2 0-1.8 0c-26.4 0-47.9 21.5-47.9 47.9v119.7c0 26.4 21.5 47.9 47.9 47.9c.8 0 1.6 0 2.4-.1l30.1-4.7c25.3-4 44.1-25.9 44.1-51.4v-46c0-21.9-12.9-40.9-32-49.4V271.5C448.6 165.4 362.1 80 256 80z" />
            </svg>
          </div>

          <div>
            <h2 className="text-white font-bold text-5xl">Contact Us</h2>
            <p className="text-gray-300/90">
              We'd love to hear from you. Get in touch with our team.
            </p>
          </div>
        </div>
      </div>

      <div className="container py-10 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* left side */}
          <div>
            <div className="border-gray-200 shadow-lg my-5 border-2 rounded-2xl">
              <div className="p-5 flex gap-4">
                <div className="w-15 h-15 bg-green-300 flex items-center justify-center rounded-2xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="h-9 w-7.5 fill-current text-green-500"
                  >
                    <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 296.5 187.5 484 420 484c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L279.2 342c-58.9-29.5-106.8-77.4-136.3-136.3l52.3-42.9c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-xl">Phone</h4>
                  <p className="text-gray-400">Mon-Fri from 8am to 6pm</p>
                  <span className="text-green-600">+1 (800) 123-4567</span>
                </div>
              </div>
            </div>

            <div className="border-gray-200 shadow-lg my-5 border-2 rounded-2xl">
              <div className="p-5 flex gap-4">
                <div className="w-15 h-15 bg-green-300 flex items-center justify-center rounded-2xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="h-9 w-7.5 fill-current text-green-500"
                  >
                    <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-xl">Email</h4>
                  <p className="text-gray-400">We'll respond within 24 hours</p>
                  <span className="text-green-600">support@freshcart.com</span>
                </div>
              </div>
            </div>

            <div className="border-gray-200 shadow-lg my-5 border-2 rounded-2xl">
              <div className="p-5 flex gap-4">
                <div className="w-15 h-15 bg-green-300 flex items-center justify-center rounded-2xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                    className="h-9 w-7.5 fill-current text-green-500"
                  >
                    <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-xl">Office</h4>
                  <p className="text-gray-400">
                    123 Commerce Street <br />
                    New York, NY 10001 <br />
                    United States
                  </p>
                </div>
              </div>
            </div>

            <div className="border-gray-200 shadow-lg my-5 border-2 rounded-2xl">
              <div className="p-5 flex gap-4">
                <div className="w-15 h-15 bg-green-300 flex items-center justify-center rounded-2xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="h-9 w-7.5 fill-current text-green-500"
                  >
                    <path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-xl">Business Hours</h4>
                  <p className="text-gray-400">
                    Monday - Friday: 8am - 6pm <br />
                    Saturday: 9am - 4pm <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            <div className="border-gray-200 shadow-lg my-5 border-2 rounded-2xl">
              <div className="p-5">
                <h4 className="font-bold text-xl">Follow Us</h4>
                <div className="flex items-center gap-3">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-green-600 hover:text-white transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                      className="h-4 w-4 fill-current"
                    >
                      <path d="M80 299.3l0 212.7 116 0 0-212.7 86.5 0 18-97.8-104.5 0 0-34.6c0-51.7 20.3-71.5 72.7-71.5 16.3 0 29.4 .4 37 1.2l0-88.7C291.4 4 256.4 0 236.2 0 129.3 0 80 50.5 80 159.4l0 42.1-66 0 0 97.8 66 0z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-green-600 hover:text-white transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="h-4 w-4 fill-current"
                    >
                      <path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103l0-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" />
                    </svg>
                  </a>

                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-green-600 hover:text-white transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      className="h-4 w-4 fill-current"
                    >
                      <path d="M224.3 141a115 115 0 1 0 -.6 230 115 115 0 1 0 .6-230zm-.6 40.4a74.6 74.6 0 1 1 .6 149.2 74.6 74.6 0 1 1 -.6-149.2zm93.4-45.1a26.8 26.8 0 1 1 53.6 0 26.8 26.8 0 1 1 -53.6 0zm129.7 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM399 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                    </svg>
                  </a>

                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-green-600 hover:text-white transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      className="h-4 w-4 fill-current"
                    >
                      <path d="M100.3 448l-92.9 0 0-299.1 92.9 0 0 299.1zM53.8 108.1C24.1 108.1 0 83.5 0 53.8 0 39.5 5.7 25.9 15.8 15.8s23.8-15.8 38-15.8 27.9 5.7 38 15.8 15.8 23.8 15.8 38c0 29.7-24.1 54.3-53.8 54.3zM447.9 448l-92.7 0 0-145.6c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7l0 148.1-92.8 0 0-299.1 89.1 0 0 40.8 1.3 0c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3l0 164.3-.1 0z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* right side form */}
          <div>
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
              <div className="flex items-start gap-4 mb-8">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="h-6 w-6 fill-current text-green-600"
                  >
                    <path d="M256 80C149.9 80 63.4 165.4 64 271.5V336c-19.1 8.5-32 27.5-32 49.4v46c0 25.5 18.8 47.4 44.1 51.4l30.1 4.7c.8 .1 1.6 .1 2.4 .1c26.4 0 47.9-21.5 47.9-47.9V320c0-26.4-21.5-47.9-47.9-47.9c-.6 0-1.2 0-1.8 0C110.6 187.6 175 128 256 128s145.4 59.6 149.3 144.1c-.6 0-1.2 0-1.8 0c-26.4 0-47.9 21.5-47.9 47.9v119.7c0 26.4 21.5 47.9 47.9 47.9c.8 0 1.6 0 2.4-.1l30.1-4.7c25.3-4 44.1-25.9 44.1-51.4v-46c0-21.9-12.9-40.9-32-49.4V271.5C448.6 165.4 362.1 80 256 80z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">
                    Send us a Message
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">
                    Fill out the form and we&apos;ll get back to you
                  </p>
                </div>
              </div>

              <form className="space-y-6">
                {/* Name  Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm placeholder-gray-400 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm placeholder-gray-400 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-colors"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <select className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-colors bg-white">
                    <option>Select a subject</option>
                    <option>General Inquiry</option>
                    <option>Order Support</option>
                    <option>Returns & Refunds</option>
                    <option>Partnership</option>
                    <option>Feedback</option>
                    <option>Others</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    placeholder="How can we help you?"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm placeholder-gray-400 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-colors resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-6 py-3 text-sm font-semibold text-white hover:bg-green-700 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="h-4 w-4 fill-current"
                  >
                    <path d="M470.3 271.8l-368 161.4c-14.1 6.2-30.5-3.1-32.9-18.3L45.4 273.3c-1.4-8.8 4.7-17 13.5-18.4l203.7-33c3.7-.6 3.7-5.9 0-6.5l-203.7-33c-8.9-1.4-14.9-9.6-13.5-18.4l24-141.6c2.4-15.2 18.8-24.5 32.9-18.3l368 161.4c17 7.5 17 31.3 0 38.8z" />
                  </svg>
                  Send Message
                </button>
              </form>
            </div>
            <div className="rounded-2xl mt-5 bg-green-50 p-8 flex gap-5 items-start">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="h-5 w-5 fill-current text-green-600"
                >
                  <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM169.8 165.3c7.9-22.3 29-37.3 52.6-37.3h58.3c34.9 0 63.3 28.3 63.3 63.3c0 22.6-12 43.5-31.5 54.8L280 264.4c-.2 13.7-11.4 24.6-25 24.6c-13.8 0-25-11.2-25-25V252.4c0-8.9 4.8-17.2 12.6-21.6l26.5-15.1c6.3-3.6 10.2-10.3 10.2-17.6c0-11.1-9-20.1-20.1-20.1H222.4c-4.4 0-8.4 2.8-9.9 7l-.1 .2c-4.6 12.9-18.8 19.7-31.8 15c-12.9-4.6-19.7-18.8-15-31.8l.1-.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
                </svg>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 mb-1">
                  Looking for quick answers?
                </h4>
                <p className="text-gray-600 text-sm mb-3">
                  Check out our Help Center for frequently asked questions about
                  orders, shipping, returns, and more.
                </p>
                <Link
                  href="/help"
                  className="text-green-600 text-sm font-medium hover:text-green-700 inline-flex items-center gap-1"
                >
                  Visit Help Center
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    className="h-3 w-3 fill-current"
                  >
                    <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* container */}
      </div>
    </>
  );
}
