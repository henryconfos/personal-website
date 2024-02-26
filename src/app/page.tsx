import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="head">
        <div className="left basis-1/4">
          <h1>* HENRY CONFOS</h1>
        </div>
        <div className="flex justify-center">
          <ul className="flex flex-wrap text-gray-900 dark:text-white">
            <li className="active me-4 hover:underline md:me-6">About</li>
            <li className="me-4 hover:underline md:me-6">Projects</li>
            <li className="me-4 hover:underline md:me-6">Contact</li>
          </ul>
        </div>
      </div>
      <div className="container content-start mx-auto text-center mt-20 text-6xl justify-center">
        <h1 className="hero-text">
          A <span className="active">driven</span> front-end software engineer committed to building <span className="italic">intuitive</span> and <span className="italic">visually</span> compelling products.
        </h1>
        <Image src="/profile.jpg" alt="Image Description" className="mx-auto mt-10 rounded-full" width={150} height={150} />
      </div>
    </main>
  );
}
