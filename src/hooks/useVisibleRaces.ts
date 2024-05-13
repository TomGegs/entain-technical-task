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
        setVisibleRaces(visible);
        if (visible.length < 5) {
            setVisibleRaces((oldVisible) => [
                ...oldVisible,
                ...Array(5 - oldVisible.length).fill(null),
            ]);
        }
    }, [sortedRaces]);

    return visibleRaces;
};

export default useVisibleRaces;
