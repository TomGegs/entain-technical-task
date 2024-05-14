import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import GoRacingTable from '../../components/GoRacingTable/GoRacingTable';
import useRaceData from '../../hooks/useRaceData';
import useRaceCategoryStore from '../../state/useRaceCategoryStore';
import useVisibleRaces from '../../hooks/useVisibleRaces';

vi.mock('../../../hooks/useRaceData', () => ({
    useRaceData: vi.fn(),
}));
vi.mock('../../../state/useRaceCategoryStore', () => ({
    useRaceCategoryStore: vi.fn(),
}));
vi.mock('../../../hooks/useVisibleRaces', () => ({
    useVisibleRaces: vi.fn(),
}));

describe('GoRacingTable', () => {
    it('renders RaceCards based on visible races', () => {
        // Setup the mock return values
        vi.mocked(useRaceData).mockReturnValue({
            sortedRaces: [
                {
                    race_id: '1',
                    category_id: '101',
                    meeting_name: 'Race 1',
                    race_number: 1,
                    advertised_start: { seconds: 123456789 },
                    race_name: 'RoundRun Derby',
                },
            ],
            isLoading: false,
            error: null,
        });
        vi.mocked(useRaceCategoryStore).mockReturnValue({
            selectedRaceCategories: ['101'],
        });
        vi.mocked(useVisibleRaces).mockReturnValue([
            {
                race_id: '1',
                category_id: '101',
                meeting_name: 'Race 1',
                race_number: 1,
                advertised_start: { seconds: 123456789 },
                race_name: 'RoundRun Derby',
            },
        ]);

        render(<GoRacingTable />);

        // Check if the text is present in the document
        expect(screen.getByText(/Race 1/)).toBeTruthy();
    });

    it('renders NoRaceMessageCard when no categories are selected', () => {
        vi.mocked(useRaceData).mockReturnValue({
            sortedRaces: [],
            isLoading: false,
            error: null,
        });
        vi.mocked(useRaceCategoryStore).mockReturnValue({
            selectedRaceCategories: [],
        });
        vi.mocked(useVisibleRaces).mockReturnValue([]);

        render(<GoRacingTable />);

        // Check if the "No races available" message is shown
        expect(screen.getByText(/No races available/)).toBeTruthy();
    });
});
