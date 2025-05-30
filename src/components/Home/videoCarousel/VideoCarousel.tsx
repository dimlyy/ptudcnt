// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import Image from "next/image";

// import { hightlightsSlides } from "../../../constants";
// import { playImg, pauseImg, replayImg } from "../../../utils";

// const VideoCarousel = () => {
//   const videoRef = useRef([]);
//   const videoSpanRef = useRef([]);
//   const videoDivRef = useRef([]);
//   const [renderedRefs, setRenderedRefs] = useState([]);

//   useEffect(() => {
//     setRenderedRefs([...videoRef.current]); // Sao chép mảng để kích hoạt re-render
//   }, [videoRef.current]);

//   const [video, setVideo] = useState({
//     isEnd: false,
//     startPlay: false,
//     videoId: 0,
//     isLastVideo: false,
//     isPlaying: false,
//   });

//   const [loadedData, setLoadedData] = useState([]);

//   const { isEnd, isLastVideo, startPlay, videoId, isPlaying } = video;

//   useEffect(() => {
//     if (loadedData.length > 3) {
//       if (!isPlaying) {
//         videoRef.current[videoId].pause();
//       } else {
//         startPlay && videoRef.current[videoId].play();
//       }
//     }
//   }, [startPlay, videoId, isPlaying, loadedData]);

//   useGSAP(() => {
//     // slider animation to move the video out of the screen and bring the next video in
//     gsap.to("#slider", {
//       transform: `translateX(${-100 * videoId}%)`,
//       duration: 2,
//       ease: "power2.inOut", // show visualizer https://gsap.com/docs/v3/Eases
//     });

//     // video animation to play the video when it is in the view
//     gsap.to("#video", {
//       scrollTrigger: {
//         trigger: "#video",
//         toggleActions: "restart none none none",
//       },
//       onComplete: () => {
//         setVideo((pre) => ({
//           ...pre,
//           startPlay: true,
//           isPlaying: true,
//         }));
//       },
//     });
//   }, [isEnd, videoId]);


//   useEffect(() => {
//     let currentProgress = 0;
//     let span = videoSpanRef.current;

//     if (span[videoId]) {
//       // animation to move the indicator
//       let anim = gsap.to(span[videoId], {
//         onUpdate: () => {
//           // get the progress of the video
//           const progress = Math.ceil(anim.progress() * 100);

//           if (progress != currentProgress) {
//             currentProgress = progress;

//             // set the width of the progress bar
//             gsap.to(videoDivRef.current[videoId], {
//               width:
//                 window.innerWidth < 760
//                   ? "10vw" // mobile
//                   : window.innerWidth < 1200
//                   ? "10vw" // tablet
//                   : "4vw", // laptop
//             });

//             // set the background color of the progress bar
//             gsap.to(span[videoId], {
//               width: `${currentProgress}%`,
//               backgroundColor: "white",
//             });
//           }
//         },

//         // when the video is ended, replace the progress bar with the indicator and change the background color
//         onComplete: () => {
//           if (isPlaying) {
//             gsap.to(videoDivRef.current[videoId], {
//               width: "12px",
//             });
//             gsap.to(span[videoId], {
//               backgroundColor: "#afafaf",
//             });
//           }
//         },
//       });

//       if (videoId == 0) {
//         anim.restart();
//       }

//       // update the progress bar
//       const animUpdate = () => {
//         anim.progress(
//           videoRef.current[videoId].currentTime /
//             hightlightsSlides[videoId].videoDuration
//         );
//       };

//       if (isPlaying) {
//         // ticker to update the progress bar
//         gsap.ticker.add(animUpdate);
//       } else {
//         // remove the ticker when the video is paused (progress bar is stopped)
//         gsap.ticker.remove(animUpdate);
//       }
//     }
//   }, [videoId, startPlay]);
  

//   const handleProcess = (type, i) => {
//     switch (type) {
//       case "video-end":
//         setVideo((pre) => ({ ...pre, isEnd: true, videoId: i + 1 }));
//         break;

//       case "video-last":
//         setVideo((pre) => ({ ...pre, isLastVideo: true }));
//         break;

//       case "video-reset":
//         setVideo((pre) => ({ ...pre, videoId: 0, isLastVideo: false }));
//         break;

//       case "pause":
//         setVideo((pre) => ({ ...pre, isPlaying: !pre.isPlaying }));
//         break;

//       case "play":
//         setVideo((pre) => ({ ...pre, isPlaying: !pre.isPlaying }));
//         break;

//       default:
//         return video;
//     }
//   };

//   const handleLoadedMetaData = (i, e) => {
//     console.log(`Video ${i} loaded`);
//     setLoadedData((pre) => [...pre, e]);
//   };
  

//   return (
//     <>
//       {/* video */}
//       <div className="flex relative items-center ml-4 mr-4">
//         {hightlightsSlides.map((list, i) => (
//           <div key={list.id} id="slider" className="sm:pr-20 pr-10">
//             <div className="relative max-w-full w-[80vw] md:h-[70vh] sm:h-[50vh]">
//               <div
//                 className="max-w-full h-full flex items-center justify-center
//                         rounded-xl pd-8 overflow-hidden bg-black"
//               >
//                 <video
//                   id="video"
//                   playsInline={true}
//                   preload="auto"
//                   muted
//                   ref={(el) => (videoRef.current[i] = el)}
//                   onEnded={() =>
//                     i !== 3
//                       ? handleProcess("video-end", i)
//                       : handleProcess("video-last")
//                   }
//                   onPlay={() =>
//                     setVideo((pre) => ({ ...pre, isPlaying: true }))
//                   }
//                   onLoadedMetadata={(e) => handleLoadedMetaData(i, e)}
//                 >
//                   <source src={list.video} type="video/mp4" />
//                 </video>
//               </div>

//               <div className="absolute top-12 left-[5%] z-10 text-white">
//                 {list.textLists.map((text) => (
//                   <p key={text}>{text}</p>
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Title + button*/}
//         <div className="">
//             <div className="relative flex items-center justify-center mt-3">
//               <div className="flex items-center justify-center py-5 px-7 bg-gray-300 backdrop-blur rounded-full">
//                 {renderedRefs.map((_, i) => (
//                   <span
//                     key={i}
//                     ref={(el) => (videoDivRef.current[i] = el)}
//                     className="flex mx-2 w-3 h-3 bg-gray-200 rounded-full relative cursor-pointer"
//                   >
//                     <span
//                       className="absolute h-full w-full rounded-full"
//                       ref={(el) => (videoSpanRef.current[i] = el)}
//                     />
//                   </span>
//                 ))}
//               </div>
      
//               <button className="bg-gray-300 w-11 h-11 rounded-full flex items-center justify-center ml-2">
//                 <Image
//                   width={30}
//                   height={30}
//                   src={isLastVideo ? replayImg : !isPlaying ? playImg : pauseImg}
//                   alt={isLastVideo ? "replay" : !isPlaying ? "play" : "pause"}
//                   onClick={
//                     isLastVideo
//                       ? () => handleProcess("video-reset")
//                       : !isPlaying
//                       ? () => handleProcess("play")
//                       : () => handleProcess("pause")
//                   }
//                 />
//               </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default VideoCarousel;
