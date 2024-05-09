import RaceFilter from './RaceFilter/RaceFilter';

const TableHeader = () => {
    return (
        <div className="flex flex-nowrap justify-between px-2">
            <div className="flex w-full items-center bg-[#30363a] py-2 pl-4 text-sm font-semibold uppercase leading-10 text-white">
                <p className="h-10">Next To Go Racing</p>
            </div>
            <RaceFilter />
        </div>
    );
};

export default TableHeader;
