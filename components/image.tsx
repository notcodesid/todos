import Image from "next/image"
import HeroImage  from "../hero.avif"
import { BorderBeam } from "./magicui/border-beam"

export function ImageEffect() {
    return (
        <>
        <div className="relative ml-5  flex justify-center items-center ">
          <Image
            src={HeroImage}
            alt="DarkMail Email Client Interface"
            width={1200}
            height={675}
            className="rounded-lg"
          />
          <BorderBeam size={250} duration={12} delay={9} />
        </div>
        </>
    )
}