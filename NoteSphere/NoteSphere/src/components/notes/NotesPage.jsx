import React, { useEffect, useState } from "react";

const NotesPage = () => {
  // move to trash state
  const [trash, setTrash] = useState(() => {
    const savedTrash = localStorage.getItem("trash");
    return savedTrash ? JSON.parse(savedTrash) : [];
  });

  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editId, setEditId] = useState(null);
  const [selectedNote, setSelectedNote] = useState(null);
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
    localStorage.setItem("trash", JSON.stringify(trash));
  }, [notes]);
  const addNote = () => {
    if (!title || !content) {
      return;
    }
    if (editId) {
      const updatedNotes = notes.map((note) => {
        return note.id === editId ? { ...note, title, content } : note;
      });
      setNotes(updatedNotes);
      setEditId(null);
      setTitle("");
      setContent("");
    } else {
      const newNote = {
        id: Date.now(),
        title: title,
        content: content,
        createdAt: new Date().toLocaleString(),
      };
      setNotes([...notes, newNote]);
      setTitle("");
      setContent("");
    }
  };
  // deltet logic
  const deleteNote = (id) => {
    const noteToDelete = notes.find((note) => note.id === id);
    setTrash([...trash, noteToDelete]);
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };
  const startEditing = (note) => {
    setTitle(note.title);
    setContent(note.content);
    setEditId(note.id);
  };
  return (
    <div className="p-6  ">
      <h1 className="text-2xl font-bold mb-2 rounded">My Notes</h1>
      {/* inputarea */}
      <input
        className="border p-2 w-full mb-2 rounded"
        type="text"
        placeholder="Enter  Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="border p-2 w-full mb-2 rounded h-32"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Enter Content"
      />
      <button
        className={` px-4 py-2 text-white rounded ${editId ? "bg-green-500 hover:bg-green-500 " : "bg-blue-500 hover:bg-blue-600"} `}
        onClick={addNote}
      >
        {editId ? "Update Note" : "Add Note"}
      </button>
      {/* output area */}
      <div className="mt-6 grid gap-4 grid-cols-[repeat(auto-fill,minmax(320px,4fr))]">
        {notes.map((note) => (
          <div
            className="border p-4 rounded shadow  cursor-pointer flex flex-col h-48"
            key={note.id}
            onClick={() => setSelectedNote(note)}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold truncate w-2/3">
                {note.title}
              </h2>

              <h2 className="text-xs text-gray-500 whitespace-nowrap">
                {note.createdAt}
              </h2>
            </div>{" "}
            <p className="mt-4 overflow-hidden line-clamp-3 ">{note.content}</p>
            <div className="mt-auto">
              <button
                className="bg-green-500 hover:bg-green-600 px-2 py-1 text-white rounded mr-2"
                onClick={(e) => {
                  e.stopPropagation();
                  startEditing(note);
                }}
              >
                Edit
              </button>

              <button
                className="bg-red-500 px-2 py-1 text-white hover:bg-red-600  rounded"
                onClick={(e) => {
                  e.stopPropagation();
                  deleteNote(note.id);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      {selectedNote && (
        <div
          className="fixed inset-0 bg-black/40 flex justify-center items-center"
          onClick={() => setSelectedNote(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white p-6 rounded-lg w-[90%] max-h-[80vh] overflow-scroll max-w-lg relative"
          >
            <button
              onClick={() => setSelectedNote(null)}
              className="absolute top-2 right-2 cursor-pointer  bg-red-500 text-white  px-3 py-2 rounded"
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold mb-1">{selectedNote.title}</h2>
            <p className="text-xs mb-2  text-gray-500">
              {selectedNote.createdAt}
            </p>
            <p className="whitespace-pre-wrap">{selectedNote.content}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotesPage;
