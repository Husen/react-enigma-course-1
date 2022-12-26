const typeList = {
    "data": [
        {
            "courseTypeId": "f639b9f5-1235-434e-b1f9-6024c1b88551",
            "typeName": "FRONTEND"
        },
        {
            "courseTypeId": "90510af0-a6e4-4aa6-908f-5a27813412c6",
            "typeName": "BACKEND"
        }
    ],
    "count": 2,
    "totalPage": 1,
    "page": 1,
    "size": 5
}

const {count, totalPage, page, size} = typeList;
const initialState = {
    typeList: [...typeList.data],
    pagination: {
        count, totalPage, page, size
    }
}

const courseTypeReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return { ...initialState }
    }
}

export default courseTypeReducer;
