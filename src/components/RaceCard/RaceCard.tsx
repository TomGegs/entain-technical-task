import useRaceCountdown from '../../hooks/useRaceCountdown';
import useRaceData from '../../hooks/useRaceData';
import getRaceIcon from '../../utils/getRaceIcon';
import GoRacingColumn from '../RaceColumn/GoRacingColumn';
import loadingIcon from '../../assets/images/LoadingIcon.svg';

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
        <div className="flex w-full flex-col lg:w-[20%]">
            <div
                key={raceIndex}
                className="flex h-full w-full flex-row items-center justify-between bg-white px-2 pb-2 text-sm font-bold shadow-sm"
            >
                {/* Left-side of container */}
                <div className="flex h-full flex-col">
                    {/* Racing Category Icon */}
                    <img
                        src={raceIcon}
                        className="h-10 w-10"
                        alt="Race Type Icon"
                    />
                    {/* Race meeting/location and Race ID#*/}
                    <div className="flex flex-row gap-1 uppercase">
                        <div className="max-w-32 truncate lg:max-w-28">
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
            <GoRacingColumn />
        </div>
    );
};

export default RaceCard;
