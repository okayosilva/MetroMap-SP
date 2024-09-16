export function Header() {
  return (
    <header className="flex items-center justify-center w-full max-w-7xl px-8 py-2 flex-col text-center gap-6">
      <h1 className="text-3xl font-bold bg-zinc-600 text-zinc-50 py-2 px-4 rounded-sm shadow-sm">Metro Map <span className="text-red-500">SP</span></h1>

      <p className="text-xs text-zinc-800 font-medium max-w-72">Atualizações em tempo real das linhas do Metrô, ViaMobilidade e CPTM a cada 5 minutos!</p>
    </header>
  )
 }
