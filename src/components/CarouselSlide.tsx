'use client';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

type Props = {
  children: React.ReactNode;
};

const responsive = {
  desktop: {
    breakpoint: { max: 1920, min: 1024 },
    items: 4,
    slidesToSlide: 1,
  },

  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
    slidesToSlide: 1,
  },

  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

export default function CarouselSlide({ children }: Props) {
  return (
    <Carousel
      responsive={responsive}
      autoPlaySpeed={2000}
      autoPlay
      infinite
      containerClass='flex w-full gap-2'
    >
      {children}
    </Carousel>
  );
}
