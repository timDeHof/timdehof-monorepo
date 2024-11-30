import { Leva } from "leva";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { PerspectiveCamera } from "@react-three/drei";

import HackerRoom from "../_components/HackerRoom";
import Target from "../_components/Target";
import ReactLogo from "../_components/ReactLogo";
import Cube from "../_components/Cube";
import Rings from "../_components/Rings";
import CanvasLoader from "../_components/CanvasLoader";
import { calculateSizes } from "../constants/index";
import HeroCamera from "../_components/HeroCamera";
import Button from "../_components/Button";

const Hero = () => {
	const isSmall = useMediaQuery({ maxWidth: 440 });
	const isMobile = useMediaQuery({ maxWidth: 768 });
	const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

	const sizes = calculateSizes(isSmall, isMobile, isTablet);

	return (
		<section className='relative flex flex-col w-full h-screen' id='home'>
			<div className='flex flex-col w-full gap-3 mx-auto mt-20 sm:mt-36 c-space'>
				<p className='text-2xl font-medium text-center text-white sm:text-3xl font-generalsans'>
					Hi, I am Tim DeHof <span className='waving-hand'>👋🏻</span>
				</p>
				<p className='hero_tag text-gray_gradient'>Building Products & Tools</p>
			</div>
			<div className='absolute inset-0 w-full h-full'>
				<Canvas className='w-full h-full'>
					<Suspense fallBack={<CanvasLoader />}>
						<Leva hidden />
						<PerspectiveCamera makeDefault position={[0, 0, 20]} />
						<HeroCamera isMobile={isMobile}>
							<HackerRoom
								// scale={0.07}
								// position={[0, 0, 0]}
								// rotation={[0, -Math.PI / 2, 0]}
								position={sizes.deskPosition}
								rotation={[0.1, -Math.PI, 0]}
								scale={sizes.deskScale}
							/>
						</HeroCamera>
						<group>
							<Target position={sizes.targetPosition} />
							<ReactLogo position={sizes.reactLogoPosition} />
							<Rings position={sizes.ringPosition} />
							<Cube position={sizes.cubePosition} />
						</group>
						<ambientLight intensity={1} />
						<directionalLight position={[10, 10, 10]} intensity={0.5} />
					</Suspense>
				</Canvas>
			</div>
			<div className='absolute left-0 right-0 z-10 w-full bottom-7 c-space'>
				<a href='#about' className='w-fit'>
					<Button
						name="Let's work together"
						isBeam
						containerClass='sm:w-fit w-full sm:min-w-96'
					/>
				</a>
			</div>
		</section>
	);
};

export default Hero;
