import { useRef, useState } from 'preact/hooks';

function isSpecialty(content) {
  return !('semester1' in content);
}

function Curriculum({ yearCodeName, content, className }) {
  const carousel = useRef();
  const carouselSlide = useRef();
  const [selectedSpecialty, setSelectedSpecialty] = useState(
    isSpecialty(content) ? Object.keys(content)[0] : null
  );

  function slidePrev() {
    const slideWidth = carouselSlide.current.clientWidth;
    carousel.current.scrollLeft -= slideWidth + 20;
  }

  function slideNext() {
    const slideWidth = carouselSlide.current.clientWidth;
    carousel.current.scrollLeft += slideWidth + 20;
  }

  return (
    <section id={yearCodeName} class={`text-blue-dark ${className}`}>
      <div class="mx-auto max-w-[67.5rem] rounded-lg bg-blue-dark px-2 pb-14 pt-5 shadow-curriculum sm:px-16">
        <h2 class="year-codename-underline relative z-10 mx-auto w-fit text-4xl font-bold text-beige">
          {yearCodeName}
        </h2>
        {isSpecialty(content) && (
          <div class="mt-4 flex justify-center gap-10">
            {Object.keys(content).map((specialty) => (
              <button
                onClick={() => setSelectedSpecialty(specialty)}
                class={`text-[2rem] font-bold text-beige ${
                  selectedSpecialty === specialty && 'underline'
                }`}>
                {specialty}
              </button>
            ))}
          </div>
        )}
        <div class="relative mt-9">
          <button
            onClick={slidePrev}
            class="absolute -bottom-11 left-1/3 sm:-left-10 sm:bottom-auto sm:top-64 lg:hidden">
            <img src="/images/chevron-left.svg" alt="chevron left icon" width="27" />
          </button>
          <div ref={carousel} class="flex gap-5 overflow-hidden transition">
            <div ref={carouselSlide} class="w-full flex-[1_0_100%] lg:flex-auto">
              <h4 class="text-center text-2xl font-bold text-beige">semester 1</h4>
              <div class="mt-4 flex min-h-[30rem] flex-col gap-5 rounded-lg bg-beige px-3 py-6 sm:gap-3 sm:px-5">
                {isSpecialty(content)
                  ? content[selectedSpecialty]?.semester1.map((semesterClass) => (
                      <a
                        href={semesterClass.link}
                        class="flex items-center gap-2 text-lg leading-tight">
                        <span class="flex-shrink-0">
                          <img
                            src="/images/document-icon.svg"
                            alt="text document icon"
                            width="35"
                          />
                        </span>
                        <span>{semesterClass.title}</span>
                      </a>
                    ))
                  : content.semester1.map((semesterClass) => (
                      <a
                        href={semesterClass.link}
                        class="flex items-center gap-2 text-lg leading-tight">
                        <span class="flex-shrink-0">
                          <img
                            src="/images/document-icon.svg"
                            alt="text document icon"
                            width="35"
                          />
                        </span>
                        <span>{semesterClass.title}</span>
                      </a>
                    ))}
              </div>
            </div>
            <div class="carousel-slide w-full flex-[1_0_100%] lg:flex-auto">
              <h4 class="text-center text-2xl font-bold text-beige">semester 2</h4>
              <div class="mt-4 flex min-h-[30rem] flex-col gap-5 rounded-lg bg-beige px-3 py-6 sm:gap-3 sm:px-5">
                {isSpecialty(content)
                  ? content[selectedSpecialty]?.semester2.map((semesterClass) => (
                      <a
                        href={semesterClass.link}
                        class="flex items-center gap-2 text-lg leading-tight">
                        <span class="flex-shrink-0">
                          <img
                            src="/images/document-icon.svg"
                            alt="text document icon"
                            width="35"
                          />
                        </span>
                        <span>{semesterClass.title}</span>
                      </a>
                    ))
                  : content.semester2.map((semesterClass) => (
                      <a
                        href={semesterClass.link}
                        class="flex items-center gap-2 text-lg leading-tight">
                        <span class="flex-shrink-0">
                          <img
                            src="/images/document-icon.svg"
                            alt="text document icon"
                            width="35"
                          />
                        </span>
                        <span>{semesterClass.title}</span>
                      </a>
                    ))}
              </div>
            </div>
          </div>
          <button
            onClick={slideNext}
            class="absolute -bottom-11 right-1/3 z-10 sm:-right-10 sm:bottom-auto sm:top-64 lg:hidden">
            <img src="/images/chevron-right.svg" alt="" width="27" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Curriculum;
