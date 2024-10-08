import { title } from "process";
import { FollowerPointerCard } from "../components/ui/following-pointer";
import { useRouter } from "next/navigation";

export function BlogMenu() {
    const router = useRouter();
    const push = (page: string) => {
        router.push(page);
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-6xl mx-auto p-4 bg-black">
            {blogContent.map((blog, index) => (
                <div key={index} className="glassmorphism relative group flex flex-col bg-black hover:shadow-xl border border-zinc-950 rounded-2xl overflow-hidden top-16">
                    <FollowerPointerCard
                        title={<TitleComponent title={blog.author} avatar={blog.authorAvatar} />}
                    >
                        <div className="flex flex-col h-full">
                            <div className="w-full h-40 sm:h-48 md:h-56 bg-gray-100 overflow-hidden">
                                <img
                                    src={blog.image}
                                    alt="thumbnail"
                                    className="object-cover w-full h-full nograb no-select"
                                />
                            </div>
                            <div className="flex flex-col p-4 flex-grow">
                                <h2 className="font-bold text-lg text-zinc-400 mb-2 truncate no-select">
                                    {blog.title}
                                </h2>
                                <h2 className="font-normal text-sm text-zinc-500 mb-4 truncate no-select">
                                    {blog.description}
                                </h2>
                                <div className="flex flex-col sm:flex-row justify-between items-center mt-auto">
                                    <span className="text-xs sm:text-sm text-gray-500 no-select">{blog.date}</span>
                                    <a
                                        className="mt-2 sm:mt-0 px-6 py-2 bg-white text-black font-bold rounded-xl block text-xs sm:text-sm no-select"
                                        onClick={() => push(blog.slug)}
                                    >
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                    </FollowerPointerCard>
                </div>
            ))}
        </div>
    );
}

const blogContent = [
  {
    slug: 'wumpus-on-the-loose',
    author: "/wumpus-on-the-loose",
    date: '27th August, 2024',
    title: 'Wumpus On The Loose',
    description: 'Wumpus is on the loose!',
    image: "https://utfs.io/f/236d3908-9351-4b0c-8b0c-5583057ae9a0-830ph3.png",
    authorAvatar: '/wumpus.png'
  },

  {
    slug: '/wumpus-prison',
    author: "/wumpus-prison",
    date: "26th August, 2024",
    title: "Wumpus Prisoned",
    description: "Wumpus gets imprisoned for their crimes!",
    image:"https://utfs.io/f/9ea9e231-38d3-40e2-a1b9-819c137b675a-88hipu.png", 
    authorAvatar: "/wumpus.png",
  },  
  {
    slug: "/wumpus-in-manhattan"
    ,
    author: "/wumpus-in-manhattan",
    date: "26th August, 2024",

    title: "Wumpus's In Manhattan",
    description:
      "Wumpus takes over Manhattan!",
    image: "https://utfs.io/f/f673f653-6129-48ae-b76d-7a6ffb6797b6-cuf44h.png",
    authorAvatar: "/wumpus.png",
  },  


  {
    slug: "/wumpus-president",
    author: "/wumpus-president",
    date: "26th August, 2024",
    title: "Wumpus For President",
    description:
      "Wumpus has the potential to be an excellent president. They have traveled to space and to various locations worldwide, possessing all the necessary qualities a President should have.",
    image: "https://utfs.io/f/ed483e7d-8f22-404a-b55d-284493bfcc8a-6nyvu4.png",
    authorAvatar: "/wumpus.png",
  },
  {
    slug: "/wumpus-in-space",
    author: "/wumpus-in-space",
    date: "26th August, 2024",
    title: "Wumpus The Astronaut",
    description:
      "Wumpus's journey to space!",
    image: "https://utfs.io/f/3b661b5d-be19-43a7-9717-a54cff6fadc6-75v02n.png",
    authorAvatar: "/wumpus.png",
  },  


  
];

const TitleComponent = ({
  title,
  avatar,
}: {
  title: string;
  avatar: string;
}) => (
  <div className="flex space-x-2 items-center">
    <img
      src={avatar}
      height="20"
      width="20"
      alt="thumbnail"
      className="rounded-full border-2 border-white nograb"
    />
    <p>{title}</p>
  </div>
);
