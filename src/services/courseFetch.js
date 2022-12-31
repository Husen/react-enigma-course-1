import {getToken} from "../utils/token";

const {fetch: origFetch} = window;
window.fetch = async (...args) => {
    const response = await origFetch(...args);

    /* work with the cloned response in a separate promise
       chain -- could use the same chain with `await`. */
    response
        .clone()
        .json()
        .then(body => console.log("intercepted response:", body))
        .catch(err => console.error(err))
    ;

    /* the original response can be resolved unmodified: */
    //return response;

    /* or mock the response: */
    return {
        ok: true,
        status: 200,
        json: async () => ({
            userId: 1,
            id: 1,
            title: "Mocked!!",
            completed: false
        })
    };
};

export const getCourses = async (page, setPage, setData) => {
    const token = getToken();
    try {
        const response = await fetch(`/courses?page=${page}`, {
            headers: {'Authorization': `Bearer ${token}`},
        });
        const responseJson = await response.json();
        const pagination = {
            page: responseJson?.page,
            size: responseJson?.size,
            totalPage: responseJson?.totalPage,
            count: responseJson?.count
        }
        setPage(responseJson?.page);
        setData({courses: responseJson?.data, pagination});
    } catch (e) {
        console.log(e)
    }
}

export const getCourseById = async (id, callback) => {
    try {
        const response = await fetch(`/courses/${id}`, {
            method: "GET"
        });
        const responseJson = await response.json();
        const { data: result } = responseJson?.data;
        const courseData = {
            title: result?.title,
            description: result?.description,
            courseTypeId: result?.courseType?.courseTypeId,
            courseType: result?.courseType,
            file: result?.link,
            duration: result?.courseInfo?.duration,
            level: result?.courseInfo?.level
        }
        callback?.(courseData);
    } catch (e) {
        console.log(e)
    }
}

export const addCourse = async (data, callback) => {
    try {
        await fetch("/courses", {
            method: "POST",
            headers: {
                "content-type": "multipart/form-data",
            },
            body: data
        });
        callback?.()
    } catch (e) {
        console.log(e)
    }
}

export const updateCourseById = async (data, callback) => {
    try {
        await fetch(`/courses/${data.courseId}`, {
            method: "PUT",
            body: JSON.stringify(data)
        });
        callback?.();
    } catch (e) {
        console.log(e)
    }
}

export const deleteCourseById = async (id, callback) => {
    try {
        await fetch(`/courses/${id}`, {
            method: "DELETE"
        })
        callback?.()
    } catch (e) {
        console.log(e)
    }
}

export const downloadCourseFile = async (filename) => {
    try {
        const response = await fetch(`/course-files?filename=${filename}`, {
            method: "GET"
        });
        const blob = await response.blob();
        const url = window.URL.createObjectURL(new Blob([blob?.data]))
        const link = document.createElement('a')
        link.href = url
        link.setAttribute('download', filename)
        document.body.appendChild(link)
        link.click()
    } catch (e) {
        console.log(e)
    }
}
