import RaceCard from '../RaceCard/RaceCard';
import TableHeader from '../TableHeader/TableHeader';
import useRaceData from '../../hooks/useRaceData';
import useRaceCategoryStore from '../../state/useRaceCategoryStore';
import useVisibleRaces from '../../hooks/useVisibleRaces';
import NoRaceMessageCard from '../RaceCard/NoRaceMessageCard';

const GoRacingTable = () => {
    const { sortedRaces } = useRaceData();
    const { selectedRaceCategories } = useRaceCategoryStore();
    //  make sure 5 races are onscreen at all times
    const visibleRaces = useVisibleRaces(sortedRaces);

    return (
        <div className="w-full lg:py-4 lg:w-full">
            <TableHeader />
            <div className="flex w-full flex-col gap-1 pt-4 lg:flex-row">
                {selectedRaceCategories.length > 0 ? (
                    visibleRaces
                        .filter(
                            (race) =>
                                race &&
                                selectedRaceCategories.includes(
                                    race.category_id
                                )
                        )
                        .slice(0, 5)
                        .map((race, index) => (
                            <RaceCard
                                key={index}
                                raceCategory={race.category_id}
                                raceMeeting={race.meeting_name}
                                raceNumber={race.race_number}
                                raceCountdown={race.advertised_start.seconds}
                                raceIndex={index}
                            />
                        ))
                ) : (
                    <div className="w-full text-center">
                        <NoRaceMessageCard />
                    </div>
                )}
            </div>
        </div>
    );
};

export default GoRacingTable;
