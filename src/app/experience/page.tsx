'use client';

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';

const experiences = [
  {
    title: 'Connected TV Developer / Consultant',
    company: 'Acme Corp',
    period: '2021 — Present',
    description:
      'Leading development of scalable microservices and cloud infrastructure. Driving architectural decisions and mentoring junior engineers.',
    highlights: [
      'Led team of 5 engineers to deliver a new event-driven platform',
      'Reduced API latency by 40% through caching and query optimization',
      'Architected migration from monolith to microservices',
      'Introduced CI/CD pipelines reducing deployment time by 60%',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Tech Startup Inc',
    period: '2018 — 2021',
    description:
      'Full-stack development across web and mobile platforms. Worked closely with product and design teams to ship user-facing features.',
    highlights: [
      'Built real-time collaboration features using WebSockets',
      'Developed RESTful APIs serving 10K+ requests per minute',
      'Implemented automated testing reducing bug reports by 35%',
      'Contributed to open-source libraries used by the community',
    ],
  },
  {
    title: 'Junior Developer',
    company: 'Digital Agency Co',
    period: '2016 — 2018',
    description:
      'Developed web applications for various clients across e-commerce, healthcare, and fintech verticals.',
    highlights: [
      'Built responsive web apps using React and Node.js',
      'Integrated third-party APIs including payment and analytics',
      'Collaborated with designers to implement pixel-perfect UIs',
    ],
  },
];

export default function Experience() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-8">Experience</h2>

      <div className="space-y-3">
        {experiences.map((exp, idx) => (
          <Disclosure key={idx} defaultOpen={idx === 0}>
            {({ open }) => (
              <div className="border border-gray-200 rounded-lg bg-white overflow-hidden">
                <DisclosureButton className="flex w-full justify-between items-center px-5 py-4 text-left hover:bg-gray-50 transition-colors">
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {exp.title}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {exp.company} · {exp.period}
                    </p>
                  </div>
                  <svg
                    className={`w-5 h-5 text-gray-400 shrink-0 ml-4 transition-transform duration-200 ${
                      open ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </DisclosureButton>

                <DisclosurePanel className="px-5 pb-4 text-gray-600 text-sm">
                  <p className="mb-3">{exp.description}</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-500">
                    {exp.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </DisclosurePanel>
              </div>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
}
