import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { experienceInfo } from "@/app/personal-info/experience";
import Image from "next/image";

const Experience = () => {
  return (
    <div className="h-screen w-screen flex items-center px-6">
      {/* Left side - Content */}
      <div className="w-1/2 pr-8">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          {experienceInfo.title}
          <span className="bg-red-500 h-2 w-16 block mt-2"></span>
        </h2>

        {/* Description */}
        <div className="mb-8">
          {experienceInfo.description.split("\n\n").map((paragraph, index) => (
            <p
              key={index}
              className="text-gray-300 text-lg leading-relaxed mb-4"
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Key Skills */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-white mb-4">Key Skills</h3>
          <div className="flex flex-wrap gap-3">
            {experienceInfo.keySkills.map((skill, index) => (
              <span
                key={index}
                className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-red-600 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Right side - Portrait Images Carousel */}
      <div className="w-1/2 flex items-center justify-center">
        <Carousel className="w-full max-w-md">
          <CarouselContent>
            {experienceInfo.images.map((image) => (
              <CarouselItem key={image.id}>
                <div className="p-4">
                  <div className="bg-gray-800 rounded-lg p-4 shadow-lg border border-gray-700">
                    <div className="relative w-full h-96 md:h-[500px] mb-4 rounded-lg overflow-hidden">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, 40vw"
                      />
                    </div>
                    <p className="text-gray-300 text-center text-sm leading-relaxed">
                      {image.alt}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-white hover:bg-red-500 hover:text-white border-gray-600" />
          <CarouselNext className="text-white hover:bg-red-500 hover:text-white border-gray-600" />
        </Carousel>
      </div>
    </div>
  );
};

export default Experience;
