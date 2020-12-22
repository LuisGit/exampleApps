import React, { useReducer } from 'react';

const addANote = 'addNote';
const deleteANote = 'deleteNote';

const NotesContext = React.createContext();

const notesReducer = (state, action) => {
  switch (action.type) {
    case addANote:
      const index = state.length + 1;
      return [
        ...state,
        {
          id: index,
          title: `${action.title} ${index}`,
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

  const addNote = ({ title }) => {
    dispatch({ type: addANote, title });
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
