import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

const InfiniteMarquee = ({
	items,
	direction = "left",
	speed = 50,
	gap = 20,
}) => {
	const marqueeRef = useRef(null);
	const [contentWidth, setContentWidth] = useState(0);

	useEffect(() => {
		const marquee = marqueeRef.current;
		if (!marquee) return;

		// Calculate the width of a single set of items
		const singleSetWidth = marquee.firstChild.offsetWidth;
		setContentWidth(singleSetWidth);

		// Create a seamless loop
		const createSeamlessLoop = () => {
			const repeats = Math.ceil(marquee.offsetWidth / singleSetWidth) + 1;
			const totalWidth = singleSetWidth * repeats;

			gsap.to(marquee, {
				x: direction === "left" ? -singleSetWidth : singleSetWidth,
				duration: singleSetWidth / speed,
				ease: "none",
				repeat: -1,
				modifiers: {
					x: gsap.utils.unitize((x) => {
						return (
							(parseFloat(x) % singleSetWidth) +
							(direction === "left" ? 0 : -singleSetWidth)
						);
					}),
				},
				onRepeat: () => {
					gsap.set(marquee, { x: 0 });
				},
			});
		};

		createSeamlessLoop();

		return () => {
			gsap.killTweensOf(marquee);
		};
	}, [direction, speed, contentWidth]);

	const renderItems = () => {
		return (
			<div className='flex items-center' style={{ gap: `${gap}px` }}>
				{items.map((item, index) => (
					<span
						key={index}
						className='py-2 px-3 text-sm text-white rounded-lg bg-[#1D2144] whitespace-nowrap'>
						{item}
					</span>
				))}
			</div>
		);
	};

	return (
		<div className='overflow-hidden'>
			<div ref={marqueeRef} className='inline-flex'>
				{renderItems()}
				<div style={{ width: `${gap}px` }} />
				{renderItems()}
				<div style={{ width: `${gap}px` }} />
				{renderItems()}
			</div>
		</div>
	);
};
export default InfiniteMarquee;
