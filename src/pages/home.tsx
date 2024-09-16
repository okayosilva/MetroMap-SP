import { useEffect, useState } from "react";
import { CardItem } from "../components/cardItem";
import { CardLoading } from "../components/cardLoading";
import { Header } from "../components/header";
import { getListOfMetroLines } from "../services/getListOfMetroLines";
import { CardItemProps } from "../types/cardItem";

export function Home() {
  const [loading, setLoading] = useState(false);
  const [metroLines, setMetroLines] = useState<CardItemProps[]>([]);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const response = await getListOfMetroLines();
      setMetroLines(response);
      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <div className="">
      <Header />
      <section className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {loading && (
          <>
            {Array.from({ length: 13 }).map((_, index) => (
              <CardLoading key={index} />
            ))}
          </>
        )}
        {metroLines.map((metroLine) => (
          <CardItem key={metroLine.id} metroLine={metroLine} />
        ))}
      </section>
    </div>
  );
}
