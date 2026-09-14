'use client';

import { useState } from 'react';

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

function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 text-center p-4 text-xs text-gray-500">
      © 2026 My Next Blog. All rights reserved.
    </footer>
  );
}

export default function Home() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [posts, setPosts] = useState<{ title: string; content: string }[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !content) return;

    // บันทึกบทความใหม่ลงรายการด้านล่าง
    setPosts([{ title, content }, ...posts]);

    // ล้างข้อมูลในฟอร์ม
    setTitle('');
    setContent('');
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-50">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 max-w-2xl">
        {/* ฟอร์มเขียนบทความ */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 my-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">สร้างบทความใหม่</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">หัวข้อบทความ</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none text-black"
                placeholder="กรอกชื่อบทความ..."
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">เนื้อหา</label>
              <textarea
                rows={4}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full p-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none text-black"
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

        {/* รายการบทความที่ถูกเผยแพร่ */}
        <div className="mb-12 space-y-4">
          <h3 className="text-xl font-bold text-gray-800">บทความทั้งหมด ({posts.length})</h3>
          {posts.length === 0 ? (
            <p className="text-gray-500 text-sm">ยังไม่มีบทความ เผยแพร่บทความแรกของคุณด้านบนได้เลย</p>
          ) : (
            posts.map((post, index) => (
              <div key={index} className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
                <h4 className="text-lg font-bold text-gray-900 mb-2">{post.title}</h4>
                <p className="text-gray-700 whitespace-pre-line">{post.content}</p>
              </div>
            ))
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}