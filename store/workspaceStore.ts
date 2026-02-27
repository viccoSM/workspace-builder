import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Desk, Chair, Accessory } from "@/types/product";

interface WorkspaceState {
  desk: Desk | null;
  chair: Chair | null;
  accessories: Accessory[];

  selectDesk: (desk: Desk) => void;
  selectChair: (chair: Chair) => void;
  toggleAccessory: (accessory: Accessory) => void;
  reset: () => void;

  getTotal: () => number;
}

export const useWorkspaceStore = create<WorkspaceState>()(
  persist(
    (set, get) => ({
      desk: null,
      chair: null,
      accessories: [],

      selectDesk: (desk) => set({ desk }),

      selectChair: (chair) => set({ chair }),

      toggleAccessory: (accessory) => {
        const current = get().accessories;
        const exists = current.find((item) => item.id === accessory.id);

        if (exists) {
          set({
            accessories: current.filter((item) => item.id !== accessory.id),
          });
        } else {
          set({
            accessories: [...current, accessory],
          });
        }
      },

      reset: () =>
        set({
          desk: null,
          chair: null,
          accessories: [],
        }),

      getTotal: () => {
        const { desk, chair, accessories } = get();
        return (
          (desk?.price || 0) +
          (chair?.price || 0) +
          accessories.reduce((sum, item) => sum + item.price, 0)
        );
      },
    }),
    {
      name: "workspace-storage", // key di localStorage
    }
  )
);