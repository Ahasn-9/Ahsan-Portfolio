import React from "react";
import { Column, Flex } from "@/once-ui/components";
import Image from "next/image";

import "./aboutGallery.css";

const AboutGallery: React.FC = () => {
  return (
    <div className="gallery-grid">
      <div className="about-child grid-item-4x4">
        <Image
          width={200}
          height={200}
          src="/images/gallery/about/LUMS-open-day.png"
          alt="Ahsan-LUMS-open-day"
          className="gallery-image"
        />
      </div>
      <div className="about-child grid-item-3x2">
        <Image
          width={200}
          height={200}
          src="/images/gallery/about/imrtls00-speak-notion.png"
          alt="imrtls00-speak-notion"
          className="gallery-image"
        />
      </div>
      <div className="about-child grid-item-2x1">
        <Image
          width={200}
          height={200}
          src="/images/gallery/about/app-devfest.png"
          alt="cbtl-meetup"
          className="gallery-image"
        />
      </div>
      <div className="about-child grid-item-2x2">
        <Image
          width={200}
          height={200}
          src="/images/gallery/about/devfest22-community.png"
          alt="Description"
          className="gallery-image"
        />
      </div>
      <div className="about-child grid-item-2x2">
        <Image
          width={200}
          height={200}
          src="/images/gallery/about/cbtl-meetup.png"
          alt="cbtl-meetup"
          className="gallery-image"
        />
      </div>
      <div className="about-child grid-item-1x2">
        <Image
          width={200}
          height={200}
          src="/images/gallery/about/imrtls00-speak-tech.png"
          alt="cbtl-meetup"
          className="gallery-image"
        />
      </div>
      <div className="about-child grid-item-2x2">
        <Image
          width={200}
          height={200}
          src="/images/gallery/about/notion-com.png"
          alt="cbtl-meetup"
          className="gallery-image"
        />
      </div>
      <div className="about-child grid-item-3x2">
        <Image
          width={200}
          height={200}
          src="/images/gallery/about/notion-ninjas.png"
          alt="cbtl-meetup"
          className="gallery-image"
        />
      </div>
      <div className="about-child grid-item-2x2">
        <Image
          width={200}
          height={200}
          src="/images/gallery/about/attendee-tech.png"
          alt="cbtl-meetup"
          className="gallery-image"
        />
      </div>
      <div className="about-child grid-item-2x2 speak-pro">
        <Image
          width={200}
          height={200}
          src="/images/gallery/about/imrtls00-speak-pro.png"
          alt="cbtl-meetup"
          className="gallery-image"
        />
      </div>
      <div className="about-child grid-item-1x1">
        <Image
          width={200}
          height={200}
          src="/images/gallery/about/Leather.png"
          alt="cbtl-meetup"
          className="gallery-image-fill"
        />
      </div>
      <div className="about-child grid-item-1x1">
        <Image
          width={200}
          height={200}
          src="/images/gallery/about/Papery.png"
          alt="cbtl-meetup"
          className="gallery-image-fill"
        />
      </div>
    </div>
  );
};

export default AboutGallery;
