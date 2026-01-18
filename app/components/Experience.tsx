import Image from "next/image";
import Link from "next/link";

interface ExperienceCard {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const experienceCards: ExperienceCard[] = [
  {
    id: 1,
    title: "Promatics - UI/UX Designer",
    description:
      "Worked as a UI/UX Designer using Figma and Adobe tools to design intuitive website and mobile app interfaces, and translated designs into responsive static websites.",
    icon: "/cards/card-1.png",
  },
  {
    id: 2,
    title: "Freelance - Web Developer",
    description:
      "Worked as a Freelance Web Developer under guidance, designing and developing responsive websites for local businesses to enhance their online presence.",
    icon: "/cards/card-2.png",
  },
  {
    id: 3,
    title: "Nirwan Infotech - Web Developer Trainee",
    description:
      "Worked with HTML, CSS, JavaScript, DOM manipulation, API handling, and Tailwind to design, develop, and maintain responsive web applications.",
    icon: "/cards/card3.png",
  },
  {
    id: 4,
    title: "GN Infotech - Web Developer Trainee",
    description:
      "Gained hands-on experience in HTML, CSS, JavaScript, and Tailwind CSS to build modern, responsive, and dynamic web applications.",
    icon: "/cards/card4.jpg",
  },
];

export default function Experience(): React.JSX.Element {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl lg:text-5xl font-bold text-black mb-12 text-center">
          Work Experience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experienceCards.map((card) => (
            <div
              key={card.id}
              // className="bg-gradient-to-r from-cyan-400 via-cyan-800 to-cyan-400  backdrop-blur-sm rounded-xl p-6 border-t-3 border-cyan-800 hover:shadow-2xl hover:shadow-cyan-800 flex items-center gap-4"

              className="bg-white  backdrop-blur-sm rounded-xl p-6 border-t-3 border-purple-900 hover:shadow-2xl hover:shadow-purple-200 flex items-center gap-4"
            >
              <div className="mb-4 ">
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={160}
                  height={160}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">
                  {card.title}
                </h3>
                <p className="text-black/70 text-sm mb-4">{card.description}</p>
                {/* <Link
                  href="https://ibiimemon.com/lab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 font-medium text-sm transition-colors inline-block"
                >
                  LEARN MORE →
                </Link> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
