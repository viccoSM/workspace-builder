'use client'

import Image from 'next/image'
import { useWorkspaceStore } from '@/store/workspaceStore'

export const WorkspacePreview = () => {
  const { desk, chair, accessories } =
    useWorkspaceStore()

  const monitor = accessories.find(
    (a) => a.type === 'monitor'
  )

  const plant = accessories.find(
    (a) => a.type === 'plant'
  )

  return (
    <div className="relative w-[500px] h-[400px]">

      {/* Desk (Base Layer) */}
      {desk && (
        <Image
          src={desk.image}
          alt={desk.name}
          fill
          className="object-contain"
        />
      )}

      {/* Monitor */}
      {monitor && (
        <Image
          src={monitor.image}
          alt={monitor.name}
          width={200}
          height={200}
          className="absolute top-16 left-1/2 -translate-x-1/2 object-contain"
        />
      )}

      {/* Chair */}
      {chair && (
        <Image
          src={chair.image}
          alt={chair.name}
          width={300}
          height={300}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 object-contain"
        />
      )}

      {/* Plant */}
      {plant && (
        <Image
          src={plant.image}
          alt={plant.name}
          width={120}
          height={120}
          className="absolute bottom-10 right-10 object-contain"
        />
      )}

      {/* Empty State */}
      {!desk && (
        <div className="absolute inset-0 flex items-center justify-center border border-dashed border-slate-700 rounded-xl">
          <p className="text-slate-500">
            Select a desk to start building
          </p>
        </div>
      )}
    </div>
  )
}