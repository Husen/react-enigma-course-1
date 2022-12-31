import api from "../config/api";

export const getCourses = (params) => api.get("/courses", {params: { page: params }});

export const getCourseById = (params) => api.get(`/courses/${params}`);

export const addCourse = (data) => {
    return api.post("/courses", data, {
        headers: {
            "Content-type": "multipart/form-data",
        }
    });
}

export const updateCourseById = (data) => {
    return api.put(`/courses/${data.courseId}`, data);
}

export const deleteCourseById = (id) => api.delete(`/courses/${id}`);

export const downloadCourseFile = async (filename) => {
    try {
        const result = api.get("/course-files", {
            responseType: "blob",
            params: { filename }
        })

        const url = window.URL.createObjectURL(new Blob([result?.data]))
        const link = document.createElement('a')
        link.href = url
        link.setAttribute('download', filename)
        document.body.appendChild(link)
        link.click()
    } catch (e) {
        console.log(e)
    }
}
