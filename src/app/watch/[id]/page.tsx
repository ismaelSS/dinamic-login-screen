export default function WatchPage(
  { params }: {
    params: { id: string }
  }) {
    console.log(params);

  return (
    <h1>estou na pagina watch {params.id}</h1>
  )
}
