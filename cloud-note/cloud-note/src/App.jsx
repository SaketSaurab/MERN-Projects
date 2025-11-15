import { useState, useEffect } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });
  const [editId, setEditId] = useState(null);
  const [selectedNote, setSelectedNote] = useState(null);

  const addNote = () => {
    if (!title || !content) return;

    {
      /* updating the note */
    }
    if (editId !== null) {
      const updatedNotes = notes.map((note) =>
        note.id === editId ? { ...note, title: title, content: content } : note,
      );
      setNotes(updatedNotes);
      setEditId(null);
    } else {
      const newNote = {
        id: Date.now(),
        title: title,
        content: content,
      };
      setNotes([...notes, newNote]);
    }

    setTitle("");
    setContent("");
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const startEditing = (note) => {
    setTitle(note.title);
    setContent(note.content);
    setEditId(note.id);
  };

  {
    /* new state for pop-up */
  }
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 ">Note App</h1>
      <div className="bg-white p-4 rounded shadow-md">
        <input
          className="w-full border rounded-md p-2 mb-2 "
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Enter title"
        />
        <textarea
          className="w-full border rounded-md p-2 mb-2"
          placeholder="Enter Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button
          onClick={addNote}
          className={` text-white py-2 px-4 rounded  ${editId !== null ? "bg-green-500 hover:bg-green-600" : "bg-blue-500 hover:bg-blue-600"}`}
        >
          {editId !== null ? "Update Note" : " Add Note"}
        </button>
      </div>
      <div className="flex flex-wrap gap-4 mt-6 ">
        {notes.map((note) => (
          <div
            key={note.id}
            onClick={() => setSelectedNote(note)}
            className="w-48 h-48 bg-white border rounded-xl shadow p-3 hover:shadow-xl transition cursor-pointer"
          >
            <h2 className="font-semibold text-lg mb-2 truncate ">
              {note.title}
            </h2>
            <p className="text-sm text-gray-600 overflow-hidden h-24 ">
              {note.content}
            </p>
            <button
              onClick={(e) => {
                e.stopPropagation();
                deleteNote(note.id);
              }}
              className="bg-red-500 text-sm mt-2 p-1 rounded text-white hover:bg-red-600"
            >
              Delete
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                startEditing(note);
              }}
              className="text-sm bg-green-400 p-1 hover:bg-green-600 text-white ml-2 rounded"
            >
              Edit
            </button>
          </div>
        ))}
      </div>{" "}
      {selectedNote && (
        <div className="fixed inset-0 bg-gray-500/30 backdrop-blur flex justify-center items-center ">
          <div className="bg-white p-6 rounded-lg min-w-96 max-w-[70vw] max-h-[70vh] overflow-y-auto">
            <h2 className="text-xl font-bold mb-2">{selectedNote.title}</h2>
            <p className="text-gray-700 whitespace-pre-wrap ">
              {selectedNote.content}
            </p>
            <button
              className="mt-4 bg-blue-500 hover:bg-blue-600 rounded text-white px-4 py-2"
              onClick={() => setSelectedNote(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
