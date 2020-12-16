import createDataContext from './createDataContext';

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

const addNote = (dispatch) => {
  return () => {
    dispatch({ type: 'addNote', payload: 'title' });
  };
};

export const { Context, Provider } = createDataContext(
  notesReducer,
  { addNote },
  [],
);
