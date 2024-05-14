import useRaceCountdown from '../../../hooks/useRaceCountdown';
import useRaceData from '../../../hooks/useRaceData';
import getRaceIcon from '../../../utils/getRaceIcon';
import RaceColumn from '../RaceColumn/RaceColumn';
import loadingIcon from '../../../assets/images/LoadingIcon.svg';

type RaceCardProps = {
    raceCategory: string;
    raceMeeting: string;
    raceNumber: number;
    raceCountdown: number;
    raceIndex: number;
};

const RaceCard = ({
    raceCategory,
    raceMeeting,
    raceNumber,
    raceCountdown,
    raceIndex,
}: RaceCardProps) => {
    const { isLoading } = useRaceData();
    const raceIcon = getRaceIcon(raceCategory);
    const { countdown, textColour } = useRaceCountdown(raceCountdown);

    return (
        <div className="flex w-full flex-col px-2 lg:w-[20%] lg:px-0">
            <div
                key={raceIndex}
                className="flex h-full w-full flex-row items-center justify-between bg-white px-2 pb-2 text-3xl font-bold shadow-sm lg:text-sm"
            >
                {/* Left-side of container */}
                <div className="flex h-full flex-col">
                    {/* Racing Category Icon */}
                    <img
                        loading="lazy"
                        src={raceIcon}
                        className="h-20 w-20 lg:h-10 lg:w-10"
                        alt="Race Type Icon"
                    />
                    {/* Race meeting/location and Race ID#*/}
                    <div className="flex flex-row gap-1 uppercase">
                        <div className="max-w-42 truncate lg:max-w-28">
                            {raceMeeting}
                        </div>
                        <div>R{raceNumber}</div>
                    </div>
                </div>
                {/* Right-side of container */}
                <div className="flex h-full flex-col">
                    {/* Countdown or Loading Icon*/}
                    {isLoading ? (
                        <img
                            loading="lazy"
                            src={loadingIcon}
                            alt="Loading..."
                            className="h-5 w-5 animate-spin"
                        />
                    ) : (
                        <div
                            className={`flex h-full items-center ${textColour}`}
                        >
                            {countdown}
                        </div>
                    )}
                    {/* channel would be here if API supported  */}
                </div>
            </div>
            <RaceColumn />
        </div>
    );
};

export default RaceCard;
