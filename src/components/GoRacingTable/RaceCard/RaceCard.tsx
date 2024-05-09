// type RaceCardProps = {

// };
import HorseRacing from '../../../assets/images/HorseRacing.svg';
const RaceCard = () => {
    return (
        <div className=" flex h-full w-full flex-row items-center justify-between bg-purple-300 px-2 text-sm font-bold">
            {/* leftside */}
            <div className="flex h-full flex-col">
                {/* icon */}
                <img src={HorseRacing} className="h-10 w-10" />
                {/* race meeting/location and summary ID#*/}
                <div className="flex flex-row gap-1  uppercase">
                    <div>HOBART</div>
                    <div>R8</div>
                </div>
            </div>
            {/* rightside */}
            <div className="flex h-full flex-col">
                {/* Countdown */}
                <div className="h-10 place-content-center text-red-900">
                    2:01s
                </div>
                {/* channel */}
                <div className="text-orange-600">LIVE 1</div>
            </div>
        </div>
    );
};

export default RaceCard;
