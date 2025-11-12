import { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [notes, setNotes] = useState([]);

  const addNote = () => {
    if (!title || !content) return;

    const newNote = {
      id: Date.now(),
      title: title,
      content: content,
    };
    setNotes([...notes, newNote]);
    setTitle("");
    setContent("");
  };
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Note App</h1>
      <div className="bg-white p-4 rounded shadow-md">
        <input
          className="w-full border rounded-md pb-2 mb-2 "
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Enter title"
        />
        <textarea
          className="w-full border rounded-md pb-2 mb-2"
          placeholder="Enter Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button
          onClick={addNote}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Add Note
        </button>
      </div>
      <div className="flex flex-wrap gap-4 mt-6">
        {notes.map((note) => (
          <div
            key={note.id}
            className="w-50 h-50 bg-white border rounded shadow p-3"
          >
            <h2 className="font-semibold text-lg mb-2 truncate ">
              {note.title}
            </h2>
            <p className="text-sm text-gray-600 overflow-hidden h-35 ">
              {note.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
