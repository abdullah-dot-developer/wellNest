import React from "react";

import assetImg1 from "../assets/features/assestImg.png";
import assetImg2 from "../assets/features/assetsImg2.png";
import circleHeart from "../assets/features/circle.png";
import giftBox from "../assets/features/gift-box.png";
import healthInsurance from "../assets/features/health-insurance.png";
import medicalBox from "../assets/features/medical-box.png";
import FeatureCard from "./FeatureCard";

const cardData = [
  {
    href: giftBox,
    title: "Personalized Wellness Programs",
    description:
      "Custom health and fitness plans designed to meet individual needs, including mental and physical health components.",
  },
  {
    href: medicalBox,
    title: "Emergency Response Integration",
    description:
      "Connecting users to emergency services or facilitating quick medical responses during urgent health situations.",
  },
  {
    href: healthInsurance,
    title: "Health Insurance Solutions",
    description:
      "Offering tailored health and life insurance plans, including digital management tools for easy access and claims processing. ",
  },
  {
    href: circleHeart,
    title: "Health Monitoring Tools",
    description:
      "Providing users with digital tools to track their vitals, medical history, and progress with personalized health plans.",
  },
  {
    href: assetImg2,
    title: "Corporate Health Solutions",
    description:
      "Providing businesses with comprehensive wellness programs, health benefits, and employee care solutions. ",
  },
  {
    href: assetImg1,
    title: "OPD Care System",
    description:
      "Efficient, digital-driven OPD solutions that streamline patient management and care.",
  },
];

const Features = () => {
  return (
    <div className="my-16 md:my-24 flex flex-col gap-6 items-center justify-center w-[95%] mx-auto">
      <h1 className="text-2xl text-center font-[500] md:text-4xl">
        Our Extensive Care Features
      </h1>
      <div className="grid items-center justify-center sm:grid-cols-2 lg:grid-cols-[1fr,1fr,1fr] gap-6 w-[95%] mx-auto my-8 ">
        {cardData.map((card) => (
          <FeatureCard
            image={card.href}
            title={card.title}
            description={card.description}
            key={card.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
