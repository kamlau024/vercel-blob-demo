// app/page.tsx
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">
        Vercel Blob Storage Demo
      </h1>
      <p className="text-gray-600 text-center max-w-md">
        This is a simple prototype showing how to upload, list, and download files using{" "}
        <strong>Vercel Blob Storage</strong> with Next.js and Tailwind CSS.
      </p>

      <div className="flex space-x-4">
        <Link
          href="/upload"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Upload Files
        </Link>
        <Link
          href="/files"
          className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition"
        >
          View Files
        </Link>
      </div>
    </div>
  );
}