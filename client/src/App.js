import React from 'react'
import 'materialize-css'
import {BrowserRouter} from 'react-router-dom'
import { useRoutes } from './routes'

function App() {
  const routes = useRoutes()
  return (
    <BrowserRouter>
      <div className="container phonewords">
          {routes}
      </div>
    </BrowserRouter>
  );
}

export default App;
