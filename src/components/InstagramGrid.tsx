'use client';

import React from 'react';
import { INSTAGRAM_POSTS, STORE_INFO } from '@/data/vastrangData';
import { InstagramIcon, HeartIcon } from './Icons';

export default function InstagramGrid() {
  return (
    <section className="py-14 sm:py-20 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-[#7d4e48] text-xs font-semibold uppercase tracking-wider mb-2">
            <InstagramIcon className="w-3.5 h-3.5" />
            <span>@vastrang.in</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-stone-900">
            Follow Us on Instagram
          </h2>
          <p className="text-xs sm:text-sm text-stone-500 mt-1 font-light">
            Tag us in your festive looks for a chance to get featured on our page!
          </p>
        </div>

        {/* Gallery Grid (6 images) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {INSTAGRAM_POSTS.map((post) => (
            <a
              key={post.id}
              href={STORE_INFO.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-[3/4] rounded-xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 block"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={post.image}
                alt={`Instagram look by ${post.tag}`}
                className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />

              {/* Hover overlay with Instagram icon and likes */}
              <div className="absolute inset-0 bg-[#7d4e48]/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white gap-2 p-3 text-center">
                <InstagramIcon className="w-6 h-6" />
                <div className="flex items-center gap-1 text-xs font-semibold">
                  <HeartIcon className="w-3.5 h-3.5" filled />
                  <span>{post.likes}</span>
                </div>
                <span className="text-[10px] tracking-wider font-light text-rose-100">
                  {post.tag}
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Instagram Follow Button */}
        <div className="text-center mt-8">
          <a
            href={STORE_INFO.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 text-white font-medium text-xs tracking-wider uppercase shadow-md hover:shadow-lg transition transform hover:-translate-y-0.5"
          >
            <InstagramIcon className="w-4 h-4" />
            <span>Follow @vastrang.in on Instagram</span>
          </a>
        </div>

      </div>
    </section>
  );
}
