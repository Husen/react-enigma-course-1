import React from "react";

import {NavBar} from "./components";
import {
    AddCourse,
    CourseList,
    TypeList,
    EditCourse,
    PageNotFound
} from "./pages";
import constants from "./constants";
import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom";

const routeConfig = [
    { path: constants.ROUTES.COURSE_LIST, component: CourseList },
    { path: constants.ROUTES.COURSE_TYPE, component: TypeList },
    { path: constants.ROUTES.ADD_COURSE, component: AddCourse },
    { path: constants.ROUTES.EDIT_COURSE, component: EditCourse },
]

function App() {
  return (
      <BrowserRouter>
          <NavBar />
          <Switch>
              {routeConfig.map((route, index) => (
                  <Route
                      key={index}
                      exact
                      {...route}
                  />
              ))}
              <Route path="*" component={PageNotFound} />
          </Switch>
      </BrowserRouter>
  );
}

export default App;
