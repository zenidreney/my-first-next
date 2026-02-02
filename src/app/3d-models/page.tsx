import ModelCard from "../components/ModelCard";
import { getAllModels } from "../lib/models";
import type { Model } from "../types";

export default async function ModelsPages() {
  const data = await getAllModels();
  console.log(data);

  //   const modelsEl = data.map((model: Model) => (
  //     <ModelCard key={model.id} model={model} />
  //   ));

  return (
    <div className="container px-4 py-8 mx-auto">
      <h1 className="mb-8 text-3xl font-bold">All Models</h1>
      <section
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        aria-label="3D Models Gallery"
      >
        {data.map((model: Model) => (
          <ModelCard key={model.id} model={model} />
        ))}
      </section>
    </div>
  );
}
