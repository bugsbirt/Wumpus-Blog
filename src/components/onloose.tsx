"use client";
import React from "react";
import Image from "next/image";

export function OnTheLoose() {
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
                className="rounded-lg mb-10 object-cover nograb "
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
      title: "🏃‍♂️ The Day Wumpus Escaped",
      description: `
        <p>Wumpus, the beloved superstar, has escaped from prison! The news has sent shockwaves through the Wumpus kingdom, with many people celebrating the escape while others fear the consequences.</p>
        <br />
        <p>Wumpus's escape was a daring feat, with the Wumpus using their cunning and strength to outsmart their guards. The Wumpus is now on the run, and it is unclear where they will go next.</p>
        <br />
        <p>The authorities are searching for Wumpus, but they are proving to be elusive. The Wumpus has a large following, and many people are willing to help them stay hidden.</p>
        <br />
        <p>The Wumpus's escape has raised many questions. What will the Wumpus do now that they are free? Will they seek revenge on those who imprisoned them? Or will they use their newfound freedom to help others?</p>
        <br />
        <p>Only time will tell what the future holds for Wumpus. But one thing is for sure: the Wumpus's escape has shaken the Wumpus kingdom to its core.</p>
      `,
      image: "https://utfs.io/f/236d3908-9351-4b0c-8b0c-5583057ae9a0-830ph3.png",
    },
  ];
  