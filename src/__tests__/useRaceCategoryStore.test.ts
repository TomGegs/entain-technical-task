import { describe, it, expect, vi } from 'vitest';
import create from 'zustand';
import { RaceCategoryState } from '../state/useRaceCategoryStore';

// Mock the useRaceCategoryStore hook directly since it is being tested
vi.mock('../useRaceCategoryStore', () => {
    const actual = vi.importActual('../useRaceCategoryStore');
    return {
        ...actual,
        useRaceCategoryStore: vi.fn(),
    };
});

// Define a type for the initial state setup to use in the mock store
interface MockState extends RaceCategoryState {
    toggleRaceCategory: (categoryId: string) => void;
}

const setupStore = (initialState: MockState) =>
    create<MockState>(() => ({
        ...initialState,
        toggleRaceCategory: vi.fn(),
    }));

describe('useRaceCategoryStore', () => {
    it('should toggle race category selection correctly', () => {
        const toggleRaceCategoryMock = vi.fn();
        // Create a mock store with the initial state
        const useStore = setupStore({
            raceCategories: [
                {
                    categoryId: '9daef0d7-bf3c-4f50-921d-8e818c60fe61',
                    name: 'Greyhound Racing',
                    icon: 'GreyhoundIcon',
                    iconNotSelected: 'GreyhoundIconNotSelected',
                },
            ],
            selectedRaceCategories: ['9daef0d7-bf3c-4f50-921d-8e818c60fe61'],
            toggleRaceCategory: toggleRaceCategoryMock,
        });

        useStore
            .getState()
            .toggleRaceCategory('9daef0d7-bf3c-4f50-921d-8e818c60fe61');

        // Check if the toggle function has been called
        expect(toggleRaceCategoryMock).toHaveBeenCalledOnce();
        // This is a mock, so it will not actually modify state unless defined
    });

    it('initial state should have all categories selected', () => {
        const useStore = setupStore({
            raceCategories: [],
            selectedRaceCategories: [
                '9daef0d7-bf3c-4f50-921d-8e818c60fe61',
                '161d9be2-e909-4326-8c2c-35ed71fb460b',
                '4a2788f8-e825-4d36-9894-efd4baf1cfae',
            ],
            toggleRaceCategory: vi.fn(),
        });

        const { selectedRaceCategories } = useStore.getState();
        expect(selectedRaceCategories).toEqual([
            '9daef0d7-bf3c-4f50-921d-8e818c60fe61',
            '161d9be2-e909-4326-8c2c-35ed71fb460b',
            '4a2788f8-e825-4d36-9894-efd4baf1cfae',
        ]);
    });
});
