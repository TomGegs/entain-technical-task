import create from 'zustand';

const useStore = create((set) => ({
    races: [],
    setRaces: (races) => set({ races }),
}));
