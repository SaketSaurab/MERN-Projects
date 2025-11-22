import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Trash = () => {
  const [trash, setTrash] = useState([]);

  useEffect(() => {
    const savedTrash = localStorage.getItem("trash");
    setTrash(savedTrash ? JSON.parse(savedTrash) : []);
  }, []);

  //  Restore Note
  const restoreNote = (id) => {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    const noteToRestore = trash.find((note) => note.id === id);

    if (!noteToRestore) return;

    // add back to notes
    const updatedNotes = [...savedNotes, noteToRestore];
    localStorage.setItem("notes", JSON.stringify(updatedNotes));

    // remove from trash
    const updatedTrash = trash.filter((note) => note.id !== id);
    setTrash(updatedTrash);
    localStorage.setItem("trash", JSON.stringify(updatedTrash));
  };

  // Delete permanently
  const deleteForever = (id) => {
    const updatedTrash = trash.filter((note) => note.id !== id);
    setTrash(updatedTrash);
    localStorage.setItem("trash", JSON.stringify(updatedTrash));
  };
  const Navigate = useNavigate();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Trash</h1>
      <button
        className="bg-gray-700 px-4 rounded text-white py-2"
        onClick={() => Navigate("/")}
      >
        Go to Notes
      </button>

      {trash.length === 0 ? (
        <p className="text-gray-500">No deleted Notes</p>
      ) : (
        <div className="grid gap-4">
          {trash.map((note) => (
            <div key={note.id} className="border p-4 rounded shadow">
              <h2 className="text-lg font-bold">{note.title}</h2>

              <p className="mt-2 line-clamp-3">{note.content}</p>

              <p className="text-sm text-gray-500 mt-2">{note.createdAt}</p>

              <div className="mt-3">
                <button
                  onClick={() => restoreNote(note.id)}
                  className="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded mr-2"
                >
                  Restore
                </button>

                <button
                  onClick={() => deleteForever(note.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded"
                >
                  Delete Permanently
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Trash;
