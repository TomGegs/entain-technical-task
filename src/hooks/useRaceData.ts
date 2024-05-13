import { useMemo } from 'react';
import { differenceInSeconds } from 'date-fns';
import { useQuery } from 'react-query';
import { fetchRacesData } from '../api/fetchApi';

const useRaceData = () => {
    const { data, isLoading, error } = useQuery('races', fetchRacesData, {
        refetchInterval: 5000, // Refetch every 5 seconds
    });

    const now = useMemo(() => new Date(), []);

    const sortedRaces = useMemo(() => {
        if (!data || !data.race_summaries) return [];

        return Object.values(data.race_summaries).sort((a, b) => {
            const timeA = new Date(a.advertised_start.seconds * 1000);
            const timeB = new Date(b.advertised_start.seconds * 1000);
            const timeDiff =
                differenceInSeconds(timeA, now) -
                differenceInSeconds(timeB, now);
            return timeDiff === 0
                ? a.race_id.localeCompare(b.race_id)
                : timeDiff;
        });
    }, [data, now]);

    return { sortedRaces, isLoading, error };
};

export default useRaceData;
