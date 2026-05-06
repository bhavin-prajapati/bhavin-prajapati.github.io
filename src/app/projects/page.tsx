'use client';

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';

interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  category: 'web' | 'oss' | 'other';
}

const projects: Project[] = [
  {
    title: 'E-Commerce Platform',
    description:
      'A full-stack e-commerce platform with real-time inventory management, payment processing, and admin dashboard.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    link: '#',
    category: 'web',
  },
  {
    title: 'Task Management API',
    description:
      'RESTful API for task management with authentication, role-based access, and real-time notifications.',
    tech: ['Express', 'TypeScript', 'MongoDB', 'WebSocket'],
    link: '#',
    category: 'web',
  },
  {
    title: 'React Component Library',
    description:
      'An open-source library of accessible, customizable React UI components with comprehensive documentation.',
    tech: ['React', 'TypeScript', 'Storybook', 'Jest'],
    link: '#',
    category: 'oss',
  },
  {
    title: 'CLI Build Tool',
    description:
      'A command-line build tool that simplifies bundling and deployment of Node.js applications.',
    tech: ['Node.js', 'TypeScript', 'esbuild'],
    link: '#',
    category: 'oss',
  },
  {
    title: 'Weather Dashboard',
    description:
      'A minimal weather dashboard with location-based forecasts and historical data visualization.',
    tech: ['Next.js', 'Tailwind CSS', 'Chart.js'],
    link: '#',
    category: 'other',
  },
  {
    title: 'Markdown Note App',
    description:
      'A local-first markdown note-taking app with folder organization and full-text search.',
    tech: ['Electron', 'React', 'SQLite'],
    link: '#',
    category: 'other',
  },
];

const categories = ['All', 'Web', 'Open Source', 'Other'] as const;

function getFilteredProjects(category: string): Project[] {
  if (category === 'All') return projects;
  const map: Record<string, Project['category']> = {
    Web: 'web',
    'Open Source': 'oss',
    Other: 'other',
  };
  return projects.filter((p) => p.category === map[category]);
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="border border-gray-200 rounded-lg bg-white p-5">
      <h3 className="font-semibold text-gray-900 mb-1">{project.title}</h3>
      <p className="text-sm text-gray-500 mb-3">{project.description}</p>
      <div className="flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <span
            key={t}
            className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded"
          >
            {t}
          </span>
        ))}
      </div>
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-3 text-sm text-gray-900 font-medium hover:underline"
        >
          View Project →
        </a>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-8">Projects</h2>

      <TabGroup>
        <TabList className="flex space-x-1 mb-8 border-b border-gray-200">
          {categories.map((cat) => (
            <Tab
              key={cat}
              className={({ selected }) =>
                `px-4 py-2 text-sm font-medium transition-colors border-b-2 -mb-px outline-none ${
                  selected
                    ? 'border-gray-900 text-gray-900'
                    : 'border-transparent text-gray-400 hover:text-gray-600'
                }`
              }
            >
              {cat}
            </Tab>
          ))}
        </TabList>

        <TabPanels>
          {categories.map((cat) => (
            <TabPanel key={cat} className="grid gap-4 sm:grid-cols-2">
              {getFilteredProjects(cat).map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </TabPanel>
          ))}
        </TabPanels>
      </TabGroup>
    </div>
  );
}
