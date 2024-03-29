import { descriptionItems } from "../utils/links"
import Link from "next/link"

const Description = () => {
  return (
    <section className="mt-[100px] flex py-[75px]">
      {descriptionItems.map(item => (
        <div key={item.id} className="flex flex-col items-center max-w-[400px]">
          <h2 className="font-heading text-[25px] leading-[39px] text-darkBlue">{item.heading}</h2>
          <p className="text-center text-[22px] text-darkGrey mt-[17px] mx-[40px] mb-[48px]">{item.text}</p>
          <Link href={item.link} className="text-[18px] leading-[27px] text-darkGrey flex items-center justify-center gap-[6px] hover:text-lightBrown">
            <p className="">View more</p>
            <img src="/icons/arrowRight.svg" alt="arrow right" />
          </Link>
        </div>
      ))}
    </section>
  )
}

export default Description