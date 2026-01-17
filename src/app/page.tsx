import Image from 'next/image'


export default function Home() {
  return (
   <div>
    <section
  id="home"
  className="flex flex-col md:flex-row items-center justify-center gap-10 my-40 px-4 md:px-20"
>
  {/* Text Content */}
  <div className="flex flex-col items-start gap-6 max-w-xl">
    <p>Hello</p>
    <h1 className="text-white text-5xl md:text-6xl font-bold leading-tight">
      I&#x275B;m Francis Edgard <br />
      O. Ibañez
    </h1>

    <p className="text-[var(--text)] text-lg md:text-xl leading-relaxed">
      A 4th year BSIT student at Colegio de Montalban seeking an On-the-Job
      Training &#x2768;OJT&#x2769; opportunity as a Web and Mobile Front-End
      Developer. I am skilled in building responsive, user-friendly interfaces
      and eager to apply my academic knowledge while continuously improving my
      skills in a professional environment.
    </p>

    <button className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:opacity-90 transition">
      <p className='font-bold'>View my projects</p>
    </button>
  </div>

  {/* Profile Image */}
  <Image
    src="/profile.jpg"
    width={520}
    height={520}
    className="rounded-full object-cover"
    alt="Francis Edgard profile photo"
    priority
  />
</section>

    <section id="skills" className="bg-white w-full h-238">
      <h1 className="text-black mt-52">Hello World</h1>
    </section>
   </div>
  );
}
