import React from "react";
import {renderRoutes} from "react-router-config";

import './App.scss'


const App = ({route}) => {
  return     <div>{renderRoutes(route.routes)}</div>
};



export default App;
