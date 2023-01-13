import { React, useEffect, useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import OurStoryFormContainer from '../components/OurstoryFormContainer';
import InfoBG from '../assets/ourstory-info-bg.svg';
import LukaLine from '../assets/luka-line.svg';
import LukaLineMobile from '../assets/luka-line-mobile.svg';
import MazenLineMobile from '../assets/mazen-line-mobile.svg';
import MazenLine from '../assets/mazen-line.svg';
import TimeLineBG from '../assets/timeline-section.svg';
import MobileTimeLineBG from '../assets/mobile-timeline.svg';
import ReactGA from 'react-ga';

const style = {
	timeLineBG: {
		background: `url(${TimeLineBG})`,
	},
	mobileTimeLineBG: {
		background: `url(${MobileTimeLineBG})`,
	},
};

const useViewport = () => {
	const [width, setWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleWindowResize = () => setWidth(window.innerWidth);
		window.addEventListener('resize', handleWindowResize);
		return () => window.removeEventListener('resize', handleWindowResize);
	}, []);

	return { width };
};

const Ourstory = () => {
	useEffect(() => {
		ReactGA.pageview(window.location.pathname);
	}, []);

	const { width } = useViewport();
	const breakpoint = 768;

	return (
		<div>
			<Navbar />
			<div className="flex mt-[40px]">
				<div
					className="md:w-2/5 bg-contain bg-no-repeat hidden md:block"
					style={{
						backgroundImage: `url(${InfoBG})`,
					}}
				></div>
				<div className="md:w-3/5">
					<div>
						<img className="hidden md:block" src={LukaLine} alt="" srcset="" />
						<img
							className="block md:hidden w-full h-[100px] mb-[20px]"
							src={LukaLineMobile}
							alt=""
							srcset=""
						/>
					</div>
					<div className="mt-[40px] px-10 md:w-1/2 mx-auto text-center">
						<p className="font-semibold">2019</p>
						<p className="mt-[18px] text-base">
							Luka and Mazen have been business partners for many years, having
							met in high school and bonded over our shared mentality and
							entrepreneurial spirit. We have always been driven to find ways to
							improve upon existing ideas and create new solutions to problems.
						</p>
					</div>
					<div className="mt-[40px]">
						<img className="hidden md:block" src={MazenLine} alt="" srcset="" />
						<img
							className="block md:hidden w-full h-[100px] mb-[20px]"
							src={MazenLineMobile}
							alt=""
							srcset=""
						/>
					</div>
				</div>
			</div>
			<div
				className={`pt-[120px] !bg-no-repeat !bg-contain md:!bg-cover !bg-center mr-10 md:mr-0`}
				style={width > breakpoint ? style.timeLineBG : style.mobileTimeLineBG}
			>
				<div className="md:w-1/2 md:ml-auto md:text-center md:pt-10">
					<div className="md:w-[60%] md:mx-auto ml-10 mr-20 pt-20">
						<p className="font-semibold">2020 & 2021</p>
						<p className="mt-[16px] text-base">
							Luka and I started our journey as e-commerce partners, building
							and growing our online business. This allowed us to gain valuable
							experience and insights into the world of entrepreneurship and
							e-commerce.
						</p>
					</div>
				</div>
				<div className="md:w-1/2 text-center md:px-[20px] md:pt-10 mt-60">
					<div className="md:w-[60%] md:mx-auto ml-10 mr-20 pt-20">
						<p className="font-semibold">2022</p>
						<p className="mt-[16px] text-base">
							During the growth of our e-commerce business and working in sales,
							we experienced the challenges of cold calling and decided to
							create Rhetora, an AI-powered platform that helps salespeople
							improve their cold calling skills and increase their chances of
							success in a stress-free environment.
						</p>
					</div>
				</div>
				<div className="md:w-1/2 md:ml-auto text-center md:px-[20px] md:pt-60 md:pb-[200px] pb-20">
					<div className="md:w-[60%] md:mx-auto ml-10 mr-20 pt-20">
						<p className="font-semibold">2023</p>
						<p className="mt-[16px] text-base">
							Rhetora is revolutionizing the sales industry by helping
							salespeople master cold calling using AI. With Rhetora,
							salespeople can improve their skills and increase their chances of
							success. Rhetora empowers salespeople to turn cold calling into a
							powerful tool for building relationships and closing deals.
						</p>
					</div>
				</div>
			</div>

			<div className="relative">
				<OurStoryFormContainer id="com2" title="Get in Touch With Us" />
				<Footer />
			</div>
		</div>
	);
};

export default Ourstory;
