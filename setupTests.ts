/* eslint-disable @typescript-eslint/no-explicit-any */
import { vi } from 'vitest';
import { JSDOM } from 'jsdom';

const jsdom = new JSDOM('<!doctype html><html><body></body></html>', {
    url: 'http://localhost',
});
const { window } = jsdom;

function copyProps(
    src: Record<string, unknown>,
    target: Record<string, unknown>
): void {
    Object.defineProperties(target, {
        ...Object.getOwnPropertyDescriptors(src),
        ...Object.getOwnPropertyDescriptors(target),
    });
}

global.window = window as never;
global.requestAnimationFrame = function (callback: FrameRequestCallback) {
    return setTimeout(callback, 0);
};

copyProps(window, global);

// Mocks for things like local storage, session storage, etc.
global.localStorage = {
    getItem: vi.fn(),
    setItem: vi.fn(),
    removeItem: vi.fn(),
    clear: vi.fn(),
} as any;

global.sessionStorage = {
    getItem: vi.fn(),
    setItem: vi.fn(),
    removeItem: vi.fn(),
    clear: vi.fn(),
} as any;
