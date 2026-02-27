'use client'

import { accessories } from '@/data/accessories'
import { useWorkspaceStore } from '@/store/workspaceStore'

export const AccessorySelector = () => {
  const { accessories: selected, toggleAccessory } =
    useWorkspaceStore()

  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold mb-2">
        Accessories
      </h2>

      <div className="space-y-2">
        {accessories.map((item) => {
          const isActive = selected.some(
            (a) => a.id === item.id
          )

          return (
            <div
              key={item.id}
              onClick={() => toggleAccessory(item)}
              className={`p-3 rounded-lg cursor-pointer transition 
                ${
                  isActive
                    ? 'bg-indigo-600'
                    : 'bg-slate-800 hover:bg-slate-700'
                }`}
            >
              <p>{item.name}</p>
              <p className="text-sm text-slate-300">
                ${item.price}/mo
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}