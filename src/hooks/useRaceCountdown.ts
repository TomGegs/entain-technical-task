import { useEffect, useState } from 'react';
import { differenceInSeconds } from 'date-fns';

const useRaceCountdown = (raceStartTime: number) => {
    const [countdown, setCountdown] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const raceTime = new Date(raceStartTime * 1000); // milliseconds
            const difference = differenceInSeconds(raceTime, now);

            const minutes = Math.abs(Math.floor((difference % 3600) / 60));
            const seconds = Math.abs(difference % 60);

            //negative sign if the race's start time passes the advertised start time
            const sign = difference < 0 ? '-' : '';
            setCountdown(`${sign} ${minutes}m ${seconds}s`);
        }, 1000);

        return () => clearInterval(interval);
    }, [raceStartTime]);

    return countdown;
};

export default useRaceCountdown;
