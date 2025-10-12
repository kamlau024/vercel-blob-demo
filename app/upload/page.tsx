"use client";

import { useRef, useState, useEffect } from "react";
import { upload } from "@vercel/blob/client";
import type { PutBlobResult } from "@vercel/blob";
import BlobList from "@/components/BlobList";

export default function UploadPage() {
  const serverInputRef = useRef<HTMLInputElement | null>(null);
  const clientInputRef = useRef<HTMLInputElement | null>(null);
  const [serverBlob, setServerBlob] = useState<PutBlobResult | null>(null);
  const [clientBlob, setClientBlob] = useState<PutBlobResult | null>(null);

  // Server Upload
  const onServerUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    const file = serverInputRef.current?.files?.[0];
    if (!file) return;

    const res = await fetch(`/api/upload?filename=${encodeURIComponent(file.name)}`, {
      method: "POST",
      body: file,
    });

    const blob = await res.json();
    setServerBlob(blob);
  };

  // Client Direct Upload
  const onClientUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    const file = clientInputRef.current?.files?.[0];
    if (!file) return;

    const blob = await upload(file.name, file, {
      access: "public",
      handleUploadUrl: "/api/client-upload",
    });

    setClientBlob(blob);
  };

  return (
    <div className="p-8 space-y-10 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">📤 File Upload Demo</h1>

      {/* Server Upload */}
      <div className="p-6 bg-white rounded-2xl shadow">
        <h2 className="text-xl font-semibold mb-2">Server Upload (small files)</h2>
        <form onSubmit={onServerUpload} className="flex flex-col space-y-3">
          <input type="file" ref={serverInputRef} className="border p-2 rounded" />
          <button type="submit" className="bg-blue-600 text-white rounded px-4 py-2">
            Upload to Server
          </button>
        </form>
        {serverBlob && (
          <div className="mt-3 text-sm">
            ✅ Uploaded: <a href={serverBlob.url} className="text-blue-600 underline">{serverBlob.url}</a>
          </div>
        )}
      </div>

      {/* Client Upload */}
      <div className="p-6 bg-white rounded-2xl shadow">
        <h2 className="text-xl font-semibold mb-2">Client Direct Upload (large files)</h2>
        <form onSubmit={onClientUpload} className="flex flex-col space-y-3">
          <input type="file" ref={clientInputRef} className="border p-2 rounded" />
          <button type="submit" className="bg-green-600 text-white rounded px-4 py-2">
            Upload Directly
          </button>
        </form>
        {clientBlob && (
          <div className="mt-3 text-sm">
            ✅ Uploaded: <a href={clientBlob.url} className="text-green-600 underline">{clientBlob.url}</a>
          </div>
        )}
      </div>

      <BlobList />
    </div>
  );
}