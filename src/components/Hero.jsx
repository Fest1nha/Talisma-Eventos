export default function Hero() {
  return (
    <section className="relative w-full h-[60vh] md:h-150 overflow-hidden">
      {/* Vídeo de fundo */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover opacity-90 brightness-70"
        src="/videos/Video_background_.mp4"
        type="video/mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-opacity-40 z-10" />

      {/* Texto centralizado */}
      <div className="relative z-20 flex items-center justify-center h-full px-4 text-center">
        <h1 className="text-white text-3xl md:text-5xl font-poppins font-medium leading-tight">
          Eventos Sociais e<br />
          Corporativos em um espaço
          <br />
          único em Araras
        </h1>
      </div>
    </section>
  );
}
