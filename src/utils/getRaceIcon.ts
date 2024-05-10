import GreyhoundRacingIcon from '../assets/images/GreyhoundRacing.svg';
import HarnessRacingIcon from '../assets/images/HarnessRacing.svg';
import HorseRacingIcon from '../assets/images/HorseRacing.svg';

const getRaceIcon = (raceCategory: string | undefined) => {
    switch (raceCategory) {
        case '9daef0d7-bf3c-4f50-921d-8e818c60fe61':
            return GreyhoundRacingIcon;
        case '161d9be2-e909-4326-8c2c-35ed71fb460b':
            return HarnessRacingIcon;
        case '4a2788f8-e825-4d36-9894-efd4baf1cfae':
            return HorseRacingIcon;

        default:
            //default to horse racing icon if no category match
            return HorseRacingIcon;
    }
};

export default getRaceIcon;
