"use client";
import React from "react";
import Image from "next/image";
import { TracingBeam } from "../components/ui/tracing-beam";

export function PresidentAy() {
  return (
    <TracingBeam className="px-6 ">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
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
    </TracingBeam>
  );
}

const dummyContent = [
  {
    title: "Wumpus For President",
    description: `
      <p>Wumpus, the endearing face of Discord, would excel as a president for numerous reasons. Initially, Wumpus serves as a central figure, bringing individuals from diverse backgrounds together with his amiable and accessible demeanor. His function on Discord has consistently focused on uniting communities, a characteristic that would benefit him in a presidential position by encouraging inclusiveness and peace.</p>
      <p>Furthermore, Wumpus has a natural ability to solve problems. His skill in maneuvering through intricate and ever-changing Discord servers demonstrates his capacity to manage a wide range of challenges effortlessly. His ability to resolve conflicts and come up with creative solutions would make him skilled in tackling national challenges and ensuring efficient governance.</p>
      <p>Moreover, Wumpus possesses a distinctive skill of remaining composed in stressful situations, an essential quality for any leader. His relaxed but observant attitude would assist him in handling the intense pressures of the presidency gracefully and calmly.</p>
      <p>Finally, Wumpus is adored and relied upon by the Discord community as a reflection of his qualities and guidance. The broad backing would result in a powerful mandate and the capacity to encourage and energize the public.</p>
      <p>Overall, Wumpus's ability to unite, solve problems, stay composed, and appeal to everyone makes him a perfect choice for president, prepared to lead with understanding and efficiency.</p>
    `,
    image: "https://utfs.io/f/ed483e7d-8f22-404a-b55d-284493bfcc8a-6nyvu4.png",
  },
];
