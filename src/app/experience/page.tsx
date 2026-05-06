'use client';

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';

const experiences = [
  {
    title: 'Connected TV Developer / Consultant',
    company: 'Stellar Elements / Amdocs',
    period: 'Jan. 2025 – April 2026',
    description:
      'Building the Crave Expansion Hosted TV Application for Bell Media, a streaming experience targeting Smart TV platforms and game consoles.',
    highlights: [
      'Architecting / implementing features for the Crave Expansion Hosted TV Application for Bell Media.',
      'Implemented new features using React, NextJS and Tailwind CSS which would run on Smart TV brands such as LG, Samsung, Hisense, Xbox, PS5.',
      'Lead the end-to-end development to launch on gaming platforms Xbox Series X and PS5.',
    ],
  },
  {
    title: 'Sabbatical / Personal Projects',
    company: 'Not employed',
    period: 'April 2024 – Dec. 2024',
    description:
      'Took time off for newborn and home renovations. During this period, I also worked on personal projects and contributed to open-source software.',
  },
  {
    title: 'Front-End Developer / Consultant',
    company: 'Autodesk',
    period: 'Mar. 2023 – Mar. 2024',
    description:
      'Implemented product subscriptions and active trials pages that are part of the public facing Autodesk Account Web Portal used by customers to manage their products and licenses.',
    highlights: [
      'Lead the development of product subscriptions and active trials pages for the Autodesk Account Web Portal.',
      'Utilized React frontend libraries such as Redux, Styled Components, React Router, Axios, Storybook, React Testing Library and Istanbul and server libraries such as NextJS, ExpressJS, Webpack, body-parser, http, cors and dotenv.',
      'Worked with a design team to do UI/UX reviews and ensure the SPA React front-end is responsive to mobile users.',
    ],
  },
  {
    title: 'Full-Stack Developer / Consultant',
    company: 'RBC',
    period: 'Sept. 2022 – Mar. 2023',
    description:
      'Implemented enhancements on an existing internal React SPA used for sending requests, provisioning and automation, while assisting with a migration of a legacy CodeIgniter web application to a modern stack.',
    highlights: [
      'Implemented enhancements on existing internal React SPA used for sending requests, provisioning and automation.',
      'Helping to migrate a legacy web application written in CodeIgniter to a modern stack that uses VueJS and NestJS.',
      'Worked with a team to deliver new features based on requirements and attend weekly meetings with stakeholders.',
    ],
  },
  {
    title: 'Front-End Developer / Consultant',
    company: 'HP',
    period: 'Jan. 2022 – July 2022',
    description:
      'Implemented and delivered a Frequently Asked Questions page using HP\'s microservice front-end architecture, localized across many languages.',
    highlights: [
      'Lead the implementation and delivered the FAQ page using their microservice front-end architecture.',
      'Integrated with a third-party translation service called Lokalise for managing all content in several languages.',
      'Utilized React libraries such as Hooks, Styled Components, Isomorphic Fetch, Jest and Istanbul.',
      'Utilized Internal front-end framework called Veneer for components and layout of pages.',
    ],
  },
  {
    title: 'Front-End Developer / Consultant',
    company: '360Insights',
    period: 'Sept. 2021 – Jan. 2022',
    description:
      'Implemented UI features and improved test coverage across several microservices powering 360Insights\' channel incentives application.',
    highlights: [
      'Implementing UI features on several microservices to enhance their application.',
      'Improving test coverage on existing microservices which use NextJS to serve endpoints.',
      'Utilized React libraries such as Styled Components, React Router, Axios, Jest, Enzyme, Mocha and Istanbul.',
    ],
  },
  {
    title: 'Consultant',
    company: 'ATB Financial',
    period: 'June 2021 – Sept. 2021',
    description:
      'Implemented features on ATB\'s new public-facing web application for customers, focusing on core banking flows.',
    highlights: [
      'Implementing features on their new responsive public-facing web application for customers.',
      'Worked on the UI for core features like Direct Deposit, Transfers and Notifications.',
      'Utilized React libraries such as RxJS, Hooks, Jotai, NestJS, React Router, Axios, Jest, Mocha and Istanbul.',
    ],
  },
  {
    title: 'Consultant',
    company: 'Scotiabank',
    period: 'Feb. 2021 – May. 2021',
    description:
      'Worked in the team that manages 2FA for the Wealth / iTrade application platform.',
    highlights: [
      'Worked on their Wealth / iTrade application to add 2FA as an additional layer of security to their platform.',
      'Helped implement OpenAPI documentation for the 2FA API and implemented the front-end UI for the 2FA flows.',
    ],
  },
  {
    title: 'Consultant',
    company: 'Citibank',
    period: 'July 2020 – Jan. 2021',
    description:
      'Implemented features for CCB Consolidated Dashboard, a web application for corporate clients, and set up a new project for the Next Generation Lending UI.',
    highlights: [
      'Implementing features for CCB Consolidated Dashboard, a web application for corporate clients.',
      'Set up a new project for the Next Generation Lending UI project.',
    ],
  },
  {
    title: 'Senior Javascript Engineer',
    company: 'RBC Ventures',
    period: 'Aug. 2019 – July 2020',
    description:
      'Implemented features for Ownr, a web application for incorporating new businesses, using a serverless front-end architecture on AWS.',
    highlights: [
      'Implementing features for Ownr (ownr.co), a web application for incorporating new businesses.',
      'Serverless architecture for front-end, utilizing AWS services such as Lambda, S3, DynamoDB, CloudFormation.',
      'Integration with third-party services such as OnCorp, Founded, SendGrid and Logojoy.',
      'Adhered to agile methodologies (Scrum) to plan, analyze, design, implement, test and deploy builds on a biweekly basis.',
    ],
  },
  {
    title: 'Senior Full-Stack Agile Engineer',
    company: 'Tribalscale',
    period: 'Aug. 2016 – July 2019',
    description:
      'Worked on web projects for well-known clients such as CIBC Live Labs, Radio.com, NBC, VersaPay, American Automobile Association (AAA), Manulife and LoyaltyOne (Airmiles) using Agile Methodologies (Scrum) and TDD.',
    highlights: [
      'Worked on web projects for well-known clients such as CIBC Live Labs, Radio.com, NBC, VersaPay, American Automobile Association (AAA), Manulife, LoyaltyOne (Airmiles) on projects using Agile Methodologies (Scrum) and TDD.',
      'Delivered a full web application for CIBC Live Labs using Spring Boot, React/Redux, Postgres on Azure.',
      'Implemented a Roku App for NBC Universal for delivering content.',
      'Delivered a mobile-first responsive web application using React/Redux, Bootstrap and RoR for VersaPay.',
      'Launched a public-facing website for LoyaltyOne (www.airmilesshops.ca) built using NodeJS, GraphQL, NextJS.',
      'Delivered an internal dashboard for Manulife using .NET Core and RabbitMQ with a microservice architecture.',
      'Built a payment gateway for AAA built on NodeJS, React and ASP.NET to make payments for their accounts.',
    ],
  },
  {
    title: 'Software Developer',
    company: 'Exchange Solutions',
    period: 'Jan. 2016 – May 2016',
    description:
      'Implemented a hybrid mobile app for a client using the IBM MobileFirst platform running on Android and iOS devices.',
    highlights: [
      'Implementing a hybrid mobile application for a major client using the IBM MobileFirst platform with Angular and NodeJS to run on Android and iOS devices.',
    ],
  },
  {
    title: 'WPF Consultant',
    company: 'QuickPlay Media',
    period: 'Oct. 2014 – May 2015',
    description:
      'Implemented a Virtual Set-Top Box SDK for delivering Smooth Streaming content with PlayReady DRM on Windows 8.1 and Windows Phone 8.1, utilizing Microsoft Media Platform\'s Player Framework (MMPPF).',
    highlights: [
      'Used best practices and design patterns (Service Locator Pattern (SLP), Inversion of Control (IoC) single instance pattern, Visitor, Strategy, Adaptor, Factory, and Abstract Factory Patterns). Utilized Microsoft Unity and SQLite.',
      'Developed several unit tests, integration tests and simulation strategies. Automated daily builds and weekly releases with automated tests with Jenkins and MSBuild.',
      'Packaged VSTB SDK for client with VSIX (Visual Studio Extension) installer and released bi-weekly at the end of scrum with accompanying documentation generated using Doxygen.',
      'Worked with Android team to help identify and fix critical issues, helped with testing HOOQ app.',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'mDialog',
    period: 'Dec. 2012 – June 2014',
    description:
      'Implemented the mDialog Smart Stream SDK for Xbox 360, Windows 8 and Windows Phone 8 to deliver HLS video with dynamic ad insertion.',
    highlights: [
      'Implemented the mDialog Smart Stream SDK for Xbox 360, Windows 8 and Windows Phone 8.',
      'Developed and successfully shipped a library for Windows 8 to insert mDialog ads into specific video content within the Windows 8 News and Finance Apps in collaboration with Microsoft AppEx.',
      'Built a web application using Play Framework to play HLS videos served off the mDialog platform.',
      'Building out new features on the Android SDK for live HLS video playback with overlay advertisements. Analytics tracking during playback and heart-beating done to ensure stream stays alive.',
    ],
  },
  {
    title: 'Interactive Developer',
    company: 'Digiflare',
    period: 'May 2011 - Dec. 2012',
    description:
      'Built IPTV Xbox Live Apps and led SharePoint web development for enterprise clients.',
    highlights: [
      'Worked in a team to build the CBC’s Hockey Night in Canada and PBS IPTV Xbox Live Apps.',
      'Lead development of SharePoint 2010 sites for clients such as CPPIB, AMI, CNIB, CRISP, WestJet and OHTN.',
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
