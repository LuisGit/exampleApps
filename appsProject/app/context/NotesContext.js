import React, { useReducer } from 'react';

const NotesContext = React.createContext();

const notesReducer = (state, action) => {
  switch (action.type) {
    case 'addNote':
      return [
        ...state,
        { id: state.length + 1, title: `${action.payload} ${state.length}` },
      ];
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

  const [notesList, dispatch] = useReducer(notesReducer, []);

  const addNote = ({ title }) => {
    dispatch({ type: 'addNote', payload: title });
  };

  return (
    <NotesContext.Provider value={{ data: notesList, addNote }}>
      {children}
    </NotesContext.Provider>
  );
};

export default NotesContext;
