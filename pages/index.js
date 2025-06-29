export default function Home() {
  return (
    <div className="mt-5 flex flex-col items-center mb-5">
      <h1 className="font-bold text-2xl mb-5">BlogForge</h1>
      <p className="text-gray-900 text-center mb-5">
        A full-stack blog platform built with <strong>Next.js</strong>, <strong>MongoDB</strong>, and <strong>React Quill</strong>.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">✨ Features</h2>
      <ul className="list-disc pl-6 text-gray-900 space-y-1">
        <li>Admin Login with protected dashboard</li>
        <li>Rich text editing using React-Quill</li>
        <li>SEO-friendly slugs and dynamic blog pages</li>
        <li>MongoDB Atlas for data storage</li>
        <li>Fully deployed via Vercel</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Quick Link</h2>
      <ul className="flex flex-col justify-center items-center space-y-2">
        <li><a href="/admin/login" className="text-blue-600 hover:underline">
          🔑 Admin Login
        </a>
        </li>
        <li className="text-sm text-gray-500">
          (credentials provided in chat)
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">🛠 Tech Stack</h2>
      <p className="text-gray-700">
        Next.js • React • MongoDB Atlas • React-Quill • TailwindCSS
      </p>
      <p className="mt-10 text-sm text-center text-black">
        Made by tranquillo.manvith | Internship Task
      </p>
    </div>
  );
}
