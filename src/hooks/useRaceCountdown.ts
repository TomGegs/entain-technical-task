import { useEffect, useState } from 'react';
import { differenceInSeconds } from 'date-fns';

const useRaceCountdown = (raceStartTime: number) => {
    const [countdown, setCountdown] = useState('');
    const [textColour, setTextColour] = useState('text-[#636262]');

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const raceTime = new Date(raceStartTime * 1000); // Convert to milliseconds
            const difference = differenceInSeconds(raceTime, now);
            const minutes = Math.floor(Math.abs(difference) / 60);
            const seconds = Math.abs(difference) % 60;

            // Set text colour to red if less than 5 minutes remaining
            if (minutes <= 5) {
                setTextColour('text-red-500');
            } else {
                setTextColour('text-[#636262]');
            }

            // Format countdown for negative time, removing minutes if under 1 minute and seconds if over 5 minutes
            const sign = difference < 0 ? '-' : '';
            const formattedMinutes = minutes > 0 ? `${minutes}m ` : '';
            const formattedSeconds = minutes > 5 ? '' : `${seconds}s`;

            setCountdown(`${sign}${formattedMinutes}${formattedSeconds}`);
        }, 1000);

        return () => clearInterval(interval);
    }, [raceStartTime]);

    return { countdown, textColour };
};

export default useRaceCountdown;
