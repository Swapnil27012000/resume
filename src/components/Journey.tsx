import { Card } from "./ui/Card";

interface JourneyItem {
    id: string;
    date: string;
    title: string;
    subtitle: string;
    description?: string;
}

const educationData: JourneyItem[] = [
    {
        id: "1",
        date: "2025 - Present",
        title: "Master of Information Technology",
        subtitle: "University of Mumbai",
        description: "Specialized in Artificial Intelligence and Machine Learning Interaction."
    },
    {
        id: "2",
        date: "2018 - 2021",
        title: "Bachelor of Computer Science",
        subtitle: "University of Mumbai",
        description: "Specialized in Computer Science."
    },
    // {
    //     id: "3",
    //     date: "2018 - 2019",
    //     title: "Full Stack Web Development Bootcamp",
    //     subtitle: "Tech Academy",
    //     description: "Intensive 6-month program covering modern web technologies."
    // }
];

const experienceData: JourneyItem[] = [
    {
        id: "1",
        date: "Nov 2025 - Present",
        title: "Senior Developer | Database Administrator",
        subtitle: "University of Mumbai",
        description: "Leading a team of developers to build award-winning websites for global brands."
    },
    {
        id: "2",
        date: "Feb - June 2023",
        title: "Web Developer",
        subtitle: "ProDigy Technologies.",
        description: "Developed and maintained the company's main product dashboard using React and Node.js."
    },
    {
        id: "3",
        date: "July - Dec 2022",
        title: "Operation Executive",
        subtitle: "Infosys Ltd.",
        description: "Worked on various freelance projects helping small businesses establish their online presence."
    }
];

const publicationsData: JourneyItem[] = [
    {
        id: "1",
        date: "2026",
        title: "Research Paper Published",
        subtitle: "International Journal of Science and Research (IJSR)",
        description: "Published a research paper on 'A Comprehensive Survey on AI-Driven Mammography-Based Breast Cancer Detection."
    }
];

export const Journey = () => {
    return (
        <section id="portfolio" className="py-20 bg-[#050510]">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My Academic and <br />
                    <span className="text-[#00f3ff]">Professional Journey</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* Publications Column */}
                    <div>
                        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                            <span className="w-2 h-8 bg-gradient-to-b from-[#00f3ff] to-[#bd00ff] rounded-full block"></span>
                            Publications
                        </h3>
                        <div className="space-y-6">
                            {publicationsData.map((item) => (
                                <Card key={item.id} className="group">
                                    <span className="text-sm font-mono text-[#00f3ff] mb-2 block">{item.date}</span>
                                    <h4 className="text-xl font-bold text-white mb-1 group-hover:text-[#00f3ff] transition-colors">{item.title}</h4>
                                    <p className="text-gray-400 text-sm mb-4">{item.subtitle}</p>
                                    <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                                </Card>
                            ))}
                        </div>
                    </div>
                    
                    {/* Education Column */}
                    <div>
                        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                            <span className="w-2 h-8 bg-gradient-to-b from-[#00f3ff] to-[#bd00ff] rounded-full block"></span>
                            Education
                        </h3>
                        <div className="space-y-6">
                            {educationData.map((item) => (
                                <Card key={item.id} className="group">
                                    <span className="text-sm font-mono text-[#00f3ff] mb-2 block">{item.date}</span>
                                    <h4 className="text-xl font-bold text-white mb-1 group-hover:text-[#00f3ff] transition-colors">{item.title}</h4>
                                    <p className="text-gray-400 text-sm mb-4">{item.subtitle}</p>
                                    <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* Experience Column */}
                    <div>
                        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                            <span className="w-2 h-8 bg-gradient-to-b from-[#bd00ff] to-[#00f3ff] rounded-full block"></span>
                            Experience
                        </h3>
                        <div className="space-y-6">
                            {experienceData.map((item) => (
                                <Card key={item.id} className="group">
                                    <span className="text-sm font-mono text-[#bd00ff] mb-2 block">{item.date}</span>
                                    <h4 className="text-xl font-bold text-white mb-1 group-hover:text-[#bd00ff] transition-colors">{item.title}</h4>
                                    <p className="text-gray-400 text-sm mb-4">{item.subtitle}</p>
                                    <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                                </Card>
                            ))}
                        </div>
                    </div>

                    

                </div>
            </div>
        </section>
    );
};

