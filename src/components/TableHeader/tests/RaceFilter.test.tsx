import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import RaceFilter from '../RaceFilter';

// Correct the mock setup using importOriginal
vi.mock('../../../state/useRaceCategoryStore', async () => {
    const mockToggleRaceCategory = vi.fn();
    return {
        default: vi.fn(() => ({
            raceCategories: [
                {
                    categoryId: '1',
                    name: 'Greyhound',
                    icon: 'greyhound.svg',
                    iconNotSelected: 'greyhound_ns.svg',
                },
                {
                    categoryId: '2',
                    name: 'Harness',
                    icon: 'harness.svg',
                    iconNotSelected: 'harness_ns.svg',
                },
                {
                    categoryId: '3',
                    name: 'Horse',
                    icon: 'horse.svg',
                    iconNotSelected: 'horse_ns.svg',
                },
            ],
            selectedRaceCategories: ['1', '2'], // Assuming '3' is not selected initially
            toggleRaceCategory: mockToggleRaceCategory,
        })),
    };
});

describe('RaceFilter', () => {
    it('renders checkboxes for each race category and handles interactions correctly', () => {
        render(<RaceFilter />);

        const checkboxes = screen.getAllByRole(
            'checkbox'
        ) as HTMLInputElement[];
        expect(checkboxes).toHaveLength(3);
        expect(checkboxes[0].checked).toBe(true); // Greyhound is selected
        expect(checkboxes[1].checked).toBe(true); // Harness is selected
        expect(checkboxes[2].checked).toBe(false); // Horse is not selected

        // Simulate clicking the third checkbox to select it
        fireEvent.click(checkboxes[2]);
        expect(checkboxes[2].checked).toBe(true); // Check if the checkbox is now checked
    });
});
