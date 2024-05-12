import RaceCard from './RaceCard/RaceCard';
import TableHeader from './TableHeader/TableHeader';
import useRaceData from '../hooks/useRaceData';
import useRaceCategoryStore from '../state/useRaceCategoryStore';
import useVisibleRaces from '../hooks/useVisibleRaces';

const GoRacingTable = () => {
    const { sortedRaces } = useRaceData();
    const { selectedRaceCategories, raceCategories } = useRaceCategoryStore();
    //  make sure 5 races are onscreen at all times
    const visibleRaces = useVisibleRaces(sortedRaces);
    // if (isLoading) return <div>Loading...</div>;
    // if (error) return <div>Error loading races: {error}</div>;

    return (
        <div className="w-full p-4 lg:w-full">
            <TableHeader />
            <div className="flex w-full flex-row gap-1 pt-4">
                {raceCategories.map((category) => {
                    // Filter visible races by selected categories and ensure at least one message if no races
                    const racesInCategory = visibleRaces.filter(
                        (race) =>
                            race.category_id === category.categoryId &&
                            selectedRaceCategories.includes(category.categoryId)
                    );
                    return racesInCategory.length > 0 ? (
                        racesInCategory.map((race, index) => (
                            <RaceCard
                                key={`${category.categoryId}-${index}`}
                                raceCategory={race.category_id}
                                raceMeeting={race.meeting_name}
                                raceNumber={race.race_number}
                                raceCountdown={race.advertised_start.seconds}
                                raceIndex={index}
                            />
                        ))
                    ) : (
                        <div key={category.categoryId} className="text-center">
                            No races within the next 15 minutes for{' '}
                            {category.name}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default GoRacingTable;
