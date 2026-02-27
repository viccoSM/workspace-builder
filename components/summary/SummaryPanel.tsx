'use client'

import Link from 'next/link'
import { useWorkspaceStore } from '@/store/workspaceStore'
import { calculateTotal } from '@/utils/calculateTotal'

export const SummaryPanel = () => {
  const { desk, chair, accessories } =
    useWorkspaceStore()

  const total =calculateTotal({
    desk,
    chair,
    accessories,
  })

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">
        Your Setup
      </h2>

      <ul className="text-sm text-slate-300 space-y-2">
        <li>Desk: {desk?.name ?? '-'}</li>
        <li>Chair: {chair?.name ?? '-'}</li>
        <li>
          Accessories:{' '}
          {accessories.length > 0
            ? accessories.map((a) => a.name).join(', ')
            : '-'}
        </li>
      </ul>

      <div className="mt-6 border-t border-slate-700 pt-4">
        <p className="font-semibold">
          Total: ${total} / month
        </p>

        <Link
          href="/checkout"
          className="block text-center mt-4 bg-indigo-600 hover:bg-indigo-500 transition rounded-lg py-2"
        >
          Rent Your Setup
        </Link>
      </div>
    </div>
  )
}