export default async function DetailPage({
  params,
}: {
  params: Promise<{ itemId: string }>;
}) {
  const itemId = (await params).itemId;
  return <div>{itemId} 페이지</div>;
}
