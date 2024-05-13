import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import RaceFilter from '../RaceFilter';

// Setup the mock with an initially unselected third category
vi.mock('../../../state/useRaceCategoryStore', () => {
    return {
        default: () => ({
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
            selectedRaceCategories: ['1', '2'],
            toggleRaceCategory: (categoryId: unknown) => {
                return { categoryId };
            },
        }),
    };
});

describe('RaceFilter', () => {
    it('renders checkboxes for each race category and handles interactions correctly', () => {
        const { rerender } = render(<RaceFilter />);

        const checkboxes = screen.getAllByRole(
            'checkbox'
        ) as HTMLInputElement[];
        expect(checkboxes).toHaveLength(3);
        expect(checkboxes[0].checked).toBe(true); // Greyhound is selected
        expect(checkboxes[1].checked).toBe(true); // Harness is selected
        expect(checkboxes[2].checked).toBe(false); // Horse is not selected

        // Simulate clicking the third checkbox to select it
        fireEvent.click(checkboxes[2]);

        // Mock the effect of the toggle function
        vi.mock('../../../state/useRaceCategoryStore', () => {
            return {
                default: () => ({
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
                    selectedRaceCategories: ['1', '2', '3'], // Update to reflect the toggle action
                    toggleRaceCategory: vi.fn(),
                }),
            };
        });

        // Rerender to simulate the component update
        rerender(<RaceFilter />);

        // Re-fetch checkboxes and check the state
        const updatedCheckboxes = screen.getAllByRole(
            'checkbox'
        ) as HTMLInputElement[];
        expect(updatedCheckboxes[2].checked).toBe(true); // Now it should be checked
    });
});
