import { differenceInSeconds } from 'date-fns';
import { useQuery } from 'react-query';
import { fetchRacesData } from '../api/fetchApi';
import { useEffect, useState } from 'react';
import { raceSummaryData } from '../models/raceSummarySchema';

const useRacesData = () => {
    const { data, isLoading, error } = useQuery('races', fetchRacesData);
    const [sortedRaces, setSortedRaces] = useState<raceSummaryData[]>([]);

    useEffect(() => {
        if (data && data.race_summaries) {
            const now = new Date();

            const sorted = Object.values(data.race_summaries).sort((a, b) => {
                // Difference in seconds from now to each race's advertised start time
                const diffA = differenceInSeconds(
                    new Date(a.advertised_start.seconds * 1000),
                    now
                );
                const diffB = differenceInSeconds(
                    new Date(b.advertised_start.seconds * 1000),
                    now
                );
                return diffA - diffB; // sort by difference (negative numbers first)
            });

            setSortedRaces(sorted);
        }
    }, [data]);

    return { sortedRaces, isLoading, error };
};

export default useRacesData;
