// src/components/LoadingScreen.js
import React from "react";

export default function LoadingScreen() {
  return (
    <div className="bg-lightBeige  bg-opacity-45 flex items-center justify-center z-50">
      <div className="flex flex-col items-center mt-32 ">
        <div className="w-16 h-16 border-4 border-t-4 border-black border-opacity-50 rounded-full animate-spin-smooth"></div>
      </div>
    </div>
  );
}
