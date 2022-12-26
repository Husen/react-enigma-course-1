import constants from "../../constants";

export const addCourse = (course) => ({
    type: constants.ACTION.ADD_COURSE,
    payload: {
        courseId: Math.random().toString(36).substring(2,7),
        title: course.title,
        description: course.description,
        file: course.courseFile,
        duration: course.duration,
        level: course.level,
        courseTypeId: course.typeId,
    }
})
