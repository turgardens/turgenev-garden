import { create } from 'zustand'

export const useStore = create((set) => ({
    stateVideoPopup: false,
    stateVideoUrl: '',
    setStateVideoPopup: (value) => set(() => ({ stateVideoPopup: value })),
    setStateVideoUrl: (value) => set(() => ({ stateVideoUrl: value })),
}));