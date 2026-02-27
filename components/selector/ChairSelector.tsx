'use client'


import { chairs } from '@/data/chairs'
import { useWorkspaceStore } from '@/store/workspaceStore'

export const ChairSelector = () => {
  const { chair, selectChair } = useWorkspaceStore()

  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold mb-2">Chairs</h2>

      <div className="space-y-2">
        {chairs.map((item) => (
          <div
            key={item.id}
            onClick={() => selectChair(item)}
            className={`p-3 rounded-lg cursor-pointer transition 
              ${
                chair?.id === item.id
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