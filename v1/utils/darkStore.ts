import create from 'zustand';

interface MiniSidebarState {
  enabled: boolean;
  toggleTheme: (status: boolean) => void;
}

export const useDarkMode = create<MiniSidebarState>((set) => ({
  enabled: true,
  toggleTheme: (status) => set({ enabled: status }),
}));
