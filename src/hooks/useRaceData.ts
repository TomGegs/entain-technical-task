// Simplifies useRaceData to focus only on fetching and sorting by time and ID.
import { useEffect, useState } from 'react';
import { differenceInSeconds } from 'date-fns';
import { useQuery } from 'react-query';
import { fetchRacesData } from '../api/fetchApi';
import { raceSummaryData } from '../models/raceSummarySchema';

const useRaceData = () => {
    const { data, isLoading, error } = useQuery('races', fetchRacesData, {
        refetchInterval: 5000, // Refetch every 5 seconds
    });
    const [sortedRaces, setSortedRaces] = useState<raceSummaryData[]>([]);

    useEffect(() => {
        if (data && data.race_summaries) {
            const now = new Date();
            const sorted = Object.values(data.race_summaries).sort((a, b) => {
                const timeA = new Date(a.advertised_start.seconds * 1000);
                const timeB = new Date(b.advertised_start.seconds * 1000);
                const timeDiff =
                    differenceInSeconds(timeA, now) -
                    differenceInSeconds(timeB, now);
                return timeDiff === 0
                    ? a.race_id.localeCompare(b.race_id)
                    : timeDiff;
            });
            setSortedRaces(sorted);
        }
    }, [data]);

    return { sortedRaces, isLoading, error };
};

export default useRaceData;
