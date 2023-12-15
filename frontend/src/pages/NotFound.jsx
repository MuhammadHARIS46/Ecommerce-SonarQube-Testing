import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <main className="h-screen w-full flex flex-col justify-center items-center bg-[#3f9585]">
        <h1 className="text-9xl font-extrabold text-white tracking-widest">404</h1>
        <div className="bg-[#9e0606] px-2 text-sm rounded rotate-12 absolute">
          <span className="text-white">Page Not Found</span>
        </div>
        <button className="mt-5">
          <div className="relative inline-block text-sm font-medium text-[#1309a8] group active:text-orange-500 focus:outline-none focus:ring">
            <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 group-hover:translate-y-0 group-hover:translate-x-0"></span>

            <span className="relative block px-8 py-3 bg-[#032581] border border-current">
              <Link to="/" className="text-white">Go Home</Link>
            </span>
          </div>
        </button>
      </main>
    </div>
  );
};

export default NotFound;
