export function Header() {
  return (
    <header className="flex w-full max-w-7xl flex-col items-center justify-center gap-6 px-8 py-2 text-center">
      <h1 className="rounded-sm bg-zinc-600 px-4 py-2 text-3xl font-bold text-zinc-50 shadow-sm">
        Metrô Map <span className="text-red-500">SP</span>
      </h1>

      <p className="max-w-72 text-xs font-medium text-zinc-800">
        Atualizações em tempo real das linhas do{" "}
        <a href="https://www.metro.sp.gov.br/" target="_blank">
          Metrô
        </a>
        ,
        <a href="https://www.viamobilidade.com.br/" target="_blank">
          ViaMobilidade
        </a>{" "}
        e{" "}
        <a href="https://www.cptm.sp.gov.br/Pages/Home.aspx" target="_blank">
          CPTM
        </a>{" "}
        a cada 5 minutos!
      </p>
    </header>
  );
}
