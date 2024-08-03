export default function GamesSection(){
  return(
    <section className="flex h-[500px] w-full shadow-1 p-[20px] justify-between">
      <div>
        <h2 className="text-2xl font-bold">Dispute</h2>
        <h3 className="text-xl font-bold">Dados</h3>
        <p>disputando com:</p>
        <p>nome do amigo</p>
        <p>1 - 2</p>
      </div>

      <div className="h-full w-[500px] shadow-1">

      </div>

      <div>
        <div className="flex gap-2">
          <div className="h-10 w-10 bg-red-600"></div>
          <div className="h-10 w-10 bg-red-600"></div>
          <div className="h-10 w-10 bg-red-600"></div>
        </div>
        <ul>
          <li>nome amigo 1</li>
          <li>nome amigo 2</li>
          <li>nome amigo 3</li>
          <li>nome amigo 4</li>
          <li>nome amigo 5</li>
          <li>nome amigo 6</li>
          <li>nome amigo 7</li>
          <li>nome amigo 8</li>
        </ul>
      </div>
    </section>
  )
}
