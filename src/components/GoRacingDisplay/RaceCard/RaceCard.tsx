import useRaceCountdown from '../../../hooks/useRaceCountdown';
import getRaceIcon from '../../../utils/getRaceIcon';
import GoRacingColumn from '../GoRacingColumn';

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
    const raceIcon = getRaceIcon(raceCategory);
    const { countdown, textColour } = useRaceCountdown(raceCountdown);

    return (
        <div className="flex w-[20%] flex-col">
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
                        <div className="max-w-28 truncate">{raceMeeting}</div>
                        <div>R{raceNumber}</div>
                    </div>
                </div>
                {/* Right-side of container */}
                <div className="flex h-full flex-col">
                    {/* Countdown */}
                    <div className={`flex h-full items-center ${textColour}`}>
                        {countdown}
                    </div>
                    {/* channel would be here if API supported  */}
                </div>
            </div>
            <GoRacingColumn />
        </div>
    );
};

export default RaceCard;
