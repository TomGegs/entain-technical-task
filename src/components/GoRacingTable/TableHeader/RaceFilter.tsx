import CheckboxIcon from '../../../assets/images/CheckboxIcon.svg';
import useRaceCategoryStore from '../../../state/useRaceCategoryStore';

const RaceFilter = () => {
    const { raceCategories, selectedRaceCategories, toggleRaceCategory } =
        useRaceCategoryStore();

    return (
        <div className="flex w-full flex-row items-center gap-6 py-2 pl-2 pr-4 lg:w-[15%] lg:min-w-52 lg:flex-row lg:justify-between lg:py-0">
            {raceCategories.map((option, index) => (
                <label key={index}>
                    <div className="relative flex w-full select-none items-center">
                        {/* checkbox input */}
                        <input
                            type="checkbox"
                            id={option.name}
                            checked={selectedRaceCategories.includes(
                                option.categoryId
                            )}
                            onChange={() =>
                                toggleRaceCategory(option.categoryId)
                            }
                            className="checkbox-border peer h-8 w-8 cursor-pointer appearance-none rounded border-2 border-[#A7BCB1] checked:border-transparent lg:h-3.5 lg:w-3.5"
                        />
                        {/* checkbox image */}
                        <img
                            loading="lazy"
                            src={CheckboxIcon}
                            className="absolute bottom-0 left-0 h-8 w-8 cursor-pointer rounded opacity-0  peer-checked:opacity-100 lg:h-3.5 lg:w-3.5"
                        />
                        {/* race category icon */}
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
                            className="ml-4 h-14 w-14 cursor-pointer lg:h-5 lg:w-5"
                        />
                    </div>
                </label>
            ))}
        </div>
    );
};

export default RaceFilter;
