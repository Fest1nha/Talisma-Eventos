export default function Location() {
  return (
    <section className="bg-[#2c1d1b] text-white px-6 py-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="flex gap-4">
          <img
            src="public/local1.jpg"
            alt="local"
            className="w-1/2 rounded rotate-3"
          />
          <img
            src="public/local2.jpg"
            alt="local"
            className="w-1/2 rounded -rotate-3"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Localização</h2>
          <p>
            Estamos localizados na Rua Amigos da Baia em Araras-SP, próximo a
            antiga Estação Ferroviária do Elihu Root.
          </p>
        </div>
      </div>
    </section>
  );
}
