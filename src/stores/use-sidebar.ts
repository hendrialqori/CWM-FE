import { create } from "zustand";

type State = { show: boolean }
type Action = { toggle: () => void }

export const useSidebar = create<State & Action>((set, get) => ({
    show: false,
    toggle: () => set({ show: !get().show })
}))