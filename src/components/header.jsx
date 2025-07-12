export default function Header() {
  return (
    <header className="fixed z-50 w-full bg-[#3E2B2F] py-1 px-4  md:px-[60px] lg:px-[150px] xl:px[100px] flex items-center justify-between">
      <a href="home">
        <img
          src="/logo.png"
          alt="Logo Talisma Eventos"
          className="h-[80px] w-auto md:h-[120px]"
        />
      </a>

      <nav className=" hidden md:flex items-center gap-[60px] text-white text-base font-poppins font-medium ">
        <a href="#" className="text-[#FF4F00] ">
          Home
        </a>
        <a href="#">Sobre nós</a>
        <a href="#">Fotos</a>
        <a href="#">Cardápio</a>
      </nav>

      <div className="hidden md:block">
        <a
          href="https://wa.me/5519996420099?text=Olá%2C%20gostaria%20de%20solicitar%20um%20orçamento"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#FF4F00] text-white font-poppins font-medium text-base px-[16px] py-[8px] rounded shadow"
        >
          Solicite um Orçamento
        </a>
      </div>

      <div className="md:hidden flex items-center gap-5">
        <a
          href="https://wa.me/5519996420099"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#FF4F00] text-white font-poppins font-medium text-sm px-[10px] py-[10px] drop-shadow-lg rounded"
        >
          Solicite um Orçamento
        </a>

        <button>
          <svg
            className="w-6 h6 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
