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
          id: state.length + 1,
          title: `${action.payload} ${state.length + 1}`,
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
    dispatch({ type: addANote, payload: title });
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
