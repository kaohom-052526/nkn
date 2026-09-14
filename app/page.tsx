'use client';

import { useState } from 'react';

// 1. Component Navbar
function Navbar() {
  return (
    <nav className="bg-slate-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold tracking-wide">My Next Blog</h1>
        <div className="flex gap-4 text-sm">
          <a href="#" className="hover:text-gray-300 transition">หน้าแรก</a>
          <a href="#" className="hover:text-gray-300 transition">เขียนบทความ</a>
        </div>
      </div>
    </nav>
  );
}

// 2. Component BlogEditor
function BlogEditor() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`บันทึกบทความเรื่อง: ${title}`);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md border border-gray-100 my-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">สร้างบทความใหม่</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">หัวข้อบทความ</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="กรอกชื่อบทความ..."
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">เนื้อหา</label>
          <textarea
            rows={6}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="พิมพ์เนื้อหาที่ต้องการเขียน..."
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-medium py-2.5 rounded-md hover:bg-blue-700 transition"
        >
          เผยแพร่บทความ
        </button>
      </form>
    </div>
  );
}

// 3. Component Footer
function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 text-center p-4 text-xs text-gray-500">
      © 2026 My Next Blog. All rights reserved.
    </footer>
  );
}

// 4. หน้าหลัก (Main Page)
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-50">
      <Navbar />
      <main className="flex-1 container mx-auto px-4">
        <BlogEditor />
      </main>
      <Footer />
    </div>
  );
}