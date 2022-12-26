import constants from "../../constants";

const courseList = {
    "data": [
        {
            "courseId": "ec825c50-a5b8-47ff-8eca-356c1cef5aa1",
            "title": "Angular Advanced 1",
            "description": "Library for Frontend from Google Inc",
            "file": "D:\\LEARNING\\java\\restapi-demo\\assets\\implementasi ERD.png",
            "duration": "7 Hari",
            "level": "BASIC",
            "courseTypeId": "f639b9f5-1235-434e-b1f9-6024c1b88551",
        },
        {
            "courseId": "ec825c50-a5b8-47ff-8eca-356c1cef5aa2",
            "title": "Angular Advanced 2",
            "description": "Library for Frontend from Google Inc",
            "file": "D:\\LEARNING\\java\\restapi-demo\\assets\\implementasi ERD.png",
            "duration": "7 Hari",
            "level": "BASIC",
            "courseTypeId": "f639b9f5-1235-434e-b1f9-6024c1b88551",
        },
        {
            "courseId": "ec825c50-a5b8-47ff-8eca-356c1cef5aa3",
            "title": "Angular Advanced 3",
            "description": "Library for Frontend from Google Inc",
            "file": "D:\\LEARNING\\java\\restapi-demo\\assets\\implementasi ERD.png",
            "duration": "7 Hari",
            "level": "BASIC",
            "courseTypeId": "f639b9f5-1235-434e-b1f9-6024c1b88551",
        },
        {
            "courseId": "ec825c50-a5b8-47ff-8eca-356c1cef5aa4",
            "title": "Angular Advanced 4",
            "description": "Library for Frontend from Google Inc",
            "file": "D:\\LEARNING\\java\\restapi-demo\\assets\\implementasi ERD.png",
            "duration": "7 Hari",
            "level": "BASIC",
            "courseTypeId": "f639b9f5-1235-434e-b1f9-6024c1b88551",
        },
        {
            "courseId": "ec825c50-a5b8-47ff-8eca-356c1cef5aa5",
            "title": "Angular Advanced 5",
            "description": "Library for Frontend from Google Inc",
            "file": "D:\\LEARNING\\java\\restapi-demo\\assets\\implementasi ERD.png",
            "duration": "7 Hari",
            "level": "BASIC",
            "courseTypeId": "f639b9f5-1235-434e-b1f9-6024c1b88551",
        },
    ],
    "count": 7,
    "totalPage": 2,
    "page": 1,
    "size": 5
}

const {count, totalPage, page, size} = courseList;
const initialState = {
    courseList: [
        ...courseList.data
    ],
    pagination: {
        count, totalPage, page, size
    }
}

const courseReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.ACTION.ADD_COURSE:
            const newCourseList = [...initialState.courseList]
            newCourseList.push(action.payload)
            return {
                ...state,
                courseList: newCourseList
            }
        default: return {
            ...initialState
        }
    }
}

export default courseReducer;
