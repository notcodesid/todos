import Image from "next/image"
import HeroImage  from "../hero.avif"
import { BorderBeam } from "./magicui/border-beam"

export function ImageEffect() {
    return (
        <>
        <div className="relative ml-5 md:ml-[6.5rem] flex justify-center items-center ">
            <BorderBeam size={250} duration={12} delay={9} />
          <Image
            src={HeroImage}
            alt="DarkMail Email Client Interface"
            width={1200}
            height={675}
            className="rounded-lg"
          />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent rounded-b-lg"></div>
        </div>
        </>
    )
}