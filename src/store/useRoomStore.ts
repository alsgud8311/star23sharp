import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface RoomState {
  messageRoom: string;
  token: string;
  signIn: (room: string, token: string) => void;
  signOut: () => void;
  refresh: (accessToken: string) => void;
}

export const useRoomStore = create<RoomState>()(
  devtools(
    persist(
      (set) => ({
        messageRoom: "",
        token: "",
        signIn: (room: string, accessToken: string) =>
          set(() => ({
            messageRoom: room,
            token: accessToken,
          })),
        signOut: () => {
          set(() => ({
            messageRoom: "",
            token: "",
          }));
        },
        refresh: (accessToken: string) => set(() => ({ token: accessToken })),
      }),
      {
        name: "roomStore",
        partialize: (state) => {
          return {
            messageRoom: state.messageRoom,
          };
        },
      },
    ),
  ),
);
