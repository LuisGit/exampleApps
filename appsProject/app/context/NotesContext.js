import React, { useReducer } from 'react';

const addANote = 'addNote';
const deleteANote = 'deleteNote';
const editNote = 'editNote';

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
    case editNote:
      const newArray = state.map((note) => {
        return note.id !== action.payload.id ? note : action.payload;
      });
      return [...newArray];
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

  const updateNote = (item, callback) => {
    console.log(`item is ${JSON.stringify(item)}`);
    try {
      dispatch({ type: editNote, payload: item });
      callback();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <NotesContext.Provider
      value={{ data: note, addNote, deleteNote, updateNote }}>
      {children}
    </NotesContext.Provider>
  );
};

export default NotesContext;
