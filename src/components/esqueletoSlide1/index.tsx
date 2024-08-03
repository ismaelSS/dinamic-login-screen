'use client'
import * as React from "react"
import "./styles.css"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

export default function EsqueletoSlide1() {
  const [ref] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 4,
      spacing: 20,
    },
  })
  return (
    <div ref={ref} className="keen-slider h-[150px]">

      <div className="keen-slider__slide ">
        <div className="bg-red-600 w-full h-[85%] shadow-1"></div>
        <p className="text-sm font-semibold text-black self-center">nome exemplo 1</p>
      </div>

      <div className="keen-slider__slide ">
        <div className="bg-lime-600 w-full h-[85%] shadow-1"></div>
        <p className="text-sm font-semibold text-black self-center">nome exemplo 2</p>
      </div>

      <div className="keen-slider__slide ">
        <div className="bg-sky-600 w-full h-[85%] shadow-1"></div>
        <p className="text-sm font-semibold text-black self-center">nome exemplo 3</p>
      </div>

      <div className="keen-slider__slide ">
        <div className="bg-violet-600 w-full h-[85%] shadow-1"></div>
        <p className="text-sm font-semibold text-black self-center">nome exemplo 4</p>
      </div>

      <div className="keen-slider__slide ">
        <div className="bg-fuchsia-600 w-full h-[85%] shadow-1"></div>
        <p className="text-sm font-semibold text-black self-center">nome exemplo 5</p>
      </div>

      <div className="keen-slider__slide ">
        <div className="bg-pink-600 w-full h-[85%] shadow-1"></div>
        <p className="text-sm font-semibold text-black self-center">nome exemplo 6</p>
      </div>
    </div>
  )
}
