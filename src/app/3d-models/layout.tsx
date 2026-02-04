import type { RootLayoutProps } from "../types";
import { getAllCategories } from "../lib/categories";
import Link from "next/link";
import type { Category } from "../types";

export default function ModelsLayout({ children }: RootLayoutProps) {
  const categories: Category[] = getAllCategories();
  console.log(categories);

  return (
    <div>
      <nav>
        <ul>
          {categories.map((c) => {
            return (
              <Link href={`/3d-models/categories/${c.slug}`} key={c.slug}>
                <li>{c.displayName} </li>
              </Link>
            );
          })}
        </ul>
      </nav>
      {children}
    </div>
  );
}
