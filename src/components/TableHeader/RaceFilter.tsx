import CheckboxIcon from '../../assets/images/CheckboxIcon.svg';
import useRaceCategoryStore from '../../state/useRaceCategoryStore';

const RaceFilter = () => {
    const { raceCategories, selectedRaceCategories, toggleRaceCategory } =
        useRaceCategoryStore();

    return (
        <div className="flex w-full flex-row items-center gap-6 py-2 pl-2 pr-4 lg:w-52 lg:flex-row lg:justify-between lg:py-0">
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
                            loading="lazy"
                            src={CheckboxIcon}
                            className="absolute bottom-0 left-0 h-3.5 w-3.5 cursor-pointer  rounded opacity-0 peer-checked:opacity-100"
                        />
                        <img
                            loading="lazy"
                            src={
                                selectedRaceCategories.includes(
                                    option.categoryId
                                )
                                    ? option.icon
                                    : option.iconNotSelected
                            }
                            alt={`${option.name} icon`}
                            className="ml-1 h-5 w-5 cursor-pointer"
                        />
                    </div>
                </label>
            ))}
        </div>
    );
};

export default RaceFilter;
