import Main from "@/components/common/DetailMain";

export default function ItemsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Main>{children}</Main>;
}
