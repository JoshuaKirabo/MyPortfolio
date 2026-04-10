import { loadPerezPage } from "@/lib/perez-site";

type PerezPageProps = {
  routePath: string;
};

export default async function PerezPage({ routePath }: PerezPageProps) {
  const { bodyHtml } = await loadPerezPage(routePath);

  return <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />;
}
