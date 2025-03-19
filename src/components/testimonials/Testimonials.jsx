import React from 'react';
import './Testimonials.css';
import Image3 from '../../assets/avatar-3.svg'
import Image4 from '../../assets/avatar-3.svg'

import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {

	const data = [
		{
		  id: 1,
		  image: Image3,
		  title: "نگار حسینی",
		  subtitle: "طراح ارشد @ دیزاین‌لب",
		  comment: "این فریم‌ورک واقعاً تجربه‌ی طراحی من رو متحول کرد! انعطاف‌پذیری بالا و الگوهای طراحی حرفه‌ای باعث می‌شه کارها خیلی روان‌تر پیش بره.",
		},
		{
		  id: 2,
		  image: Image4,
		  title: "امیررضا شفیعی",
		  subtitle: "برنامه‌نویس فرانت‌اند @ توسعه‌گران نوین",
		  comment: "استفاده از این پلتفرم فوق‌العاده لذت‌بخشه. سرعت بالای توسعه و مستندات خوب، تجربه کار با اون رو عالی کرده!",
		},
		{
		  id: 3,
		  image: Image3,
		  title: "زهرا محمدی",
		  subtitle: "مدیر محصول @ استارتاپ‌پلاس",
		  comment: "همکاری با تیم توسعه‌دهنده این محصول بی‌نظیر بود. تجربه‌ای که نه تنها حرفه‌ای بلکه بسیار الهام‌بخش بود!",
		},
		{
		  id: 4,
		  image: Image4,
		  title: "حسین رضایی",
		  subtitle: "متخصص داده @ دیتاویژن",
		  comment: "تحلیل داده‌ها با این ابزار بسیار ساده و سریع شده. از اینکه می‌تونم به راحتی بین داده‌ها الگوهای مفید پیدا کنم، شگفت‌زده شدم!",
		},
		{
		  id: 5,
		  image: Image3,
		  title: "رؤیا کیانی",
		  subtitle: "توسعه‌دهنده‌ی بک‌اند @ کدنویسان برتر",
		  comment: "ساختار کد و معماری این پروژه بی‌نظیره! همه چیز به درستی چیده شده و توسعه دادن با اون خیلی لذت‌بخشه.",
		},
	  ];
	  

	return (
		<section className="testimonials container section" id='testimonials'>

			<h2 className="section__title">نظرات کاربران</h2>

			<Swiper className="testimonial__container grid"
				modules={[Pagination]}
				spaceBetween={30}
				slidesPerView={1}
				loop={true}
				grabCursor={true}
				pagination={{ clickable: true }}>
				{data.map(({ id, image, title, subtitle, comment }) => {
					return (
						<SwiperSlide className="testimonial__item" key={id}>
							<div className="thumb">
								<img src={image} alt="" />
							</div>
							<h3 className="testimonial__title">{title}</h3>
							<span className="subtitle">{subtitle}</span>
							<div className="comment">{comment}</div>
						</SwiperSlide>
					)
				})}
			</Swiper>
		</section>
	)
}

export default Testimonials