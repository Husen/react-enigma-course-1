import { useEffect, useState} from 'react';

const useFetchQuery = (query, params) => {
    const [data, setData] = useState({});
    const [fetching, setFetching] = useState(true);

    const refetch = () => {
        setFetching(true);
    }

    useEffect(() => {
        refetch();
    }, [params]);

    useEffect(() => {
        const fetchQuery = async () => {
            try {
                setFetching(true);
                const { data: response } = await query(params);
                setData(response);
            } catch (error) {
                console.error(error)
            } finally {
                setFetching(false);
            }

        };

        if (fetching) fetchQuery();
    }, [fetching]);

    return {
        data,
        loading: fetching,
        refetch
    };
};

export default useFetchQuery;
