import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  NavLink,
} from 'reactstrap';

const items = [
  {
    src: '/images/1.jpg',
    altText: 'Slide 1',
    caption: 'Welcome to BB Products',
    desc: '#1 in the world',
    key: 1,
  },
  {
    src: '/images/2.jpg',
    altText: 'Slide 2',
    caption: '#Achievement 1',
    desc: '',
    key: 2,
  },
  {
    src: '/images/3.jpg',
    altText: 'Slide 3',
    caption: '#Achievement 2',
    desc: '',
    key: 3,
  },
];

function Home(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem className="custom-tag"
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption
          captionText={item.desc}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <div>
      <style>
        {`.custom-tag {
              max-width: 100%;
              height: 500px;
              background: black;
            }`}
      </style>
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
    <div class="text-center mt-5">
  <h3>Let's Start....</h3>
</div>
<div class="text-center marginbottom">
  <button type="button" class="btn btn-primary mx-3 w-25" ><NavLink href='/login'>Go to Login Page</NavLink></button>
  <button type="button" class="btn btn-success mx-3 w-25" ><NavLink href='/registration'>Go to Registration Page</NavLink></button>
</div>
    </div>
  );
}

export default Home;