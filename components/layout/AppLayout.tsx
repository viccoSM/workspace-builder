interface Props {
  selector: React.ReactNode
  preview: React.ReactNode
  summary: React.ReactNode
}

export const AppLayout = ({ selector, preview, summary }: Props) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6">
      <div className="grid grid-cols-[320px_1fr_340px] gap-6 h-[calc(100vh-3rem)]">
        <aside className="bg-slate-900/80 rounded-2xl p-5 shadow-xl overflow-y-auto">
          {selector}
        </aside>

        <main className="bg-slate-900/80 rounded-2xl p-5 shadow-xl flex items-center justify-center">
          {preview}
        </main>

        <aside className="bg-slate-900/80 rounded-2xl p-5 shadow-xl">
          {summary}
        </aside>
      </div>
    </div>
  )
}