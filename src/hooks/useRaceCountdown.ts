import { useEffect, useState } from 'react';
import { differenceInSeconds } from 'date-fns';

const useRaceCountdown = (raceStartTime: number) => {
    const [countdown, setCountdown] = useState('');
    const [isVisible, setIsVisible] = useState(true);
    const [raceStartingSoonText, setRaceStartingSoonText] =
        useState('text-red-900');

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const raceTime = new Date(raceStartTime * 1000); // seconds to milliseconds
            const difference = differenceInSeconds(raceTime, now);

            // Race not displayed after -60 seconds
            if (difference < -60) {
                setIsVisible(false);
                clearInterval(interval);
                return;
            }

            const minutes = Math.floor(Math.abs(difference) / 60);
            const seconds = Math.abs(difference) % 60;

            // Change text color to red when the countdown is less than 5 minutes
            if (minutes < 5 || (minutes === 5 && seconds === 0)) {
                setRaceStartingSoonText('text-red-900');
            } else {
                setRaceStartingSoonText('text-[#636262]');
            }

            // Countdown display
            //negative sign if the race's start time passes the advertised start time
            const sign = difference < 0 ? '-' : '';
            // Minutes only show in countdown if they are greater than 0
            const formattedMinutes = minutes > 0 ? `${minutes}m` : '';
            // Seconds only show in countdown if minutes are less than 5
            const formattedSeconds = minutes > 5 ? '' : `${seconds}s`;

            setCountdown(`${sign}${formattedMinutes} ${formattedSeconds}`);
        }, 1000);

        return () => clearInterval(interval);
    }, [raceStartTime, isVisible]);

    return { countdown, isVisible, raceStartingSoonText };
};

export default useRaceCountdown;
