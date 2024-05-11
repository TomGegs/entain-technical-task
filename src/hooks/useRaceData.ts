import { differenceInSeconds } from 'date-fns';
import { useQuery, useQueryClient } from 'react-query';
import { fetchRacesData } from '../api/fetchApi';
import { useEffect, useState } from 'react';
import { raceSummaryData } from '../models/raceSummarySchema';

const useRacesData = () => {
    const queryClient = useQueryClient();
    const { data, isLoading, error } = useQuery('races', fetchRacesData, {
        refetchInterval: 10000, //fetch every 10 seconds
    });
    const [sortedRaces, setSortedRaces] = useState<raceSummaryData[]>([]);

    useEffect(() => {
        if (data && data.race_summaries) {
            const now = new Date();

            const sorted = Object.values(data.race_summaries)
                //Sort in ascending order starting at -60 seconds
                .sort((a, b) => {
                    const diffA = differenceInSeconds(
                        new Date(a.advertised_start.seconds * 1000),
                        now
                    );
                    const diffB = differenceInSeconds(
                        new Date(b.advertised_start.seconds * 1000),
                        now
                    );
                    return diffA - diffB;
                })
                //filter out races that have passed negative 60 seconds
                .filter((race) => {
                    const raceTime = new Date(
                        race.advertised_start.seconds * 1000
                    );
                    const timeDiff = differenceInSeconds(raceTime, now);
                    return timeDiff > -60;
                });

            setSortedRaces(sorted);
        }
    }, [data, queryClient]);

    return { sortedRaces, isLoading, error };
};

export default useRacesData;
