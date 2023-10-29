import { LayoutState } from '@/modules/products/types';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

type LayoutStateType = {
  layoutState: LayoutState | string;
  setLayoutState: (state: LayoutState | string) => void;
};

export const useLayoutStateStore = create<LayoutStateType>()(
  devtools(
    persist(
      set => ({
        // ----- STATE -----
        layoutState: 'horizontal',

        // ----- STATE FUNCTIONS -----

        // SET Layout State
        setLayoutState: (state: LayoutState | string) => set({ layoutState: state }),
      }),
      {
        name: 'layout-state-storage',
      },
    ),
  ),
);
