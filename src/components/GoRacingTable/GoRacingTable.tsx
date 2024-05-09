import RaceCard from './RaceCard/RaceCard';
import TableHeader from './TableHeader/TableHeader';

const GoRacingTable = () => {
    return (
        <div className="w-full lg:w-full">
            <TableHeader />
            <div className="flex flex-row gap-1">
                <RaceCard />
                <RaceCard />
                <RaceCard />
                <RaceCard />
                <RaceCard />
            </div>
        </div>
    );
};

export default GoRacingTable;
