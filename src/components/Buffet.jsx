export default function Buffet() {
  return (
    <section
      className="bg-[#2c1d1b] text-white px-6 py-20"
      style={{
        backgroundImage: "url('background.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-4xl font-bold mb-10">Buffet</h2>

        <div className="flex flex-col md:flex-row gap-6 items-center justify-center mb-8">
          <img
            src="public/buffet1.jpg"
            alt="Buffet"
            className="w-full md:w-[500px] rounded shadow-lg"
          />
          <img
            src="public/buffet2.jpg"
            alt="Buffet2"
            className="w-full md:w-[500px] rounded shadow-lg"
          />
        </div>

        <div className="mb-4">
          <p className="max-w-xl mn-6 text-sm md:text-base">
            Na talismã temos diversos tipos de buffets para qualquer tipo de
            festa ou confraternização
          </p>
        </div>
        <a
          href="https://wa.me/5519996420099"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#FF4F00] text-white font-poppins font-medium text-sm px-[20px] py-[10px] drop-shadow-lg rounded"
        >
          Solicite um Orçamento
        </a>
      </div>
    </section>
  );
}
