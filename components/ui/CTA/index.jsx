import SectionWrapper from "../../SectionWrapper"
import NavLink from "../NavLink"
import ctaImage from "../../../public/showcase_web.jpg"
import Image from "next/image"

const CTA = () => {
    return (
        <SectionWrapper id="cta" className="pb-0">
            <div className="custom-screen">
                <div className="items-center gap-x-12 lg:flex">
                    <div className="flex-1 sm:hidden lg:block">
                        <Image src={ctaImage} className="rounded-lg md:max-w-lg border-solid border-2 border-brass" alt="Create Successful Business Models with Our IT Solutions" />
                    </div>
                    <div className="max-w-xl mt-6 md:mt-0 lg:max-w-2xl">
                        <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                            Wholesome Living, One Recipe at a Time
                        </h2>
                        <p className="mt-3 text-gray-600">
                        Discover the transformative power of plant-based living. Glow Diaries isn't just an app; it's your partner in crafting a lifestyle that radiates well-being. Join us in savoring the beauty of vegan living, one delicious recipe at a time.
                        </p>
                        <NavLink
                            href="/get-started"
                            className="inline-block mt-4 font-medium text-sm text-white bg-brass "
                        >
                            More Info
                        </NavLink>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    )
}

export default CTA