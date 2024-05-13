import NoRacesAvailableIcon from '../../assets/images/NoRacesAvailableIcon.svg';

const NoRaceMessageCard = () => {
    return (
        <div className="text-md flex h-full w-full flex-col items-center justify-between bg-white px-2 py-10 font-semibold shadow-sm">
            <img
                src={NoRacesAvailableIcon}
                className="h-10 w-10"
                alt="Race Type Icon"
            />
            <p>
                No race category selected or no race currently information
                available.
            </p>
        </div>
    );
};

export default NoRaceMessageCard;
