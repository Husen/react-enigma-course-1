import React from "react";
import {Provider} from "react-redux";

import {NavBar} from "./components";
import {
    AddCourse, CourseList, TypeList, EditCourse
} from "./pages";
import store from "./store";
import constants from "./constants";

function App() {
    const [nav, setNav] = React.useState("/");
    const [params, setParams] = React.useState(null);
    let Component;

    const onNavigate = (route, params = null) => {
        setNav(route);
        setParams(params);
    }

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
        case constants.ROUTES.EDIT_COURSE:
            Component = EditCourse
            break;
        default:
            Component = CourseList;
            break;
    }

  return (
      <Provider store={store}>
          <NavBar menu={menu} />
          <Component onNavigate={onNavigate} params={params} />
      </Provider>
  );
}

export default App;
