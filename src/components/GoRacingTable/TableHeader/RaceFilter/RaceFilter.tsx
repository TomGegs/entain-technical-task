import HorseRacing from '../../../../assets/images/HorseRacing.svg';
import GreyhoundRacing from '../../../../assets/images/GreyhoundRacing.svg';
import HarnessRacing from '../../../../assets/images/HarnessRacing.svg';
import CheckboxIcon from '../../../../assets/images/CheckboxIcon.svg';

const RaceFilter = () => {
    return (
        <div className="flex flex-nowrap justify-between px-2">
            <label htmlFor="">
                <div className="relative mr-1 flex items-center">
                    <input
                        type="checkbox"
                        id="horse-racing"
                        name="horse-racing"
                        value="horse-racing"
                        className="checked:bg-brand checkbox-border checked:bg-brand peer h-3.5 w-3.5 cursor-pointer  appearance-none  rounded  border-2 border-[#A7BCB1]  checked:border-transparent"
                    />
                    {/* Tick for tickbox */}
                    <img src={CheckboxIcon} className="h-5 w-5" />
                </div>
                {/* Animal Icon */}
                <img src={HorseRacing} className="h-5 w-5" />
            </label>
        </div>
    );
};

export default RaceFilter;
