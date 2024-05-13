import { describe, it, expect } from 'vitest';
import getRaceIcon from '../getRaceIcon';
import GreyhoundRacingIcon from '../../assets/images/GreyhoundRacing.svg';
import HarnessRacingIcon from '..//..assets/images/HarnessRacing.svg';
import HorseRacingIcon from '..//..assets/images/HorseRacing.svg';

//Verify that the correct icon is returned for each category ID

describe('getRaceIcon', () => {
    it('returns the correct icon for Greyhound Racing', () => {
        const icon = getRaceIcon('9daef0d7-bf3c-4f50-921d-8e818c60fe61');
        expect(icon).toBe(GreyhoundRacingIcon);
    });

    it('returns the correct icon for Harness Racing', () => {
        const icon = getRaceIcon('161d9be2-e909-4326-8c2c-35ed71fb460b');
        expect(icon).toBe(HarnessRacingIcon);
    });

    it('returns the correct icon for Horse Racing', () => {
        const icon = getRaceIcon('4a2788f8-e825-4d36-9894-efd4baf1cfae');
        expect(icon).toBe(HorseRacingIcon);
    });

    it('returns the default icon when no category matches', () => {
        const icon = getRaceIcon('non-existent-id');
        expect(icon).toBe(HorseRacingIcon);
    });
});
