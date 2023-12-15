import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <main class="h-screen w-full flex flex-col justify-center items-center bg-[#3f9585]">
        <h1 class="text-9xl font-extrabold text-white tracking-widest">404</h1>
        <div class="bg-[#9e0606] px-2 text-sm rounded rotate-12 absolute">
          <span class="text-white">Page Not Found</span>
        </div>
        <button class="mt-5">
          <a class="relative inline-block text-sm font-medium text-[#1309a8] group active:text-orange-500 focus:outline-none focus:ring">
            <span class="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 group-hover:translate-y-0 group-hover:translate-x-0"></span>

            <span class="relative block px-8 py-3 bg-[#032581] border border-current">
              <Link to="/" class="text-white">Go Home</Link>
            </span>
          </a>
        </button>
      </main>
    </div>
  );
};

export default NotFound;
