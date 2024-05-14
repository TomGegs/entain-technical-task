import NoRacesAvailableIcon from '../../../assets/images/NoRacesAvailableIcon.svg';

const NoRaceMessageCard = () => {
    return (
        <div className="text-md flex h-full w-full flex-col items-center justify-between bg-white px-2 py-10 text-4xl font-semibold shadow-sm lg:text-lg">
            <img
                loading="lazy"
                src={NoRacesAvailableIcon}
                className="h-20 w-20 lg:h-10 lg:w-10"
                alt="Race Type Icon"
            />
            <p>No race category selected or no race information available.</p>
        </div>
    );
};

export default NoRaceMessageCard;
