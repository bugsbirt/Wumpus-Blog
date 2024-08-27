"use client";
import React from "react";
import Image from "next/image";

export function Manhattan() {
  return (
      <div className="max-w-2xl mx-auto antialiased pt-4 relative mt-16">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-20">
                <p className="text-xl mb-4 text-white no-select" style={{ fontSize: "28px" }}>
                  {item.title}
                </p>

            <div className="text-sm prose prose-sm dark:prose-invert">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height={1000}
                  width={1000}
                  className="rounded-lg mb-10 object-cover nograb"
                />
              )}
              <div
                className="text-zinc-400 "
                dangerouslySetInnerHTML={{ __html: item.description }}
              />
            </div>
          </div>
        ))}
      </div>
  );
}

const dummyContent = [
  {
    title: "🏙️ Wumpus takes over Manhattan",
    description: `
      <p>The Wumpus rises from the underground tunnels and seizes power over Manhattan. As time goes by, the people living in the city start vanishing, only to return later transformed into Wumpuses. Panic rapidly spreads throughout the once lively city as it becomes a place solely populated by Wumpuses.</p>
      <br />
      <p>The city's skyline is now dominated by a massive Wumpus statue, a symbol of the new order. The once-bustling streets are now filled with Wumpuses, their laughter echoing through the city. The Wumpus has taken over Manhattan, and the city is now a place where Wumpuses rule supreme.</p>
    `,
    image: "https://utfs.io/f/f673f653-6129-48ae-b76d-7a6ffb6797b6-cuf44h.png",
  },
];
