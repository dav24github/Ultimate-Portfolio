import RootShell from "@/components/RootShell";
import content from "@/content/es";

export const metadata = {
  metadataBase: new URL("https://dav-es.netlify.app"),
  title: content.meta.title,
  description: content.meta.description,
};

export default function Layout({ children }) {
  return <RootShell lang="es">{children}</RootShell>;
}
