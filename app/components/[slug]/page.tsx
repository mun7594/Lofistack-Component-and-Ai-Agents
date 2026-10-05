import { getComponentBySlug, components } from "@/lib/data/components";
import { notFound } from "next/navigation";
import { ComponentDetailClient } from "@/lib/components/ComponentDetailClient";

export function generateStaticParams() {
  return components.map((component) => ({
    slug: component.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const component = getComponentBySlug(slug);
  if (!component) {
    return {
      title: "Component Not Found",
    };
  }
  return {
    title: `${component.name} | Muntasir Hasan`,
    description: component.description,
  };
}

export default async function ComponentDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const component = getComponentBySlug(slug);

  if (!component) {
    notFound();
  }

  return <ComponentDetailClient component={component} slug={slug} />;
}
