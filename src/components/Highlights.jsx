import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";
import {rightImg, searchImg, watchImg} from "../utils/index.js";
import VideoCarousel from "./VideoCarousel.jsx";
import {animateWithGsap} from "../utils/animations.js";


const Highlights = () => {

    useGSAP(() =>{
        animateWithGsap("#highlights_title", {
            y: 0, opacity: 1
        })
        gsap.to(".link",{opacity:1, y:0, delay:1, duration:1, stagger:0.25})

    },[])

    return (
        <section id="highlights" className="w-screen overflow-x-hidden h-full common-padding bg-zinc">
            <div className="screen-max-width">
                <div className="mb-12 w-full md:flex items-end justify-between">
                    <h1 id="highlights_title" className="section-heading">
                        Get the highlights.
                    </h1>
                    <div className="flex flex-wrap items-end gap-5">
                        <p className="link">Watch the film
                            <img src={watchImg} alt="watch" className="ml-2"/>
                        </p>
                        <p className="link">Watch the event
                            <img src={rightImg} alt="right" className="ml-2"/>
                        </p>
                    </div>

                </div>
                <VideoCarousel/>
            </div>
        </section>
    )
}
export default Highlights
