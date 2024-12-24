import { create } from "zustand";

interface LoadingState {
  isLoading: boolean;
  changeLoadingState: (state: boolean) => void;
}

export const useLoadingStore = create<LoadingState>((set) => ({
  isLoading: false,
  changeLoadingState: (state: boolean) => set({ isLoading: state }),
}));
