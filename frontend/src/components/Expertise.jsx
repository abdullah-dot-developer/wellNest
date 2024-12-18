import React from "react";

const expertise = [
  {
    title: "Telemedicine & Online Consultations",
    description:
      "Providing remote consultations with licensed healthcare professionals across various specialties.",
  },
  {
    title: "Personalized Wellness Programs",
    description:
      "Custom health and fitness plans designed to meet individual needs, including mental and physical health components.",
  },
  {
    title: "Health Monitoring Tools",
    description:
      "Providing users with digital tools to track their vitals, medical history, and progress with personalized health plans.",
  },
  {
    title: "AI-Driven Health Assistance",
    description:
      "Using advanced AI technology to provide instant health advice, symptom checking, and personalized care recommendations.",
  },
  {
    title: "Corporate Health Solutions",
    description:
      "Providing businesses with comprehensive wellness programs, health benefits, and employee care solutions.",
  },
  {
    title: "Emergency Response Integration",
    description:
      "Connecting users to emergency services or facilitating quick medical responses during urgent health situations.",
  },
  {
    title: "Health Insurance Solutions",
    description:
      "Offering tailored health and life insurance plans, including digital management tools for easy access and claims processing.",
  },
  {
    title: "Prescription Management",
    description:
      "Offering digital prescription services where users can consult, receive prescriptions, and manage their medications.",
  },
  {
    title: "Family Health Management",
    description:
      "Manage and track medical info for you and your family, including vitals, appointments, and medical history in one place.",
  },
];

const Expertise = () => {
  return (
    <div>
      <div className="my-20">
        <div className="flex flex-col w-[92%] mx-auto items-center justify-center">
          <span className="text-sm text-[#5f77ff] font-[500]">
            OUR EXPERTISE
          </span>
          <span className="py-2 text-2xl md:text-4xl font-[500] text-center">
            Healthcare Solutions for You
          </span>
          <p className="text-sm sm:text-[1rem] xl:text-lg text-gray-500 text-center max-w-[800px]">
            Our expertise delivers accessible, tech-driven healthcare solutions,
            from online consultations to wellness programs and insurance tech,
            designed to simplify and enhance your healthcare journey with
            quality and convenience.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-[95%] mx-auto">
          {expertise.map((item) => (
            <div
              key={item.title}
              className="my-5 flex flex-col text-center items-center sm:text-start sm:items-start max-w-[330px] mx-auto"
            >
              <span className="text-xl font-[500] text-center sm:text-start line-clamp-1">
                {item.title}
              </span>
              <span className="text-sm md:text-[1rem] text-center text-gray-500 sm:text-start">
                {item.description}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Expertise;
