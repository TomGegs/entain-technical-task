import { differenceInSeconds } from 'date-fns';
import { useQuery, useQueryClient } from 'react-query';
import { fetchRacesData } from '../api/fetchApi';
import { useEffect, useState } from 'react';
import { raceSummaryData } from '../models/raceSummarySchema';

const useRaceData = () => {
    const queryClient = useQueryClient();
    const { data, isLoading, error } = useQuery('races', fetchRacesData, {
        refetchInterval: 5000, //fetch every 5 seconds
    });
    const [sortedRaces, setSortedRaces] = useState<raceSummaryData[]>([]);

    useEffect(() => {
        if (data && data.race_summaries) {
            const now = new Date();

            //Sort in ascending order starting at -60 seconds
            const sorted = Object.values(data.race_summaries)
                .sort((a, b) => {
                    const diffA = differenceInSeconds(
                        new Date(a.advertised_start.seconds * 1000),
                        now
                    );
                    const diffB = differenceInSeconds(
                        new Date(b.advertised_start.seconds * 1000),
                        now
                    );

                    //Sort in ascending order by race_id if advertised race time is the same
                    if (diffA === diffB) {
                        return parseInt(a.race_id) - parseInt(b.race_id);
                    }

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

export default useRaceData;
