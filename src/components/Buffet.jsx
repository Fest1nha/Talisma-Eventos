export default function ServBuffeticeCards() {
  return (
    <section className="bg-[#2c1d1b] text-white px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Buffet</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <img src="public/buffet1.jpg" alt="Buffet" className="rounded" />
          <img src="public/buffet2.jpg" alt="Buffet2" className="rounded" />
        </div>
        <p className="mt-6">
          Na talismã temos diversos tipos de buffets para qualquer tipo de festa
          ou confraternização
        </p>
        <button className="mt-4 bg-orange-500 hover:bg-orange-500 px-4 py-2 rounded">
          Solicite um Orçamento
        </button>
      </div>
    </section>
  );
}
