import React, { useState } from "react";
import NotesPage from "../components/notes/NotesPage";

const Home = () => {
  const [mode, setMode] = useState(null);
  if (!mode) {
    return (
      <div className="flex flex-col items-center justify-center h-screen gap-6">
        <h1 className=" text-3xl font-bold">Choose</h1>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded w-48 hover:bg-blue-600"
          onClick={() => setMode("offline")}
        >
          Continue Offline
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 w-48 rounded hover:bg-green-600"
          onClick={() => setMode("online")}
        >
          Use Cloud (Login)
        </button>
      </div>
    );
  }
  if (mode === "online") {
    return <h1 className="text-center mt-10">Login page comming</h1>;
  }
  return <NotesPage />;
};

export default Home;
