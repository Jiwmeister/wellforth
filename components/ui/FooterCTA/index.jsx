import SectionWrapper from "../../SectionWrapper"
import NavLink from "../NavLink"

const FooterCTA = () => (
    <SectionWrapper>
        <div className="custom-screen">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                    Our Office Location
                </h2>
                <p className="mt-3 text-gray-500">
                Welcome to our culinary haven at Wellforth Pty Ltd, located on the Ground Floor at 470 St Kilda Road, Melbourne VIC 3004.
                </p>
                
            </div>
            <div className="h-sreen bg-gray-800 mt-12">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3150.813797925835!2d144.97419487663797!3d-37.841244771968796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad6693aa464baf9%3A0xbd7c4b011b939aeb!2s470%20St%20Kilda%20Rd%2C%20Melbourne%20VIC%203004%2C%20Australia!5e0!3m2!1sid!2sid!4v1702358486686!5m2!1sid!2sid" width="100%" height="450" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
        
    </SectionWrapper>
)

export default FooterCTA