import { useReducer } from "react";
import { RouterProvider } from "react-router-dom";
import {router} from "./routes";
import { initialState, reducer } from './hooks/useAppContext';
import { AppContext } from './hooks/useContext';
import './animation.css';
import './icon.css';
import './App.css';

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
    <AppContext.Provider value={{state, dispatch}} >
      <RouterProvider router={router} />
    </AppContext.Provider>
  </div>
  )
};

export default App;
