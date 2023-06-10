import React, { Component } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';
import TwoWayBinding from './Components/TwoWayBinding';
import ReactLists from './Components/ReactLists';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/two-way-binding",
    element: <TwoWayBinding />
  },
  {
    path: "/react-lists",
    element: <ReactLists />
  },
]);

class App extends Component {

  render() {
    return (
      <div className="App">
        <RouterProvider router={router} />
      </div>
    )
  }
}

export default App;
