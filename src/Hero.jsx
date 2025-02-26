import { useQuery } from "@tanstack/react-query";
import { fetchHero } from "./api";

const Hero = () => {
  const { data, isLoading, error } = useQuery({ queryKey: ["hero"], queryFn: fetchHero });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-400 text-white text-center py-24 px-6">
      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">{data.title}</h1>
      <p className="mt-4 text-lg md:text-2xl opacity-90">{data.subtitle}</p>
      <a href={data.cta_link} 
         className="mt-6 inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-gray-200 transition-transform transform hover:scale-105">
        {data.cta_text}
      </a>
    </section>
  );
};

export default Hero;
