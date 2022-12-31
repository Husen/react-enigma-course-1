import {useState} from 'react';

const useFetchQuery = (mutation, onSuccess) => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    const fetchMutation = async (formData) => {
        try {
            setLoading(true);
            const { data: response } = await mutation(formData);
            setData(response);
            onSuccess?.(response);
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false);
        }

    };

    return {
        data,
        loading,
        fetchMutation
    };
};

export default useFetchQuery;
