function page({ params }: { params: { itemId: number } }) {
  return <div>{params.itemId} 페이지</div>;
}

export default page;
