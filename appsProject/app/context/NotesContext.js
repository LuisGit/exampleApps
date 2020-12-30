import React, { useReducer } from 'react';

const addANote = 'addNote';
const deleteANote = 'deleteNote';

const NotesContext = React.createContext();

const notesReducer = (state, action) => {
  switch (action.type) {
    case addANote:
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 9999),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    case deleteANote:
      return state.filter((note) => note.id !== action.payload);
    default:
      return state;
  }
};

export const NotesProvider = ({ children }) => {
  //const [notesList, setNotesList] = useState([]);
  // const addNote = () => {
  //   const noteNumber = notesList.length + 1;
  //   setNotesList([
  //     ...notesList,
  //     { id: notesList.length + noteNumber, title: 'Hey!' + noteNumber },
  //   ]);
  // };

  const [note, dispatch] = useReducer(notesReducer, []);

  const addNote = ({ title, content }, callback) => {
    try {
      // here I can add an API call if needed.
      dispatch({ type: addANote, payload: { title, content } });
      callback();
    } catch (error) {
      console.log('error => ', error);
    }
  };

  const deleteNote = (id) => {
    dispatch({ type: deleteANote, payload: id });
  };

  return (
    <NotesContext.Provider value={{ data: note, addNote, deleteNote }}>
      {children}
    </NotesContext.Provider>
  );
};

export default NotesContext;
