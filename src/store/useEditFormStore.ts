import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface IStore {
  edit: boolean;
  setEdit: () => void;
}

export const useEditFormStore = create(
  persist<IStore>(
    (set) => ({
      edit: false,
      setEdit: () => set({ edit: true }),
    }),
    { name: 'edit-form' },
  ),
);
