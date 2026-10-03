
import Link from "next/link";

export default function TopNav() {
  return (
    <div>
      <div className="p-4 border-b-gray-300 border-b hidden lg:block">
        <div className=" flex justify-between">
          {/* left */}
          <div className="flex gap-4">
            <div className="flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                className="h-4 w-4"
                fill="green"
              >
                <path d="M0 96C0 60.7 28.7 32 64 32l288 0c35.3 0 64 28.7 64 64l0 32 50.7 0c17 0 33.3 6.7 45.3 18.7L557.3 192c12 12 18.7 28.3 18.7 45.3L576 384c0 35.3-28.7 64-64 64l-3.3 0c-10.4 36.9-44.4 64-84.7 64s-74.2-27.1-84.7-64l-102.6 0c-10.4 36.9-44.4 64-84.7 64s-74.2-27.1-84.7-64L64 448c-35.3 0-64-28.7-64-64L0 96zM512 288l0-50.7-45.3-45.3-50.7 0 0 96 96 0zM192 424a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm232 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80z" />
              </svg>
              <span className="text-gray-400">
                Free Shipping on Orders 500 EGP
              </span>
            </div>

            <div className="flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-4 h-4"
                fill="green"
              >
                <path d="M321.5 68.8C329.1 55.9 342.9 48 357.8 48l2.2 0c22.1 0 40 17.9 40 40s-17.9 40-40 40l-73.3 0 34.8-59.2zm-131 0l34.8 59.2-73.3 0c-22.1 0-40-17.9-40-40s17.9-40 40-40l2.2 0c14.9 0 28.8 7.9 36.3 20.8zm89.6-24.3l-24.1 41-24.1-41C215.7 16.9 186.1 0 154.2 0L152 0c-48.6 0-88 39.4-88 88 0 14.4 3.5 28 9.6 40L32 128c-17.7 0-32 14.3-32 32l0 32c0 17.7 14.3 32 32 32l448 0c17.7 0 32-14.3 32-32l0-32c0-17.7-14.3-32-32-32l-41.6 0c6.1-12 9.6-25.6 9.6-40 0-48.6-39.4-88-88-88l-2.2 0c-31.9 0-61.5 16.9-77.7 44.4zM480 272l-200 0 0 208 136 0c35.3 0 64-28.7 64-64l0-144zm-248 0l-200 0 0 144c0 35.3 28.7 64 64 64l136 0 0-208z" />
              </svg>
              <span className="text-gray-400">New Arrivals Daily</span>
            </div>
          </div>

          {/* right */}
          <div className="flex gap-4">
            <div className="text-gray-400 hover:text-green-500 cursor-pointer">
              <div className="flex gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="h-4 w-4 hover:text-green-500 hover:fill-green-500"
                  fill="gray"
                >
                  <path d="M160.2 25C152.3 6.1 131.7-3.9 112.1 1.4l-5.5 1.5c-64.6 17.6-119.8 80.2-103.7 156.4 37.1 175 174.8 312.7 349.8 349.8 76.3 16.2 138.8-39.1 156.4-103.7l1.5-5.5c5.4-19.7-4.7-40.3-23.5-48.1l-97.3-40.5c-16.5-6.9-35.6-2.1-47 11.8l-38.6 47.2C233.9 335.4 177.3 277 144.8 205.3L189 169.3c13.9-11.3 18.6-30.4 11.8-47L160.2 25z" />
                </svg>
                <span>+1 (800) 123-4567</span>
              </div>
            </div>
            <div className="text-gray-400 hover:text-green-500 cursor-pointer">
              <div className="flex gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="h-4 w-4  hover:fill-green-500"
                  fill="gray"
                >
                  <path d="M48 64c-26.5 0-48 21.5-48 48 0 15.1 7.1 29.3 19.2 38.4l208 156c17.1 12.8 40.5 12.8 57.6 0l208-156c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48L48 64zM0 196L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-188-198.4 148.8c-34.1 25.6-81.1 25.6-115.2 0L0 196z" />
                </svg>
                <span>support@freshcart.com</span>
              </div>
            </div>

            {/* signin and signup */}
            <div className="border-l-gray-300 border-l pl-2.5 flex gap-3">
              {/* sign in */}
              <Link  href='/login' className="cursor-pointer flex gap-2 items-center text-gray-600 hover:text-green-500 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="h-4 w-4"
                  fill="currentColor"
                >
                  <path d="M144 128a80 80 0 1 1 160 0 80 80 0 1 1 -160 0zm208 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0zM48 480c0-70.7 57.3-128 128-128l96 0c70.7 0 128 57.3 128 128l0 8c0 13.3 10.7 24 24 24s24-10.7 24-24l0-8c0-97.2-78.8-176-176-176l-96 0C78.8 304 0 382.8 0 480l0 8c0 13.3 10.7 24 24 24s24-10.7 24-24l0-8z" />
                </svg>
                SIGN IN
              </Link>

              {/* sign up */}
              <Link href='/register' className="cursor-pointer flex gap-2 items-center text-gray-600 hover:text-green-500 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                  className="h-4 w-4"
                  fill="currentColor"
                >
                  <path d="M285.7 304c98.5 0 178.3 79.8 178.3 178.3 0 16.4-13.3 29.7-29.7 29.7L77.7 512C61.3 512 48 498.7 48 482.3 48 383.8 127.8 304 226.3 304l59.4 0zM528 80c13.3 0 24 10.7 24 24l0 48 48 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-48 0 0 48c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-48-48 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0 0-48c0-13.3 10.7-24 24-24zM256 248a120 120 0 1 1 0-240 120 120 0 1 1 0 240z" />
                </svg>
                SIGN UP
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
