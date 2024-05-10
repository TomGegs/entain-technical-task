import CheckboxIcon from '../../../../assets/images/CheckboxIcon.svg';
import useRaceCategoryStore from '../../../../state/useRaceCategoryStore';
import useRacesData from '../../../../hooks/useRaceData';

const RaceFilter = () => {
    const { error, isLoading } = useRacesData();
    const { raceCategories, selectedRaceCategories, toggleRaceCategory } =
        useRaceCategoryStore();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading races.</div>;

    return (
        <div className="flex w-52 flex-row items-center justify-between px-2">
            {raceCategories.map((option, index) => (
                <label key={index}>
                    <div className="relative flex w-full select-none items-center">
                        <input
                            type="checkbox"
                            id={option.name}
                            checked={selectedRaceCategories.includes(
                                option.categoryId
                            )}
                            onChange={() =>
                                toggleRaceCategory(option.categoryId)
                            }
                            className="checkbox-border peer h-3.5 w-3.5 cursor-pointer appearance-none rounded border-2 border-[#A7BCB1] checked:border-transparent"
                        />
                        <img
                            src={CheckboxIcon}
                            className="absolute bottom-0 left-0 h-3.5 w-3.5 cursor-pointer  rounded opacity-0 peer-checked:opacity-100"
                        />
                        <img
                            src={option.icon}
                            alt={`${option.name} icon`}
                            className="ml-1 h-5 w-5"
                        />
                    </div>
                </label>
            ))}
        </div>
    );
};

export default RaceFilter;
