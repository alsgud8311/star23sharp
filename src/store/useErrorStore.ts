import { create } from "zustand";

interface ErrorState {
  errorMessage: string;
  pushError: (message: string) => void;
  confirmError: () => void;
}

export const useErrorStore = create<ErrorState>((set) => ({
  errorMessage: "",
  pushError: (message: string) => set(() => ({ errorMessage: message })),
  confirmError: () => set(() => ({ errorMessage: "" })),
}));
