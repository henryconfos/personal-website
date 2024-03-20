import dynamic from "next/dynamic";
import Image from "next/image";


export default function Home() {

  const projects = [
    {
      id: 1,
      name: 'Personal Website',
      image: '/path/to/image1.jpg',
      techStack: 'React, TypeScript, Next.js, Tailwind CSS',
      description: 'This is a brief description of Project 1, outlining its main features and purpose.',
      repoLink: 'https://github.com/henryconfos/personal-website',
      isVertical: false,
    },
    {
      id: 2,
      name: 'Locals Web App',
      image: './wa.png',
      techStack: 'Express, Node.js, Mongo DB, Tailwind CSS, Google Cloud Platform',
      description: '',
      repoLink: 'https://github.com/henryconfos/locals-web',
      liveLink: 'https://localsloyalty.com.au/',
      isVertical: false,
    },
    {
      id: 3,
      name: 'Locals IOS App',
      image: '/hs.jpg',
      techStack: 'React Native, TypeScript ,Firebase, AJAX',
      description: 'The Locals iOS App connects with the REST API that also services the Web App.',
      repoLink: 'https://github.com/henryconfos/locals-ios',
      isVertical: true,
    },
    {
      id: 4,
      name: 'Corners Word Game',
      image: '/c.png',
      techStack: 'HTML, CSS, JavaScript, JQuery',
      description: 'An overview of Project 3, highlighting its innovative approach to solving problem Z.',
      repoLink: 'https://github.com/henryconfos/henryconfos.github.io',
      liveLink: 'https://henryconfos.github.io/',
      isVertical: false,
    },
    // Add more projects as needed
  ];


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
            <p className="text-lg mt-6"> I am currently completing a double degree of Advanced Computing and Commerce at the University of Sydney, majoring in Software Engineering and Finance.</p>
            <p className="text-lg mt-6"><span className="font-bold">I'm also 1/3 of </span><a href="https://localsloyalty.com.au/" className="text-blue-500 hover:text-blue-700 font-bold">Locals.</a> A software startup that aims to democratise AI tools for small businesses.</p>
          </div>
          <div className="game">
          {/* <iframe src="https://openprocessing.org/sketch/2196247/embed/" width="540" height="500"></iframe> */}
          </div>
        </div>
      </div>
      <section id="projects" className="projects">
        <div className="projects-inner">
          <h1 className="mt-6 text-2xl md:text-4xl underline font-bold p-head">Projects</h1>
          <div className="flex overflow-x-auto mt-5">
            {projects.map((project) => (
              <div key={project.id} className="bg-white shadow-lg rounded-lg m-4 p-6 flex-none" style={{ width: '350px' }}>
                <img src={project.image} alt={project.name} className="h-40 rounded w-full object-cover"/>
                <h2 className="text-xl font-bold mt-2">{project.name}</h2>
                <p className="text-gray-700 mt-2 italic">{project.techStack}</p>
                <p className="text-gray-600 mt-4">{project.description}</p>
                <a href={project.repoLink} className="text-blue-500 hover:text-blue-700 mt-2 inline-block">View Repository</a>
                {project.liveLink && (
                  <a href={project.liveLink} className="text-green-500 hover:text-green-700 mt-2 ml-4 inline-block">View Live</a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
