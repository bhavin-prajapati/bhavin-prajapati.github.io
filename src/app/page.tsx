import Image from 'next/image';

const skills = [
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Python',
  'Java',
  'AWS',
  'Docker',
  'Kubernetes',
  'GraphQL',
  'REST APIs',
  'PostgreSQL',
  'MongoDB',
];

export default function About() {
  return (
    <div>
      {/* Mobile-only hero */}
      <div className="lg:hidden flex items-center gap-4 mb-8">
        <Image
          src="/photo.jpg"
          alt="Bhavin Prajapati"
          width={64}
          height={64}
          className="rounded-full border border-gray-200"
        />
        <div>
          <h1 className="text-xl font-bold">Bhavin Prajapati</h1>
          <p className="text-sm text-gray-500">
            Visionary Coder, Father, Astute Observationist
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-6 hidden lg:block">About</h2>

      <p className="text-gray-600 leading-relaxed mb-6">
        Hi, I&apos;m Bhavin — a software engineer with a passion for building
        elegant solutions to complex problems. I love tinkering with code,
        exploring new technologies, and sharing my thoughts on life, travels,
        and everything in between.
      </p>

      <p className="text-gray-600 leading-relaxed mb-8">
        My code tinkering experiments, M&amp;Ms, travels and thoughts on life.
        With years of experience building scalable systems and leading
        engineering teams, I focus on creating software that makes a real
        difference.
      </p>

      <h3 className="text-lg font-semibold mb-4">Skills &amp; Expertise</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 bg-gray-100 border border-gray-200 text-gray-700 text-sm rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
