'use client';

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';

interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  category: 'web' | 'mobile' | 'tv' | 'oss' | 'other';
}

const projects: Project[] = [
  {
    title: 'Crave Expansion Hosted TV Application',
    description:
      'Crave Expansion TV Application for Bell Media is a hosted streaming app targeting Smart TV platforms and game consoles.',
    tech: ['React', 'Node.js', 'Next.js', 'GraphQL', 'Xbox Series X', 'PS5', 'Microservices', 'AWS', 'TypeScript', 'HTML', 'CSS', 'Tailwind CSS', 'GitLab'],
    link: 'https://www.bellmedia.ca/the-lede/press/bigger-better-craves-expansion-is-here-more-leading-content-one-powerful-service/',
    category: 'tv',
  },
  {
    title: 'Autodesk Account Web Portal',
    description:
      'Autodesk Account Web Portal is used by customers to manage their products and licenses.',
    tech: ['React', 'NodeJS', 'NextJS', 'GraphQL', 'GCP', 'Kubernetes', 'Microservices', 'HIG', 'TypeScript', 'HTML', 'CSS', 'GitHub'],
    link: 'https://manage.autodesk.com',
    category: 'web',
  },
  {
    title: 'Internal Provisioning and Automation Portal',
    description:
      'An internal portal used for sending requests, provisioning and automation of infrastructure and services for RBC.',
    tech: ['Vue.JS', 'ReactJS', 'MEAN', 'GCP', 'REST API', 'TypeScript', 'HTML', 'CSS', 'GitHub'],
    link: '#',
    category: 'web',
  },
  {
    title: 'HP Support FAQ Microservice',
    description:
      'Frequently Asked Questions page for HP\'s Instant Ink service.',
    tech: ['React', 'NodeJS', 'Veneer', 'TypeScript', 'Microservices', 'HTML', 'CSS', 'Azure Pipelines', 'GitHub'],
    link: 'https://www.hp.com/ca-en/printers/instant-ink/faq.html?jumpid=ps_ca_go_mk_se_CM019762_pu_x#section=faq',
    category: 'web',
  },
  {
    title: 'ownr.co',
    description:
      'Ownr.co is a web application for incorporating new businesses and filing necessary paperwork with the government of Canada.',
    tech: ['React', 'NodeJS', 'RxJS', 'GraphQL', 'REST API', 'Microservices', 'HTML', 'CSS', 'Contentful CMS', 'Gatsby', 'Yarn', 'Docker', 'AWS', 'CircleCI'],
    link: 'https://www.ownr.co/',
    category: 'web',
  },
  {
    title: 'airmilesshops.ca',
    description:
      'Airmilesshops.ca is a web application for users to earn Air Miles reward points by shopping at participating retailers.',
    tech: ['React', 'GraphQL', 'NodeJS', 'NextJS', 'REST API', 'HTML', 'CSS', 'NPM', 'Babel/Webpack', 'Istanbul', 'Jest', 'JWT/OAuth', 'AJAX', 'AWS'],
    link: 'https://www.airmilesshops.ca/en',
    category: 'web',
  },
  {
    title: 'Payment Gateway for American Automobile Association (AAA)',
    description: 'Payment gateway for AAA customers to make payments for their account subscriptions.',
    tech: ['React', 'NodeJS', 'HTML', 'CSS', 'ASP.NET'],
    link: 'https://app.ace.aaa.com/membership/make-a-payment/',
    category: 'web',
  },
  {
    title: 'Esso Extra Hybrid Loyalty Mobile Application',
    description:
      'Esso Extra Hybrid Loyalty Mobile Application is a mobile app for users to earn loyalty points by shopping at participating retailers.',
    tech: ['Android', 'iOS', 'Cordova', 'Angular', 'NPM', 'Babel/Webpack', 'Istanbul', 'Jest', 'JWT/OAuth', 'AJAX', 'Bower', 'Gulp', 'SASS', 'JavaScript', 'HTML5', 'CSS3', 'GitFlow'],
    link: 'https://www.esso.ca/en-ca/essoandmobilapp',
    category: 'mobile',
  },
  {
    title: 'Virtual Set-Top Box SDK',
    description: 'Virtual Set-Top Box SDK for delivering Smooth Streaming content with PlayReady DRM on Windows 8.1 and Windows Phone 8.1, utilizing Microsoft Media Platform\'s Player Framework (MMPPF).',
    tech: ['Visual Studio 2013', '.NET', 'WPF', 'Windows 8.1', 'Android Studio', 'TeamCity', 'GitFlow'],
    link: '#',
    category: 'tv',
  },
  {
    title: 'mDialog Smart Stream SDK',
    description: 'mDialog Smart Stream SDK for Xbox 360, Windows 8 and Windows Phone 8 to deliver HLS video with dynamic ad insertion.',
    tech: ['IPTV', 'Xbox', 'HTML5', 'CSS3', 'BrightScript', 'NodeJS', 'MEAN', 'MongoDB', 'NPM', 'Babel/Webpack', 'Istanbul', 'Jest', 'JWT/OAuth', 'AJAX', 'Flash Builder', 'Lakeview', 'Xbox ADK', 'Windows 8', 'Windows Phone 8', 'ActionScript', 'TFS', 'Git'],
    link: '#',
    category: 'tv',
  },
  {
    title: 'CBC’s Hockey Night in Canada and PBS',
    description: 'IPTV Xbox Live Apps for CBC’s Hockey Night in Canada and PBS to deliver video.',
    tech: ['IPTV', 'Xbox', 'WPF', '.NET', 'Git'],
    link: '#',
    category: 'tv',
  },
  {
    title: 'SharePoint Portals',
    description: 'SharePoint 2010 sites for clients such as CPPIB, AMI, CNIB, CRISP, WestJet and OHTN to manage internal documents and information.',
    tech: ['SharePoint 2010/2007', 'SharePoint Designer', 'HTML5', 'CSS3', 'JavaScript', 'ASP.NET', 'C#', 'Visual Studio 2010', 'MS SQL Server 2008 R2'],
    link: '#',
    category: 'web',
  },
];

const categories = ['All', 'Web', 'Mobile', 'TV', 'Open Source', 'Other'] as const;

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
