import { AppHeader,  } from '@/components/layout/AppHeader'
import { WorkspacePreview } from '@/components/workspace/WorkspacePreview'
import { DeskSelector } from '@/components/selector/DeskSelector'
import { ChairSelector } from '@/components/selector/ChairSelector'
import { SummaryPanel } from '@/components/summary/SummaryPanel'
import { AccessorySelector } from '@/components/selector/AccessoriesSelector '
import { AppLayout } from '@/components/layout/AppLayout'

export default function HomePage() {
  return (
    <>
      <div className="px-6 pt-6">
        <AppHeader />
      </div>
      <AppLayout
        selector={
          <>
            <DeskSelector />
            <ChairSelector />
            <AccessorySelector />
          </>
        }
        preview={<WorkspacePreview />}
        summary={<SummaryPanel />}
      />
    </>
  )
}