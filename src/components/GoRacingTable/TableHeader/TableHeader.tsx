import RaceFilter from './RaceFilter/RaceFilter';

const TableHeader = () => {
    return (
        <div className="flex flex-nowrap justify-between px-2">
            <div className="w-full bg-[#30363a] pb-3 text-sm font-semibold uppercase leading-10 text-white">
                <p className="h-11">Next To Go Racing</p>
            </div>
            <RaceFilter />
        </div>
    );
};

export default TableHeader;
