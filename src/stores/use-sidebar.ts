import { create } from "zustand";

type State = { show: boolean }
type Action = {
    toggle: () => void,
    onShow: () => void
}

export const useSidebar = create<State & Action>((set, get) => ({
    show: true,
    toggle: () => set({ show: !get().show }),
    onShow: () => set({ show: true })
}))