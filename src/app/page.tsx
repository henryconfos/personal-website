import dynamic from "next/dynamic";
import Image from "next/image";


export default function Home() {
  return (
    <main>
      <div className="head">
        <div className="flex justify-center">
          <ul className="flex flex-wrap text-gray-900 dark:text-black nav-list">
            <li className="me-4 hover:underline md:me-6">About</li>
            <li className="me-4 hover:underline md:me-6"><a href="#projects">Projects</a></li>
            <li className="me-4 hover:underline md:me-6">Contact</li>
          </ul>
        </div>
      </div>
      <div className="splash">
        <div className="splash-inner">
          <div className="splash-text">
            <h1 className="text-5xl font-bold">G'Day I'm Henry.</h1>
            <h3 className="text-2xl mt-6">A <span className="active">driven</span> software engineer committed to building <span className=" font-bold">intuitive</span> and <span className=" font-bold">visually</span> compelling products.</h3>
            <p className="text-lg mt-6"> I am currently completing a double degree of Advanced Computing and Commerce at the University of Sydney, majoring in Software Engineering and Finance. </p>
          </div>
          <div className="game">
          {/* <iframe src="https://openprocessing.org/sketch/2196247/embed/" width="540" height="500"></iframe> */}
          </div>
        </div>
      </div>
      <section id="projects" className="projects">
        <div className="projects-inner">
            <h1 className="mt-10 text-4xl underline font-bold">Projects</h1>
        </div>
      </section>

    </main>
  );
}
