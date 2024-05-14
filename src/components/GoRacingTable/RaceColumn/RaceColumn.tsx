import JerseyImage from '../../../assets/images/JerseyImage.svg';

//Mock information and design for the sake of the assessment

const RaceColumn = () => {
    const raceDetails = [
        {
            jerseyImage: JerseyImage,
            racerName: '8. Rivendel (8)',
            jockeyName: 'J: B Sancho 55kg',
            odds: 3.7,
        },
        {
            jerseyImage: JerseyImage,
            racerName: '8. Rivendel (8)',
            jockeyName: 'J: B Sancho 55kg',
            odds: 3.7,
        },
        {
            jerseyImage: JerseyImage,
            racerName: '8. Rivendel (8)',
            jockeyName: 'J: B Sancho 55kg',
            odds: 3.7,
        },
        {
            jerseyImage: JerseyImage,
            racerName: '8. Rivendel (8)',
            jockeyName: 'J: B Sancho 55kg',
            odds: 3.7,
        },
        {
            jerseyImage: JerseyImage,
            racerName: '8. Rivendel (8)',
            jockeyName: 'J: B Sancho 55kg',
            odds: 3.7,
        },
        {
            jerseyImage: JerseyImage,
            racerName: '8. Rivendel (8)',
            jockeyName: 'J: B Sancho 55kg',
            odds: 3.7,
        },
    ];

    return (
        <div className="mt-1 hidden h-full w-full bg-white p-2 shadow-sm lg:flex lg:flex-col">
            {/* title */}
            <div className="text-sm font-semibold uppercase text-gray-500 ">
                No. / Runner
            </div>

            {/* race details */}
            {raceDetails.map((detail, index) => (
                <div
                    key={index}
                    className="flex h-14 flex-row items-center justify-between"
                >
                    {/* jersey */}
                    <img
                        loading="lazy"
                        src={detail.jerseyImage}
                        alt=""
                        className="h-5 w-5"
                    />
                    {/* details*/}
                    <div>
                        {/* Name of racer */}
                        <div className="text-sm font-bold">
                            {detail.racerName}
                        </div>
                        {/* name of jockey OR greyhound best time */}
                        <div className="text-xs text-gray-500">
                            J: B Sancho 55kg
                        </div>
                    </div>
                    {/* odds */}
                    <div className="flex w-16 items-stretch justify-center rounded border border-b-2 border-[#D5D5D5] bg-[#F2F2F2] p-1 text-sm font-bold shadow-md ">
                        3.70
                    </div>
                </div>
            ))}
        </div>
    );
};

export default RaceColumn;
