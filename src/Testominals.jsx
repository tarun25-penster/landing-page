import { useQuery } from "@tanstack/react-query";
import { fetchTestimonials } from "./api";

const Testimonials = () => {
  const { data, isLoading, error } = useQuery({ queryKey: ["testimonials"], queryFn: fetchTestimonials });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading testimonials</p>;

  return (
    <section className="py-20 bg-white text-center">
      <h2 className="text-3xl font-bold text-gray-800">What Our Users Say</h2>
      <div className="mt-8 flex flex-wrap justify-center gap-8 px-6">
        {data.map((testi, index) => (
          <div key={index} className="p-6 bg-gray-50 shadow-md rounded-lg max-w-sm text-center border border-gray-300 hover:shadow-lg transition-transform transform hover:scale-105">
            <p className="text-lg italic">&quot;{testi.feedback}&quot;</p>
            <p className="mt-4 font-semibold text-blue-600">- {testi.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
