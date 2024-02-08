import { create } from 'zustand';

interface IDrawerStore {
  paramsForm: any;
  drawer: boolean;
  toggleDrawer: () => void;
  setParamsForm: (params: any) => void;
  setParamsItem: (params: any) => void;
}

export const useFormStorageStore = create<IDrawerStore>((set) => ({
  paramsForm: null,
  drawer: false,
  toggleDrawer: () => set((state) => ({ drawer: !state.drawer })),
  setParamsForm: (params) => set({ paramsForm: params, drawer: true }),
  setParamsItem: (params) => set({ paramsForm: params }),
}));
