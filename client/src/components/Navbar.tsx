import React from "react";

const SimpleNavbar = () => {
  return (
    <nav className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-xl font-semibold">TodoList</div>
      </div>
    </nav>
  );
};

export default SimpleNavbar;
