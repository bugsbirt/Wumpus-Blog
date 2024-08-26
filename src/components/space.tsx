"use client";
import React from "react";
import Image from "next/image";
import { TracingBeam } from "../components/ui/tracing-beam";

export function SpaceArticle() {
  return (
    <TracingBeam className="px-6">
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
              <p className="text-zinc-400">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const dummyContent = [
  {
    title: "Wumpus In Space",
    description: (
      <>
          On December 13, 2021, Discord sent Wumpus into space to commemorate the snowfall and hitting 3 million followers on X (formerly Twitter). They were questioning the feasibility of launching Wumpus into space until they stumbled upon something known as "SCIENCE." Therefore, they secured Wumpus onto a rocket equipped with cameras and launched him into outer space.
      </>
    ),
    image: "https://utfs.io/f/3b661b5d-be19-43a7-9717-a54cff6fadc6-75v02n.png",
  },
  {
    title: "There they go!",
    image: "https://utfs.io/f/1f99241e-b045-4e20-b1e5-5e197deeaefa-kdw074.png",
    description: (
      <>
        
          Wumpus has ascended into the sky and begun a journey through outer space to Earth's atmosphere.
          After approximately 20 minutes of flight, he descends through Earth's atmosphere and falls rapidly to the ground.
       
      </>
    ),
  }
];
