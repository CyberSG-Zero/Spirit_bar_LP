import React, { useState } from 'react';

const PotionSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Datos actualizados para usar imágenes
  const slides = [
    {
      id: 0,
      name: "Soul Bomb",
      category: "Underworld v.1",
      alcoholLevel: "10%",
      description: "Bebida mística que captura la esencia del Inframundo. Con un vibrante color rosado profundo, esta mezcla única combina sabores intensos con un toque sobrenatural. Ideal para los espíritus que buscan un toque de aventura. Su efecto permite un viaje sensorial extraordinario que hará que hasta cada sorbo sea un paso más hacia la más allá.",
      mainImage: "./images/drinks/Bebida especial 2.png", // Ruta a tu imagen principal
      ingredients: [
        { name: "Mora", image: "./images/ingredients/Mora.avif" },
        { name: "Pitahaya", image: "./images/ingredients/Pitahaya.avif" },
        { name: "Zumo de alma", image: "./images/ingredients/Zumo de alma.avif" }
      ],
    },
    {
      id: 1,
      name: "Corazón Rojo",
      category: "Love Potions v.2",
      alcoholLevel: "15%",
      description: "Una poción carmesí que despierta los sentimientos más profundos. Elaborada con pétalos de rosa encantados y esencia de corazón puro, esta bebida mágica intensifica las emociones y crea conexiones místicas entre las almas.",
      mainImage: "./images/drinks/Trago rojo.avif", // Ruta a tu imagen principal
      ingredients: [
        { name: "Mora", image: "./images/ingredients/Mora.avif" },
        { name: "Zumo de alma", image: "./images/ingredients/Zumo de alma.avif" }
      ],
    },
    {
      id: 2,
      name: "Bebida Naranja",
      category: "Victory Series v.1",
      alcoholLevel: "20%",
      description: "El elixir de los campeones, forjado con polvo de estrella dorado y esencia de triunfo. Esta poción brillante otorga confianza sobrenatural y la fuerza necesaria para conquistar cualquier desafío que se presente.",
      mainImage: "./images/drinks/Trago naranja.avif", // Ruta a tu imagen principal
      ingredients: [
        { name: "Pitahaya", image: "./images/ingredients/Pitahaya.avif" },
        { name: "Prisma", image: "./images/ingredients/Prisma.avif" }
      ],
    },
    {
      id: 3,
      name: "Bebida Verde",
      category: "Forest Magic v.1",
      alcoholLevel: "8%",
      description: "Una mezcla verde esmeralda que conecta con la sabiduría ancestral del bosque. Preparada con hierbas místicas y rocío de luna llena, esta poción otorga claridad mental y armonía con la naturaleza.",
      mainImage: "./images/drinks/Trago verde.avif", // Ruta a tu imagen principal
      ingredients: [
        { name: "Pitahaya", image: "./images/ingredients/Pitahaya.avif" },
        { name: "Zumo de alma", image: "./images/ingredients/Zumo de alma.avif" }
      ],
    },
    {
      id: 4,
      name: "Bebida Especial",
      category: "Cosmic Series v.1",
      alcoholLevel: "25%",
      description: "La poción más misteriosa de nuestra colección, de color púrpura profundo como el vacío cósmico. Esta bebida trascendental abre portales a dimensiones desconocidas y revela secretos del universo.",
      mainImage: "./images/drinks/Bebida especial 1.avif", // Ruta a tu imagen principal
      ingredients: [
        { name: "Mora", image: "./images/ingredients/Mora.avif" },
        { name: "Pitahaya", image: "./images/ingredients/Pitahaya.avif" },
        { name: "Prisma", image: "./images/ingredients/Prisma.avif" }
      ],
    },
    {
      id: 5,
      name: "Bebida Azul",
      category: "Pure Energy v.1",
      alcoholLevel: "12%",
      description: "Un elixir cristalino que pulsa con energía pura. Destilado a partir de cristales de cuarzo lunar y agua de manantial sagrado, esta poción restaura el equilibrio espiritual y purifica el aura.",
      mainImage: "./images/drinks/Trago azul.avif", // Ruta a tu imagen principal
      ingredients: [
        { name: "Mora", image: "./images/ingredients/Mora.avif" },
        { name: "Prisma", image: "./images/ingredients/Prisma.avif" }
      ],
    }
  ];

  // Imágenes para los bullets de navegación
  const bulletImages = [
    { image: "./images/drinks/Bebida especial 2.avif", color: "from-pink-500 to-purple-500", name: "Soul Bomb" },
    { image: "/images/drinks/Trago rojo.avif", color: "from-red-500 to-pink-500", name: "Corazón Rojo" },
    { image: "./images/drinks/Trago naranja.avif", color: "from-yellow-500 to-orange-500", name: "Bebida Naranja" },
    { image: "./images/drinks/Trago verde.avif", color: "from-green-500 to-emerald-500", name: "Bebida Verde" },
    { image: "./images/drinks/Bebida especial 1.avif", color: "from-purple-500 to-violet-500", name: "Bebida Especial" },
    { image: "./images/drinks/Trago azul.avif", color: "from-blue-500 to-cyan-500", name: "Bebida Azul" }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <section className="w-full flex mx-auto justify-center items-center bg-[#1C1B1B] text-white overflow-hidden shadow-2xl py-[4rem]">
      <div className=" w-full flex-col justify-center items-center max-w-[1440px] transition-all duration-500 px-[0.875rem] md:px-[4rem]">
        <div>
          <h2 className='font-[gobernador] text-[4.5rem] text-center text-primary'>Drinks</h2>
        </div>
        <div className="hidden w-full items-center mb-6 gap-[1rem] md:flex md:justify-end">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="bg-gray-800/50 hover:bg-gray-700/70 rounded-full p-3 transition-all duration-200 hover:scale-110 border border-gray-600"
          >
            ←
          </button>
          
          <button
            onClick={nextSlide}
            className="bg-gray-800/50 hover:bg-gray-700/70 rounded-full p-3 transition-all duration-200 hover:scale-110 border border-gray-600"
          >
            →
          </button>
        </div>

        <div className="w-full flex flex-col-reverse gap-8 items-center md:flex-row md:justify-center">
          {/* Left Sidebar - Bullet Navigation */}
          <div className="flex flex-wrap gap-4 md:flex-col md:w-[30%]">
            {bulletImages.map((bullet, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`relative w-18 h-18 transition-all duration-350 transform md:w-[fit-content] md:px-[0.5rem] flex items-center justify-center overflow-hidden ${
                  currentSlide === index 
                    ? `[&_p]:bg-primary [&_img]:bg-primary scale-105` 
                    : '[&_p]:bg-black/50 [&_img]:bg-black/50'
                }`}
              >
                <div className='flex items-center w-[auto] transition-all duration-300'>
                  <img 
                    src={bullet.image} 
                    alt={`Potion ${index + 1}`}
                    className="w-10 h-10 object-cover md:w-auto md:h-auto border-2 border-terceary"
                    onError={(e) => {
                      // Fallback en caso de que la imagen no cargue
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <p className='hidden md:block font-[gobernador] text-[1.5rem]/[0.8em]'>
                    {bullet.name}
                  </p>
                </div>
                {/* <div className="hidden text-xl">🧪</div>
                {currentSlide === index && (
                  <div className="absolute -inset-1"></div>
                )} */}
              </button>
            ))}
          </div>

          {/* Main Content Area */}
          <div className="w-full flex flex-col gap-[1.5rem] items-center md:flex-row">
            {/* Potion Display */}
            <div className="relative md:w-[50%] flex justify-end">
              <div className="max-w-[30rem] max-h-[30rem] flex items-center justify-center overflow-hidden md:w-full">
                <img 
                  src={currentSlideData.mainImage} 
                  alt={currentSlideData.name}
                  className="w-32 h-32 object-cover md:h-full md:w-full aspect-square md:object-contain"
                  // onError={(e) => {
                  //   // Fallback en caso de que la imagen no cargue
                  //   e.target.style.display = 'none';
                  //   e.target.nextSibling.style.display = 'block';
                  // }}
                />
                {/* <div className="hidden text-8xl">🧪</div> */}
                {/* <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl"></div> */}
              </div>
              
              {/* Floating particles effect */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full animate-bounce opacity-60"></div>
              <div className="absolute top-1/4 -left-3 w-3 h-3 bg-pink-400 rounded-full animate-pulse opacity-70"></div>
              <div className="absolute bottom-1/4 -right-1 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-50"></div>
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col space-y-4 gap-[0.875rem] md:w-full">
              <div>
                <div className="text-orange-400 text-sm font-medium mb-1">
                  [ {currentSlideData.category} ]
                </div>
                <h1 className="text-[3.5rem] font-[gobernador] mb-2">{currentSlideData.name}</h1>
                <div className="bg-white text-black px-3 py-1 rounded inline-block font-bold text-sm">
                  ■ Grado de alcohol {currentSlideData.alcoholLevel}
                </div>
              </div>

              <p className="text-gray-200 leading-relaxed text-sm max-w-lg">
                {currentSlideData.description}
              </p>

              {/* Ingredients */}
              <div className="flex gap-[1rem] items-center flex-wrap">
                {currentSlideData.ingredients.map((ingredient, idx) => (
                  <div key={idx} className="relative group flex items-center gap-2">
                    <div className="w-15 h-15 bg-gradient-to-br from-white/10 to-white/5 rounded-lg flex items-center justify-center backdrop-blur-sm border border-white/20 overflow-hidden">
                      <img 
                        src={ingredient.image} 
                        alt={ingredient.name}
                        className="w-8 h-8 object-cover rounded"
                        onError={(e) => {
                          // Fallback en caso de que la imagen no cargue
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'block';
                        }}
                      />
                      <div className="hidden text-lg">🧪</div>
                    </div>
                    
                    {/* Tooltip con el nombre del ingrediente */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-black/80 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                      {ingredient.name}
                    </div>
                    
                    {idx < currentSlideData.ingredients.length - 1 && (
                      <div className="text-orange-400 text-[2.5em] font-[gobernador]">
                        +
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Slide Indicator */}
        <div className="flex justify-center mt-8 gap-2">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`h-1 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'w-8 bg-white' : 'w-2 bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PotionSlider;