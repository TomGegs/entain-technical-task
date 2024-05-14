import RaceFilter from './RaceFilter';

const TableHeader = () => {
    return (
        <div className="flex flex-col flex-nowrap justify-between lg:flex-row ">
            <div className="flex w-full items-center bg-[#30363a] px-2 py-2 pl-4 text-sm font-semibold uppercase leading-10 text-white lg:w-[85%]">
                <p className="flex h-16 items-center lg:h-10">
                    Next To Go Racing
                </p>
            </div>
            <RaceFilter />
        </div>
    );
};

export default TableHeader;