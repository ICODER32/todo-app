"use client";

import { useState } from "react";

export default function InputComponent() {
  const [todo, setTodo] = useState("");

  const addTodo = async () => {
    const response = await fetch(
      "https://pleasing-randomly-tarpon.ngrok-free.app/add",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: todo }),
      }
    );
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="w-[400px] mt-10">
      <div className="mb-6">
        <input
          type="text"
          placeholder="Add a new todo..."
          className="shadow-md rounded-lg py-2 px-4 block w-full mb-2 border-none"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full focus:outline-none focus:shadow-outline"
          onClick={addTodo}
        >
          Add Todo
        </button>
      </div>
    </div>
  );
}
