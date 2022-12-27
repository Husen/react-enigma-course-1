import React from "react";
import {Provider} from "react-redux";

import {NavBar} from "./components";
import {
    AddCourse, CourseList, TypeList
} from "./pages";
import store from "./store";
import constants from "./constants";

function App() {
    const [nav, setNav] = React.useState("/");
    let Component;
    let props = {};

    const menu = [
        { name: "Course List", onNavigate: () => setNav(constants.ROUTES.COURSE_LIST) },
        { name: "Course Type", onNavigate: () => setNav(constants.ROUTES.COURSE_TYPE) },
    ]

    switch (nav) {
        case constants.ROUTES.COURSE_LIST:
            Component = CourseList;
            break;
        case constants.ROUTES.ADD_COURSE:
            Component = AddCourse;
            break;
        case constants.ROUTES.COURSE_TYPE:
            Component = TypeList;
            break;
        default:
            Component = CourseList;
            break;
    }

  return (
      <Provider store={store}>
          <NavBar menu={menu} />
          <Component onNavigate={setNav} />
      </Provider>
  );
}

export default App;
