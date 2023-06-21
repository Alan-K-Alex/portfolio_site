
import dp from '../Images/Alan_photo.jpeg'

export default function About() {

return(
    <section id="about" className="text-gray-400 bg-gray-900 body-font">
    <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
          Hi, I'm Alan K Alex.
          <br className="hidden lg:inline-block" />I love  building Stuffs.
          
        </h1>
        <p className="mb-8 leading-relaxed">
         I am BTech CSE 4th Year Student from VIT Chennai.I have been intrigued by the world of tech from a very young age and aspire to create my on mark in this fascinating field.Talking about my interests, I am an AI/ML enthusiast and a keen problem solver who loves coding and building apps and websites.  
        </p>
        <div className="flex justify-center">
          <a
            href="#contact"
            className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
            Work With Me
          </a>
          <a
            href="#projects"
            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
            Projects
          </a>
          <a
            href="https://drive.google.com/file/d/1O68FPX1PagVyvLafu_xb1BQMy7P0vSvx/view?usp=sharing"
            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
            Resume
          </a>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img
          className="object-cover object-center rounded"
          alt="dp"
          src={dp} width="250" height="250" 
        />
      </div>
    </div>
  </section>
);







}
