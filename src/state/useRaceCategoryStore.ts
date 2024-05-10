import { create } from 'zustand';
import GreyhoundIcon from '../assets/images/GreyhoundRacing.svg';
import HarnessIcon from '../assets/images/HarnessRacing.svg';
import HorseIcon from '../assets/images/HorseRacing.svg';
interface RaceCategory {
    categoryId: string;
    name: string;
    icon: string;
}

interface RaceCategoryState {
    raceCategories: RaceCategory[];
    selectedRaceCategories: string[];
    toggleRaceCategory: (categoryId: string) => void;
}

const useRaceCategoryStore = create<RaceCategoryState>((set) => ({
    raceCategories: [
        {
            categoryId: '9daef0d7-bf3c-4f50-921d-8e818c60fe61',
            name: 'Greyhound Racing',
            icon: GreyhoundIcon,
        },
        {
            categoryId: '161d9be2-e909-4326-8c2c-35ed71fb460b',
            name: 'Harness Racing',
            icon: HarnessIcon,
        },
        {
            categoryId: '4a2788f8-e825-4d36-9894-efd4baf1cfae',
            name: 'Horse Racing',
            icon: HorseIcon,
        },
    ],
    selectedRaceCategories: [],

    toggleRaceCategory: (categoryId) =>
        set((state) => ({
            selectedRaceCategories: state.selectedRaceCategories.includes(
                categoryId
            )
                ? state.selectedRaceCategories.filter((id) => id !== categoryId)
                : [...state.selectedRaceCategories, categoryId],
        })),
}));

export default useRaceCategoryStore;
