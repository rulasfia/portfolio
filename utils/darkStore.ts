import create from 'zustand';

interface MiniSidebarState {
  enabled: boolean;
  toggleTheme: () => void;
}

export const useDarkMode = create<MiniSidebarState>((set) => ({
  enabled: true,
  toggleTheme: () => set((state) => ({ enabled: !state.enabled })),
}));
