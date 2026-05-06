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
            Visionary Software Engineer, Consultant, Code Tinkerer and Father of Two.
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
        A seasoned front-end focused software developer with over 15 years of experience working in various
        industries such as large to mid-size consulting companies and banking. I am a highly results-oriented
        and versatile professional who excels in developing and implementing mission-critical solutions. I have
        excellent technical skills enabling me to effectively analyze, design, and implement efficient and
        production-ready code at a reasonable cost.
      </p>

      <h3 className="text-lg font-semibold mb-4">Skills &amp; Expertise</h3>
      <div className="flex flex-wrap gap-2 mb-10">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 bg-gray-100 border border-gray-200 text-gray-700 text-sm rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>

      <h3 className="text-lg font-semibold mb-4">Education</h3>
      <div className="space-y-6">
        <div>
          <div className="flex items-start justify-between gap-2">
            <div>
              <p className="font-medium text-gray-900">Data Science Certificate Program</p>
              <p className="text-sm text-gray-500 italic">University of Waterloo, Waterloo, Canada</p>
            </div>
            <span className="text-sm text-gray-400 whitespace-nowrap">2024 – 2026</span>
          </div>
          <p className="text-sm text-gray-600 mt-1">
            Completed a four-course certification in Data Science as part of WatSPEED: Foundations of Data
            Science, Statistics for Data Science, Machine Learning, Big Data Management Systems and Tools.
          </p>
        </div>
        <div>
          <div className="flex items-start justify-between gap-2">
            <div>
              <p className="font-medium text-gray-900">Honors Computer Engineering — Bachelor of Applied Science</p>
              <p className="text-sm text-gray-500 italic">University of Waterloo, Waterloo, Canada</p>
            </div>
            <span className="text-sm text-gray-400 whitespace-nowrap">2005 – 2010</span>
          </div>
          <p className="text-sm text-gray-600 mt-1">
            Artificial Intelligence, Computer Networks and Security, Software Engineering, Database Systems,
            Real-time Operating Systems, Data Structures and Algorithms, Distributed and Network Computing.
          </p>
        </div>
      </div>
    </div>
  );
}
