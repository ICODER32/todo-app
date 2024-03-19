export default async function List() {
  const response = await fetch(
    "https://pleasing-randomly-tarpon.ngrok-free.app/todos",
    {
      cache: "no-store",
    }
  );
  const data = await response.json();
  console.log(data);
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Todo List</h1>
      <ul>
        {data.map((todo: any) => (
          <li
            key={todo.id}
            className="bg-white shadow-md rounded-lg px-6 py-4 mb-4 flex justify-between items-center"
          >
            <div>
              <p className="text-sm font-semibold">ID: {todo.id}</p>
              <p className="text-lg">{todo.title}</p>
              <p className="text-sm">
                {todo.completed ? "Completed" : "Not Completed"}
              </p>
            </div>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
