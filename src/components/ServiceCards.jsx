import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function ServiceCards() {
  const services = [
    {
      title: "Espaço",
      subtitle: "Confira o Lugar e faça sua reserva!",
      img: "Espaço1.jpg",
      href: "#espaço",
    },
    {
      title: "Aniversários",
      subtitle: "Comemore seu Aniversário com condições exclusivas",
      img: "aniversário.png",
      href: "#aniversario",
    },
    {
      title: "Eventos",
      subtitle: "Junte a galera e venha conhecer",
      img: "confraternizacao.jpg",
      href: "#eventos",
    },
  ];

  return (
    <section
      className="bg-cover bg-no-repeat bg-center py-20 px-6 text-white"
      style={{
        backgroundImage: "url('background.png')",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {services.map((s, i) => (
            <SwiperSlide key={i}>
              <div className="relative h-96 rounded-lg shadow-xl overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-60"
                  style={{ backgroundImage: `url(${s.img})` }}
                ></div>

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                  <h2 className="text-4xl font-poppins font-medium mb-4">
                    {s.title}
                  </h2>
                  <p className="text=sm mb-15">{s.subtitle}</p>
                  <a
                    href={s.href}
                    className="px-15 py-2 border border-white rounded-full text-white font-poppins hover:bg-white hover:text-black transition"
                  >
                    Saiba Mais
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
