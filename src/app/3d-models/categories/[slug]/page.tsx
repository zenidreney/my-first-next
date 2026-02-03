import { getCategoryBySlug } from "@/app/lib/categories";
import type { CategoryPageProps } from "@/app/types";

export default async function Category({ params }: CategoryPageProps) {
  const { slug } = await params;
  console.log(slug);
  console.log(getCategoryBySlug(slug));
  const { displayName } = getCategoryBySlug(slug);

  return <h1>{displayName} </h1>;
}
