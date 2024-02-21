'use client'
import Image from 'next/image'
import { CarouselProvider, Slide, Slider } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import React from 'react'
import first from '../../public/carousel/number4.png'
import second from '../../public/carousel/number4.png'
import third from '../../public/carousel/number4.png'
import a4th from '../../public/carousel/number4.png'
import a5th from '../../public/carousel/number4.png'

interface CarouselProps {
  isMobile: boolean
  isTablet: boolean
  isDesktop: boolean
}

interface CarouselState {
  visibleSlides: number
}

export default class CarouselComponent extends React.Component<
  CarouselProps,
  CarouselState
> {
  constructor(props: CarouselProps) {
    super(props)
    this.state = {
      visibleSlides: 3.5,
    }
  }

  componentDidMount() {
    this.updateVisibleSlides()
    window.addEventListener('resize', this.updateVisibleSlides)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateVisibleSlides)
  }

  updateVisibleSlides = () => {
    const width = window.innerWidth
    let visibleSlides = 2.5

    if (width < 768) {
      visibleSlides = 1.5
    } else if (width < 1024) {
      visibleSlides = 1
    } else if (width < 1280) {
      visibleSlides = 1.5
    } else if (width < 1530) {
      visibleSlides = 2
    }

    this.setState({ visibleSlides })
  }

  render() {
    const { visibleSlides } = this.state

    return (
      <div>
        <div className={'hidden md:block'}>
          <CarouselProvider
            naturalSlideWidth={300}
            naturalSlideHeight={130}
            totalSlides={5}
            infinite={true}
            visibleSlides={visibleSlides}
            currentSlide={0.3}
            className="pb-20 pt-20"
            isPlaying={true}
            interval={3500}
          >
            <Slider>
              <Slide index={0}>
                <div className="w-[200px] mx-auto ">
                  <Image
                    className="w-full h-full object-cover"
                    src={first}
                    alt=""
                  ></Image>
                </div>
              </Slide>
              <Slide index={1}>
                <div className="w-[200px] mx-auto">
                  <Image
                    className="w-full h-full object-cover"
                    src={second}
                    alt=""
                  ></Image>
                </div>
              </Slide>
              <Slide index={2}>
                <div className="w-[200px] mx-auto">
                  <Image
                    className="w-full h-full object-cover"
                    alt=""
                    src={third}
                  ></Image>
                </div>
              </Slide>
              <Slide index={3}>
                <div className="w-[200px] mx-auto">
                  <Image className="" alt="" src={a4th}></Image>
                </div>
              </Slide>
              <Slide index={4}>
                <div className="w-[200px] mx-auto">
                  <Image
                    className="w-full h-full object-cover"
                    alt=""
                    src={a5th}
                  ></Image>
                </div>
              </Slide>
            </Slider>
          </CarouselProvider>
        </div>
        <div className={'px-5 md:hidden pb-10'}>
          <Image alt="/" src={second} />
        </div>
      </div>
    )
  }
}
