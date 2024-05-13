import { describe, it, expect, vi, beforeAll, afterAll } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import useRaceCountdown from '../useRaceCountdown';

describe('useRaceCountdown', () => {
    beforeAll(() => {
        // Mock date to stabilise the now time
        vi.useFakeTimers();
        vi.setSystemTime(new Date('2024-05-10T12:00:00Z'));
    });

    afterAll(() => {
        // Restore timers
        vi.useRealTimers();
    });

    it('updates countdown and text colour as time progresses', () => {
        const futureTime = Date.now() + 300000; // 5 minutes from "now"
        const { result } = renderHook(() =>
            useRaceCountdown(futureTime / 1000)
        );

        // Initially check text colour and countdown
        expect(result.current.textColour).toBe('text-red-500');
        expect(result.current.countdown).toBe('5m 0s');

        // Simulate passing 2 minutes
        act(() => {
            vi.advanceTimersByTime(120000); // advance by 2 minutes
        });

        expect(result.current.textColour).toBe('text-red-500');
        expect(result.current.countdown).toBe('3m 0s');

        // Simulate passing 4 minutes total from the initial setup
        act(() => {
            vi.advanceTimersByTime(120000); // another 2 minutes
        });

        // Should now show less than 1 minute without 'm'
        expect(result.current.textColour).toBe('text-red-500');
        expect(result.current.countdown).toBe('1m 0s');
    });

    it('stops countdown when race time has passed', () => {
        const pastTime = Date.now() - 10000; // 10 seconds past
        const { result } = renderHook(() => useRaceCountdown(pastTime / 1000));

        expect(result.current.countdown).toBe('-0s');
        expect(result.current.textColour).toBe('text-red-500');

        // Simulate passing 30 more seconds
        act(() => {
            vi.advanceTimersByTime(30000);
        });

        // Expect no change as it should still display the past time
        expect(result.current.countdown).toBe('-30s');
        expect(result.current.textColour).toBe('text-red-500');
    });
});
