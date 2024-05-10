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
    const raceStart = useRaceCountdown(raceCountdown);
    return (
        <div className="flex w-full flex-col">
            <div
                key={raceIndex}
                className="flex h-full w-full flex-row items-center justify-between bg-white px-2 pb-2 text-sm font-bold shadow-sm"
            >
                {/* leftside */}
                <div className="flex h-full flex-col">
                    {/* icon */}
                    <img
                        src={raceIcon}
                        className="h-10 w-10"
                        alt="Race Type Icon"
                    />
                    {/* race meeting/location and summary ID#*/}
                    <div className="flex flex-row gap-1 uppercase">
                        <div>{raceMeeting}</div>
                        <div>R{raceNumber}</div>
                    </div>
                </div>
                {/* rightside */}
                <div className="flex h-full flex-col">
                    {/* Countdown */}
                    <div className="h-10 place-content-center text-red-900">
                        {raceStart}
                    </div>
                    {/* channel - if API supported  */}
                </div>
            </div>
            <GoRacingColumn />
        </div>
    );
};

export default RaceCard;
