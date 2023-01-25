import {useState} from 'react';

const useFetchMutation = (mutation, onSuccess) => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    const fetchMutation = async (data) => {
        try {
            setLoading(true);
            const { data: response } = await mutation(data);
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

export default useFetchMutation;
