import Brand from '../Brand'
import instagram from "../../../public/icons/logo-instagram.svg"

const socialInfo = [
    
    {
        icon: <svg className="w-6 h-6 hover:text-gray-500 duration-150" fill="none" viewBox="0 0 28 28"><g clip-path="url(#clip0_1213_3074)"><path fill="currentColor" d="M25.927 0H2.067C.924 0 0 .902 0 2.018v23.959C0 27.092.924 28 2.067 28h23.86C27.07 28 28 27.092 28 25.982V2.018C28 .902 27.07 0 25.927 0zM8.307 23.86H4.151V10.495h4.156V23.86zM6.229 8.673a2.407 2.407 0 110-4.812 2.406 2.406 0 010 4.812zM23.86 23.86h-4.15v-6.497c0-1.547-.028-3.543-2.16-3.543-2.16 0-2.49 1.69-2.49 3.434v6.606h-4.144V10.495h3.98v1.826h.056c.552-1.05 1.908-2.16 3.926-2.16 4.206 0 4.982 2.767 4.982 6.366v7.333z" /></g><defs><clipPath id="clip0_1213_3074"><path fill="#fff" d="M0 0h28v28H0z" /></clipPath></defs></svg>,
        href: "#"
    },
]

const Footer = () => (
    <footer>
        <div className="custom-screen pt-16">
        <div className="flex flex-wrap gap-y-10 items-center justify-between">
                <div className="space-y-4">
                <Brand />
                    <h2 className="text-gray-800 text-lg font-semibold sm:text-2xl">Connect With Us</h2>
                    <p className="max-w-md text-gray-500">
                    At Wellforth Pty Ltd, we're more than a company, we're a community passionate about plant-based living. 
                    </p>
                    <div className='flex item-center gap-x-1 text-gray-600'>
                        <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                        </svg>
                        </span>
                        <p>glowdiaries.com</p>
                    </div>
                    <div className='flex item-center gap-x-1 text-gray-600'>
                        <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                        </span>
                        <p>hello@glow-diaries.com</p>
                    </div>
                    <div className='flex item-center gap-x-1 text-gray-600'>
                        <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                        </span>
                        <p>+61 403 609 850</p>
                    </div>
                </div>
                <div className='space-y-4'>
                    
                    
                </div>
            </div>
            <div className="mt-10 py-10 border-t items-center justify-between sm:flex">
                <p className="text-gray-600">© 2023 Wellforth Pty Ltd. All rights reserved.</p>
                <div className="flex items-center gap-x-6 text-gray-400 mt-6">
                    {
                        socialInfo.map((item, idx) => (
                            <a key={idx} href={item.href} className="w-6 h-6 hover:text-gray-500 duration-150" aria-label="social media" target="_blank" rel="noreferrer">
                                {item.icon}
                            </a>
                        ))
                    }
                </div>
            </div>
        </div>
    </footer>
)

export default Footer