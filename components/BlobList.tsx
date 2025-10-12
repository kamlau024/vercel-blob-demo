"use client";

import { useEffect, useState } from "react";

type BlobInfo = {
  pathname: string;
  url: string;
  size: number;
  uploadedAt: string;
};

export default function BlobList() {
  const [blobs, setBlobs] = useState<BlobInfo[]>([]);

  useEffect(() => {
    (async () => {
      const res = await fetch("/api/blobs");
      if (res.ok) {
        const { blobs } = await res.json();
        setBlobs(blobs);
      }
    })();
  }, []);

  return (
    <div className="p-6 bg-white rounded-2xl shadow">
      <h2 className="text-xl font-semibold mb-3">📦 Uploaded Files</h2>
      {blobs.length === 0 ? (
        <p>No files uploaded yet.</p>
      ) : (
        <ul className="space-y-2">
          {blobs.map((b) => (
            <li key={b.pathname} className="flex justify-between text-sm">
              <a href={b.url} target="_blank" className="text-blue-600 underline">
                {b.pathname}
              </a>
              <span>{(b.size / 1024).toFixed(1)} KB</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}