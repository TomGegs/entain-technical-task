import { useEffect, useState } from 'react';
import { differenceInSeconds } from 'date-fns';
import { raceSummaryData } from '../models/raceSummarySchema';

const useVisibleRaces = (sortedRaces: raceSummaryData[]) => {
    const [visibleRaces, setVisibleRaces] = useState<raceSummaryData[]>([]);

    useEffect(() => {
        const now = new Date();
        const visible = sortedRaces.filter(
            (race) =>
                differenceInSeconds(
                    new Date(race.advertised_start.seconds * 1000),
                    now
                ) > -60
        );
        setVisibleRaces(
            visible.length >= 5
                ? visible.slice(0, 5)
                : visible.concat(sortedRaces.slice(visible.length, 5))
        );
    }, [sortedRaces]);

    return visibleRaces;
};

export default useVisibleRaces;
