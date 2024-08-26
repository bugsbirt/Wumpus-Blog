"use client";
import React from "react";
import Image from "next/image";

export function PresidentAy() {
  return (
      <div className="max-w-2xl mx-auto antialiased pt-4 relative mt-14">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-12">
            <p className="text-xl mb-4 text-white">
              {item.title}
            </p>

            <div className="text-sm prose prose-sm dark:prose-invert">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height={1000}
                  width={1000}
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              <div
                className="text-zinc-400"
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
    title: "Wumpus For President",
    description: `
     <p>Vote for Wumpus! Wumpus is a strong, capable leader who has the experience and vision to lead the Wumpus country to a brighter future. They have traveled to space and to various locations worldwide, possessing all the necessary qualities a President should have. Wumpus is the best choice for President, and they will make Wumpusville great again! </p>
     <p>Wumpus is a symbol of hope and change. They represent a new era of progress and prosperity for our nation. Wumpus is the future, and they are ready to lead us there. </p>
    `,
    image: "https://utfs.io/f/ed483e7d-8f22-404a-b55d-284493bfcc8a-6nyvu4.png",
  },
];
