export default function Location() {
  return (
    <section
      className="bg-[#2c1d1b] text-white px-6 py-20"
      style={{
        backgroundImage: "url('background.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-30">
        <div className="flex flex-row justify-center gap-20 md:w-1/2">
          <img
            src="public/local1.jpg"
            alt="local"
            className="w-40 md:w-70 rounded-lg -rotate-6 shadow-lg"
          />
          <img
            src="public/local2.jpg"
            alt="local"
            className="w-40 md:w-70 rounded-lg rotate-6 shadow-lg"
          />
        </div>

        <div className="flex flex-col justify-between text-center md:text-center max-w-md">
          <h2 className="text-4xl font-bold mb-4">Localização</h2>

          <iframe
            className="w-full h-64 md:h-96 mb-4 rounded-md shadow-inner"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.4512356465236!2d-47.3290087!3d-22.3019689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8710050b8bb07%3A0xe51e8a591c3d498c!2sCh%C3%A1cara%20Talism%C3%A3!5e0!3m2!1spt-BR!2sbr!4v1720374343061!5m2!1spt-BR!2sbr"
          ></iframe>

          <p className="text-sm md:text-center">
            Estamos localizados na Rua Amigos da Baia em Araras-SP, próximo a
            antiga Estação Ferroviária do Elihu Root.
          </p>
        </div>
      </div>
    </section>
  );
}
