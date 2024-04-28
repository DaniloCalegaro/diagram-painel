"use client";

import { UserButton } from "@clerk/clerk-react";

export const Navibar = () => {
  return (
    <div className="flex items-center gap-x-4 p-5 bg-green-100">
      <div className="hidden lg:flex lg:flex-1 bg-orange-200">Search</div>
      <UserButton />
    </div>
  );
};
