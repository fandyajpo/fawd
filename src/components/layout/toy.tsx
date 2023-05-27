const A = () => {
  return null;
};

export default A;
// import useEmblaCarousel from "embla-carousel-react";
// import Autoplay from "embla-carousel-autoplay";
// import { useState, useEffect, useRef, useCallback } from "react";

// interface Props {
//   page: number;
// }

// const media = [
//   {
//     color: "blue",
//   },
//   {
//     color: "blue",
//   },
//   {
//     color: "blue",
//   },
//   {
//     color: "blue",
//   },
// ];

// const Toy = ({ options = { loop: true } }) => {
//   const autoplay = useRef(
//     Autoplay(
//       { delay: 1000, stopOnInteraction: false },
//       //   @ts-ignore
//       (emblaRoot) => emblaRoot.parentElement
//     )
//   );

//   const [emblaRef, emblaApi] = useEmblaCarousel(options, [autoplay.current]);
//   const [page, setPage] = useState(0);
//   const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
//   const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

//   const [scrollSnaps, setScrollSnaps] = useState([]);

//   const onSelect = useCallback(() => {
//     if (!emblaApi) return;
//     setPrevBtnEnabled(emblaApi.canScrollPrev());
//     setNextBtnEnabled(emblaApi.canScrollNext());
//     setPage(emblaApi.selectedScrollSnap());
//   }, [emblaApi]);

//   useEffect(() => {
//     if (!emblaApi) return;
//     onSelect();
//     // @ts-ignore
//     setScrollSnaps(emblaApi.scrollSnapList());
//     emblaApi.on("select", onSelect);
//   }, [emblaApi, onSelect]);

//   return (
//     <div className="w-full h-screen overflow-hidden">
//       <div className="embla relative bg-gradient-to-r from-blue-700 to-blue-500">
//         <div className="relative">
//           <div
//             className={`duration-1000 bg-white w-64 h-64 md:w-96 md:h-96 rounded-full z-10 absolute flex items-center justify-center -left-24 -top-24 ${
//               page === 0
//                 ? "rotate-0"
//                 : page == 1
//                 ? "rotate-90"
//                 : page == 2
//                 ? "rotate-180"
//                 : page == 3
//                 ? "-rotate-90"
//                 : page == 4 && "-rotate-0"
//             } duration-300`}
//           >
//             <First page={page} />
//             <Second page={page} />
//             {/* <div className="bg-black w-24 h-24 rounded-full " /> */}
//             <Third page={page} />
//             <Fourth page={page} />
//           </div>
//         </div>
//         <div className="embla__viewport" ref={emblaRef}>
//           <div className="embla__container">
//             {media.map((_, index) => (
//               <div
//                 className={`embla__slide ${
//                   page === index ? "" : "opacity-0"
//                 } w-full h-screen flex items-center justify-end`}
//                 key={index}
//               ></div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Toy;

// const First = ({ page }: Props) => {
//   return (
//     <>
//       <div
//         className={`bg-white w-44 h-44 rounded-full absolute duration-1000 ${
//           page === 0 ? "opacity-100 top-96 left-96" : "opacity-0 top- left-0"
//         }`}
//       />
//       <div
//         className={`bg-white w-20 h-20 rounded-full absolute duration-1000 ${
//           page === 0
//             ? "opacity-100 -right-96 bottom-24"
//             : "opacity-0 left-0 bottom-0"
//         }`}
//       />
//       <div
//         className={`bg-white w-20 h-20 rounded-full absolute duration-1000 z-10 ${
//           page === 0
//             ? "opacity-100 -bottom-44 left-52"
//             : "opacity-0 top-0 left-0"
//         }`}
//       ></div>
//     </>
//   );
// };
// const Second = ({ page }: Props) => {
//   return (
//     <>
//       <div
//         className={`bg-white w-44 h-44 rounded-full absolute duration-1000 ${
//           page === 1 ? "opacity-100 -top-20 -right-64" : "opacity-0 top- left-0"
//         }`}
//       />
//       <div
//         className={`bg-white w-20 h-20 rounded-full absolute duration-1000 ${
//           page === 1
//             ? "opacity-100 -right-96 bottom-28"
//             : "opacity-0 left-0 bottom-0"
//         }`}
//       />
//       <div
//         className={`bg-white w-20 h-20 rounded-full absolute duration-1000 z-10 ${
//           page === 1 ? "opacity-100 -top-28 left-64" : "opacity-0 top-0 left-0"
//         }`}
//       />
//     </>
//   );
// };

// const Third = ({ page }: Props) => {
//   return (
//     <>
//       <div
//         className={`bg-white w-44 h-44 rounded-full absolute duration-1000 ${
//           page === 2 ? "opacity-100 -top-0 -left-96" : "opacity-0 top- left-0"
//         }`}
//       />
//       <div
//         className={`bg-white w-32 h-32 rounded-full absolute duration-1000 ${
//           page === 2
//             ? "opacity-100 -left-44 bottom-32"
//             : "opacity-0 left-0 bottom-0"
//         }`}
//       />
//       <div
//         className={`bg-white w-20 h-20 rounded-full absolute duration-1000 z-10 ${
//           page === 2 ? "opacity-100 -top-28 right-64" : "opacity-0 top-0 left-0"
//         }`}
//       />
//     </>
//   );
// };

// const Fourth = ({ page }: Props) => {
//   return (
//     <>
//       <div
//         className={`bg-white w-44 h-44 rounded-full absolute duration-1000 ${
//           page === 3 ? "opacity-100 -top-0 -left-96" : "opacity-0 top- left-0"
//         }`}
//       />
//       <div
//         className={`bg-white w-32 h-32 rounded-full absolute duration-1000 ${
//           page === 3
//             ? "opacity-100 -left-36 -bottom-96"
//             : "opacity-0 left-0 bottom-0"
//         }`}
//       />
//       <div
//         className={`bg-white w-32 h-32 rounded-full absolute duration-1000 ${
//           page === 3
//             ? "opacity-100 -left-52 -bottom-28"
//             : "opacity-0 left-0 bottom-0"
//         }`}
//       />
//       <div
//         className={`bg-white-20 h-20 rounded-full absolute duration-1000 z-10 ${
//           page === 3
//             ? "opacity-100 -bottom-44 right-44"
//             : "opacity-0 top-0 left-0"
//         }`}
//       />
//     </>
//   );
// };
