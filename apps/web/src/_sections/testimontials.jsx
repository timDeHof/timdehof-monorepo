import { clientReviews } from "../constants/index";

const Testimontials = () => {
	return (
		<section className='my-20 c-space'>
			<h3 className='head-text'>Hear from people I've worked with</h3>

			<div className='client-container'>
				{clientReviews.map(({ id, name, position, review, img }) => (
					<div key={`review-${id}`} className='client-review'>
						<div>
							<p className='font-light text-white'>{review}</p>

							<div className='client-content'>
								<div className='flex gap-3'>
									<img
										src={img}
										alt='reviewer'
										className='rounded-full size-12'
									/>
									<div className='flex flex-col'>
										<p className='font-semibold text-white-800'>{name}</p>
										<p className='text-sm font-light text-white-500 md:text-base'>
											{position}
										</p>
									</div>
								</div>

								<div className='flex items-center self-end gap-2'>
									{Array.from({ length: 5 }).map((_, index) => (
										<img
											key={index}
											src='/assets/star.png'
											alt='star'
											className='size-5'
										/>
									))}
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Testimontials;
