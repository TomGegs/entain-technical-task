import RaceCard from './RaceCard/RaceCard';
import TableHeader from './TableHeader/TableHeader';
import useRaceData from '../../hooks/useRaceData';
import useRaceCategoryStore from '../../state/useRaceCategoryStore';
import useVisibleRaces from '../../hooks/useVisibleRaces';

const GoRacingTable = () => {
    const { sortedRaces } = useRaceData();
    const { selectedRaceCategories } = useRaceCategoryStore();
    //  make sure 5 races are onscreen at all times
    const visibleRaces = useVisibleRaces(sortedRaces);
    // if (isLoading) return <div>Loading...</div>;
    // if (error) return <div>Error loading races: {error}</div>;

    return (
        <div className="w-full p-4 lg:w-full">
            <TableHeader />
            <div className="flex w-full flex-row gap-1 pt-4">
                {visibleRaces
                    .filter((race) =>
                        selectedRaceCategories.includes(race.category_id)
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
                    ))}
            </div>
        </div>
    );
};

export default GoRacingTable;
