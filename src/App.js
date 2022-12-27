import React from "react";
import {Provider} from "react-redux";

import {NavBar} from "./components";
import AddCourse from "./pages/AddCourse";
import CourseList from "./pages/CourseList";
import TypeList from "./pages/TypeList";
import EditCourse from "./pages/EditCourse";
import store from "./store";
import constants from "./constants";

function App() {
    const [nav, setNav] = React.useState(constants.ROUTES.COURSE_LIST);
    const [params, setParams] = React.useState(null);

    const onNavigate = (route, params = null) => {
        setNav(route);
        setParams(params);
    }

    let Component;

    const menu = [
        { name: "Course List", onNavigate: () => setNav(constants.ROUTES.COURSE_LIST) },
        { name: "Course Type", onNavigate: () => setNav(constants.ROUTES.COURSE_TYPE) },
    ]

    switch (nav) {
        case constants.ROUTES.COURSE_LIST:
            Component = CourseList
            break;
        case constants.ROUTES.ADD_COURSE:
            Component = AddCourse
            break;
        case constants.ROUTES.COURSE_TYPE:
            Component = TypeList
            break;
        case constants.ROUTES.EDIT_COURSE:
            Component = EditCourse
            break;
        default:
            Component = CourseList
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
