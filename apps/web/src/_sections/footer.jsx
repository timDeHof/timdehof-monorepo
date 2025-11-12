import React from "react";
import { socialMedia } from "../constants/index";
const Footer = () => {
	return (
		<section className='flex flex-wrap items-center justify-between gap-5 pb-3 border-t c-space pt-7 border-black-300'>
			<div className='flex gap-2 text-white-500 '>
				<p>Terms & conditions</p>
				<p>|</p>
				<p>Privacy policy</p>
			</div>
			<div className='flex gap-3'>
				{socialMedia.map(({ id, img, name, link }) => (
					<a
						href={link}
						target='_blank'
						rel='noreferrer'
						className='social-icon'
						key={id}>
						<img src={img} alt={name} className='size-1/2' />
					</a>
				))}
			</div>
			<p className='text-white-500'>
				© {new Date().getFullYear()} Tim DeHof. All rights reserved.
			</p>
		</section>
	);
};

export default Footer;
