import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";

const reviews = [
  {
    name: "Tony Stark",
    username: "@IronMan",
    body: "The best productivity booster I’ve ever used! Simple and effective.",
    img: "https://i.pinimg.com/564x/0b/6e/40/0b6e4079a621b67d659cf4336376d7dc.jpg",
  },
  {
    name: "Steve Rogers",
    username: "@CaptainAmerica",
    body: "Keeps me organized and on track, every single day.",
    img: "https://i.pinimg.com/564x/e8/d0/a9/e8d0a94366ced184e3272c1483a88716.jpg",
  },
  {
    name: "Thor Odinson",
    username: "@Thor",
    body: "Powerful yet simple. Exactly what I needed for daily tasks.",
    img: "https://i.pinimg.com/564x/ea/ee/ce/eaeece5855361037daf988843781499d.jpg",
  },
  {
    name: "Bruce Banner",
    username: "@Hulk",
    body: "Clean design, intuitive, and helps manage tasks without the stress.",
    img: "https://i.pinimg.com/564x/22/19/da/2219daff179da0523a4434c427df08f4.jpg",
  },
  {
    name: "Clint Barton",
    username: "@Hawkeye",
    body: "Streamlines my to-do list like a pro, saving me time and effort!",
    img: "https://i.pinimg.com/564x/7c/11/8f/7c118f082c54c199c323c1075aa37cd1.jpg",
  },
  {
    name: "Natasha Romanoff",
    username: "@BlackWidow",
    body: "I can easily prioritize and stay focused. A real game-changer!",
    img: "https://i.pinimg.com/564x/ac/89/8c/ac898c9224e211fcad0b525ffa00e6db.jpg",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg  md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
    </div>
  );
}
