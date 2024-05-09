import HorseRacing from '../../../../assets/images/HorseRacing.svg';
import GreyhoundRacing from '../../../../assets/images/GreyhoundRacing.svg';
import HarnessRacing from '../../../../assets/images/HarnessRacing.svg';
import CheckboxIcon from '../../../../assets/images/CheckboxIcon.svg';

// Purpose of this component
// This component is used to display the race filter options in the table header

const RaceFilter = () => {
    const raceFilterOptions = [
        { id: 1, name: 'Horse Racing', icon: HorseRacing },
        { id: 2, name: 'Greyhound Racing', icon: GreyhoundRacing },
        { id: 3, name: 'Harness Racing', icon: HarnessRacing },
    ];
    return (
        <div className="flex w-52 flex-row flex-nowrap items-center justify-between px-2">
            {raceFilterOptions.map((race, index) => (
                <label key={index} htmlFor={race.name}>
                    <div className="relative flex w-full items-center">
                        <input
                            type="checkbox"
                            id={race.name}
                            name={race.name}
                            value={race.name}
                            className="checkbox-border peer h-3.5 w-3.5 cursor-pointer appearance-none rounded border-2 border-[#A7BCB1] checked:border-transparent"
                        />
                        {/* Tick for checkbox */}
                        <img
                            src={CheckboxIcon}
                            className="absolute bottom-0 left-0 h-3.5 w-3.5 cursor-pointer select-none rounded opacity-0 peer-checked:opacity-100"
                        />
                        {/* Animal Icon */}
                        <img src={race.icon} className="ml-1 h-5 w-5 " />
                    </div>
                </label>
            ))}
        </div>
    );
};

export default RaceFilter;
