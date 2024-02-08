import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface IAsideToggleStore {
  toggle: boolean;
  setToggle: () => void;
}

export const useAsideToggleStore = create(
  persist<IAsideToggleStore>(
    (set, get) => ({
      toggle: false,
      setToggle: () => set({ toggle: !get().toggle }),
    }),
    {
      name: 'aside-toggle',
    },
  ),
);
