"use client";

import React, { useState } from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";



const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="bg-babyblue z-50 relative w-full">
      <header className="relative">
        <MaxWidthWrapper>
          <div className="border-b border-gray-300">
            <div className="flex h-16 items-center">
              {/* Logo */}


              {/* Nav items */}


              {/* Sign in  */}
              
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
};

export default Navbar;
