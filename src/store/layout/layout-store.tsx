import { LayoutState } from '@/modules/products/types';
import { LAYOUT_STATE } from '@/utils/constants';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

type LayoutStateType = {
  layoutState: LayoutState | string;
  setLayoutState: (state: LayoutState | string) => void;
  resetLayoutState: () => void;
};

export const useLayoutStateStore = create<LayoutStateType>()(
  devtools(
    persist(
      set => ({
        // ----- STATE -----
        layoutState: LAYOUT_STATE.horizontal,

        // ----- STATE FUNCTIONS -----

        // SET Layout State
        setLayoutState: (state: LayoutState | string) => set({ layoutState: state }),

        resetLayoutState: () => {
          set({ layoutState: LAYOUT_STATE.horizontal });
        },
      }),
      {
        name: 'layout-state-storage',
      },
    ),
  ),
);
