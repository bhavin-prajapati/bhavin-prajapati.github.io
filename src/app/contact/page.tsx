const contacts = [
  {
    label: 'Email',
    value: 'bhavin.prajapati@gmail.com',
    href: 'mailto:bhavin.prajapati@gmail.com',
  },
  {
    label: 'GitHub',
    value: 'github.com/bhavin-prajapati',
    href: 'https://github.com/bhavin-prajapati',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/bhavinprajapati-86',
    href: 'https://www.linkedin.com/in/bhavinprajapati-86/',
  },
];

export default function Contact() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Contact</h2>

      <p className="text-gray-600 mb-8">
        Feel free to reach out if you&apos;d like to collaborate, have a
        question, or just want to say hi.
      </p>

      <div className="space-y-4 mb-10">
        {contacts.map((c) => (
          <div
            key={c.label}
            className="flex items-center gap-4 border border-gray-200 rounded-lg bg-white px-5 py-4"
          >
            <span className="text-sm font-medium text-gray-500 w-20">
              {c.label}
            </span>
            <a
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-900 hover:underline"
            >
              {c.value}
            </a>
          </div>
        ))}
      </div>

      <div className="border border-gray-200 rounded-lg bg-white p-6">
        <h3 className="font-semibold mb-1">Download my resume</h3>
        <p className="text-sm text-gray-500 mb-4">
          Get a PDF copy of my full resume with detailed work history.
        </p>
        <a
          href="/BhavinPrajapati.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-5 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors"
        >
          Download PDF
        </a>
      </div>
    </div>
  );
}
