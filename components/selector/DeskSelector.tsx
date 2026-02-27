'use client'

import { desks } from '@/data/desks'
import { useWorkspaceStore } from '@/store/workspaceStore'

export const DeskSelector = () => {
  const { desk, selectDesk } = useWorkspaceStore()

  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Desks</h2>

      <div className="space-y-2">
        {desks.map((item) => (
          <div
            key={item.id}
            onClick={() => selectDesk(item)}
            className={`p-3 rounded-lg cursor-pointer transition 
              ${
                desk?.id === item.id
                  ? 'bg-indigo-600'
                  : 'bg-slate-800 hover:bg-slate-700'
              }`}
          >
            <p>{item.name}</p>
            <p className="text-sm text-slate-300">
              ${item.price}/mo
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}