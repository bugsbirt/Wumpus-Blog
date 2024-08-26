"use client";
import React from "react";
import Image from "next/image";


export function WumpisPrisoner() {
  return (
      <div className="max-w-2xl mx-auto antialiased pt-4 relative mt-14">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-12">
            <p className="text-xl mb-4 text-white">
              {item.title}
            </p>z

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
    title: "Wumpus in prison",
    description: `
      <p>Wumpus, the beloved super star, has been imprisoned for their crimes. The charges against Wumpus are still unclear, but it is believed that they were involved in a series of high-profile incidents, including the theft of a valuable artifact and the destruction of a public building. </p>
      <p>Wumpus's supporters are outraged by the arrest, claiming that they are being unfairly targeted. They argue that Wumpus is a victim of circumstance and that they have been framed by powerful enemies. </p>
      <p>The trial is expected to be a long and complex one, with many witnesses and experts being called to testify. The outcome of the trial will have a significant impact on the future of Wumpus and the wumpus kingdom as a whole.</p>
      <p>In the meantime, Wumpus's fans are left to wonder what will become of their beloved icon. Will they be found guilty and sentenced to a long prison term? Or will they be acquitted and return to their rightful place as the face of Discord? Only time will tell.</p>

    `,
    image: "https://utfs.io/f/9ea9e231-38d3-40e2-a1b9-819c137b675a-88hipu.png",
  },
];
