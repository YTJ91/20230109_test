import { createContext, useContext, useReducer } from "react";

export const NumContext = createContext(0);
export const StrContext = createContext("기본값");
export const TodoStateContext = createContext(null);
export const TodoDispatchContext = createContext(null);

const initialState = [
  { id: 1, text: "사과", done: true },
  { id: 2, text: "대파", done: false },
  { id: 3, text: "소고기 국거리 300g", done: false },
];

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return state.concat({ id: action.id, text: action.text, done: false });
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.id);
    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    default:
      return state;
  }
}

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

export function useTodoState() {
  const context = useContext(TodoStateContext);

  return context;
}

export function useTodoDispatch() {
  const context = useContext(TodoDispatchContext);

  return context;
}
