import NavLink from "../NavLink"

const Hero = () => (
    <section>
        <div className="custom-screen py-24 pt-56 text-gray-600">
            <div className="space-y-5 max-w-4xl mx-auto text-center">
                <h1 className="text-4xl text-gray-800 font-extrabold mx-auto sm:text-6xl">
                🌱 Elevate Your Plate, Elevate Your Life 🌱
                </h1>
                <p className="max-w-xl mx-auto">
                Welcome to Wellforth Pty Ltd, where we believe that nourishing your body with vibrant, plant-based goodness is the key to a well-lived life.
                </p>
                <div className="flex items-center justify-center gap-x-3 font-medium text-sm">
                    <NavLink
                        href="/"
                        className="text-white bg-brass hover:bg-gray-600 active:bg-gray-900 "
                    >
                        Download Our Apps
                    </NavLink>
                    <NavLink
                        href="#cta"
                        className="text-gray-700 border hover:bg-gray-50"
                        scroll={false}
                    >
                        Learn more
                    </NavLink>
                </div>
            </div>
        </div>
    </section>
)

export default Hero