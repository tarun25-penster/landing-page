import { useQuery } from "@tanstack/react-query";
import { fetchFeatures } from "./api";

const Features = () => {
  const { data, isLoading, error } = useQuery({ queryKey: ["features"], queryFn: fetchFeatures });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading features</p>;

  return (
    <section className="py-20 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold text-gray-800">Key Features</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto px-6">
        {data.map((feature, index) => (
          <div key={index} className="p-8 bg-white shadow-xl rounded-lg text-center transition-transform transform hover:scale-105">
            <span className="text-5xl">{feature.icon}</span>
            <h3 className="font-semibold text-xl mt-4">{feature.title}</h3>
            <p className="text-gray-600 mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
