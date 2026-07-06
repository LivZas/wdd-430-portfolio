import ProjectList from '@/components/ProjectList';
const projects = [
  {
    title: 'Dragon Battle Simulator',
    description: 'An rpg game made in Java.',
    technologies: ['Java.'],
    link: 'https://github.com/LivZas/DragonBattleSimulator'
  },
  {
    title: 'Disney Princess Quiz',
    description: 'A game made in Kotlin to know which Disney princess are you.',
    technologies: ['Kotlin.'],
    link: 'https://github.com/LivZas/DisneyPrincessQuiz'
  }
];

export default function Home() { 
  return (
    <main className="container mx-auto px-4 py-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>
        <p className="text-lg text-gray-400">
          I'm a full-stack developer learning Next.js and React. Here are some of my recent projects.
        </p>
      </section>
      <ProjectList projects={projects} />
    </main>
  );
}