import { CircleAlert } from "lucide-react";
import { CardItemProps } from "../types/cardItem";
import { mappedColors } from "../utils/mappedColors";

type MetroLineProps = {
  metroLine: CardItemProps;
};

import cptmImage from "../assets/cptm.png";
import metroSPImage from "../assets/metrosp.png";
import viaMobilidadeImage from "../assets/viamobilidade.png";

export function CardItem({ metroLine }: MetroLineProps) {
  const {
    atualizacao,
    codigo,
    empresa,
    nome,
    ocorrencia,
    situacao,
    descricao,
  } = metroLine;

  const imageMap: { [key: string]: string } = {
    CPTM: cptmImage,
    ViaMobilidade: viaMobilidadeImage,
    "Metrô de SP": metroSPImage,
  };

  const imageSrc = imageMap[empresa];

  const validateOperation = (operator: string) => {
    return operator.includes("Operação Normal") ? "bg-green-700" : "bg-red-700";
  };

  return (
    <div className="rounded-sm border border-zinc-500 bg-zinc-100 shadow-sm">
      <div
        className={`${mappedColors(Number(codigo))} relative flex h-16 items-center justify-center`}
      >
        <img
          src={imageSrc}
          className="absolute right-4 h-8 w-8 rounded-full"
          alt=""
        />
        <h2 className="rounded-sm bg-zinc-50 px-2 py-1 font-bold">{nome}</h2>
      </div>
      <div className="space-y-3 px-4 py-4">
        <div
          className={`${validateOperation(situacao)} flex-col rounded-sm py-2 text-center font-bold`}
        >
          <span className="text-white">{situacao}</span>
        </div>

        <div className="flex flex-col items-center text-base">
          {descricao.length > 0 && (
            <div className="mb-3 hidden rounded-sm bg-gray-200 p-4 max-sm:block">
              <span>{descricao}</span>
            </div>
          )}

          <span className="font-bold">Atualização:</span>
          <span>{atualizacao}</span>
        </div>

        <div className="flex items-center justify-center gap-3 rounded-sm bg-gray-200 p-2 text-sm">
          <CircleAlert size={18} />
          <div className="flex flex-col font-semibold">
            <span className="font-bold">Ultima ocorrência:</span>
            <span>{ocorrencia}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
