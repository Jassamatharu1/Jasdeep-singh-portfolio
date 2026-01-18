import Image from "next/image";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link?: string;
  githubLink?: string;
}

const featuredProjects: Project[] = [
  {
    id: 1,
    title: "UpTaste Website – HTML | CSS | Bootstrap | JavaScript ",
    description:
      "Designed and developed a professional, fully responsive website for a food business, integrating interactive JavaScript features for smooth navigation and dynamic user engagement, while leveraging Bootstrap to ensure a mobile-friendly, consistent experience across all devices.",
      link: "https://uptaste.store/",
      githubLink: "https://github.com/Jassamatharu1/UpTaste-Brar-Agro-Foods",
      image: "/projects/project1.png",
  },
  {
    id: 2,
    title:
      "AllFinder Search Engine – HTML | CSS | JavaScript | API Handling | DOM Manipulation",
    description:
      "Built a responsive multi-API search engine featuring debounced input, keyboard navigation, and real-time results using Fetch API and advanced DOM manipulation, with clean, scalable code optimized for performance and cross-device compatibility.",
    link: "https://jassamatharu1.github.io/AllFinder/",
    image: "/projects/project2.png",
    githubLink: "https://github.com/Jassamatharu1/AllFinder",
  },

  {
    id: 3,
    title: "MealUp Website – HTML | CSS | JavaScript",
    description:
      "Developed a responsive, user-friendly platform with optimized navigation, implementing dynamic JavaScript features to enhance interactivity and performance while ensuring cross-device compatibility and a clean, scalable code structure.",
    link: "https://jassamatharu1.github.io/MealUp/",
    image: "/projects/project3.png",
    githubLink: "https://github.com/Jassamatharu1/MealUp",
  },
];

export default function Projects(): React.JSX.Element {
  return (
    <section id="lab" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        {featuredProjects.map((project, index) => {
          const isEven = index % 2 === 1;

          return (
            <div key={project.id} className="mb-20 last:mb-0">
              <div
                className={`relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  isEven ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Text Content */}
                <div className={`${isEven ? "lg:col-start-2" : ""}`}>
                  <p className="text-purple-900 text-lg lg:text-xl mb-2 font-medium">
                    Featured Project
                  </p>
                  <h3 className="text-3xl lg:text-4xl font-bold text-black mb-6">
                    {project.title}
                  </h3>
                  {/* Description Card - extends over image */}
                  <div className="relative z-10 mb-6">
                    <div
                      className={`bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md rounded-2xl p-6 lg:p-8 border border-white/10 shadow-lg ${
                        isEven ? "lg:ml-[-20%]" : "lg:w-[calc(100%+20%)]"
                      }`}
                    >
                      <p className="text-black/90 text-base lg:text-lg leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {/* Website link */}
                    {project.link && (
                      <div className="flex gap-4">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-black hover:text-purple-400 transition-colors duration-200"
                          aria-label="Visit project website"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-6 h-6"
                          >
                            <circle cx="12" cy="12" r="10" />
                            <line x1="2" y1="12" x2="22" y2="12" />
                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                          </svg>
                        </a>
                      </div>
                    )}
                    {project.githubLink && (
                      <div className="flex gap-4">
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-black hover:text-purple-400 transition-colors duration-200"
                          aria-label="Visit project website"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                          </svg>
                        </a>
                      </div>
                    )}
                  </div>
                </div>

                {/* Image Content */}
                <div
                  className={`${isEven ? "lg:col-start-1 lg:row-start-1" : ""}`}
                >
                  <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden bg-slate-950 p-2 lg:p-3 shadow-2xl">
                    <div className="relative w-full h-full rounded-lg overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
