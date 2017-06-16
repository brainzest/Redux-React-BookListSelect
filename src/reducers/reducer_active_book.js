
//State argument is not application state
//only the state this reducer is responsible for
export default function (state, action) {
  // body...
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload;

    default: state=null;

  }
  return state;

};
