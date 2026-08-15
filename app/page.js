import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "../components/Container";
import {
  FaLinkedinIn,
  FaGithub,
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import { SiFiverr, SiUpwork, SiGmail } from "react-icons/si";
import { MdLocationPin, MdOutlinePictureAsPdf } from "react-icons/md";
import EducationCard from "../components/EducationCard";
import ExperienceCard from "../components/ExperienceCard";
import { getEducations, getExperiences } from "@/lib/sanity-utils";

const Home = async () => {
  const educations = await getEducations();
  const experiences = await getExperiences();

  return (
    <Suspense fallback={null}>
      <Container>
        <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
          <div className="flex flex-col-reverse sm:flex-row items-start">
            <div className="flex flex-col pr-8">
              <h3 className="font-bold text-xl md:text-3xl tracking-tight mb-1 text-black dark:text-white">
                Vaibhav Kesharwani
              </h3>

              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Machine Learning Engineer & Full-Stack Developer
              </p>

              <div className="flex items-center mb-4">
                <MdLocationPin
                  size="1em"
                  className="text-gray-600 dark:text-gray-400"
                />
                <p className="ml-1 text-gray-600 dark:text-gray-400 text-sm">
                  Mumbai, Maharashtra, India
                </p>
              </div>

              <p className="text-gray-600 dark:text-gray-400 mb-4">
                I am a Software Engineer and Data Science practitioner trained
                at IIT Madras. Currently, I work as an Assistant Manager (IT) at
                Union Bank of India, where I focus on building machine learning
                solutions and scalable analytics pipelines.
              </p>

              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Over the past few years, I have worked across enterprise data
                engineering on the Cloudera Data Platform, founded a software
                agency, and delivered production-grade full-stack apps for 20+
                clients worldwide.
              </p>

              <p className="text-gray-600 dark:text-gray-400 mb-16">
                Outside of engineering, I maintain a strong discipline around
                athletic wellness as a regular badminton player, prioritize
                clean living, and am an avid reader.
              </p>
            </div>
          </div>

          <h3 className="font-bold text-xl md:text-3xl tracking-tight mb-6 text-black dark:text-white">
            Experience
          </h3>
          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-1 items-start  mb-16">
            {experiences.map((e, index) => (
              <ExperienceCard
                key={index}
                name={e.name}
                company={e.company}
                type={e.type}
                location={e.location}
                done={e.done}
                date={e.date}
                tech={e.tech}
              />
            ))}
          </div>
          <h3 className="font-bold text-xl md:text-3xl tracking-tight mb-6 text-black dark:text-white">
            Education
          </h3>
          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 items-start mb-16">
            {educations.map((e, index) => (
              <EducationCard
                key={index}
                name={e.name}
                college={e.college}
                location={e.location}
                date={e.date}
              />
            ))}
          </div>

          <h3 className="font-bold text-xl md:text-3xl mb-6 tracking-tight text-black dark:text-white">
            Connect
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-2">
            Feel free to reach out for collaborations, consulting, or technical
            advisory:
          </p>

          <div className="flex mt-4 flex-wrap gap-6">
            <a
              href="mailto:vaibhav.vk2128@gmail.com"
              className="transition ease-in-out hover:-translate-y-1 hover:scale-110 underline underline-offset-4"
            >
              Gmail
            </a>
            <a
              href="https://www.linkedin.com/in/vaibhav-kesharwani"
              target="_blank"
              rel="noopener noreferrer"
              className="transition ease-in-out hover:-translate-y-1 hover:scale-110 underline underline-offset-4"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/vaibbhavk"
              target="_blank"
              rel="noopener noreferrer"
              className="transition ease-in-out hover:-translate-y-1 hover:scale-110 underline underline-offset-4"
            >
              GitHub
            </a>
            <a
              href="https://leetcode.com/u/vaibbhavk/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition ease-in-out hover:-translate-y-1 hover:scale-110 underline underline-offset-4"
            >
              LeetCode
            </a>
            <a
              href="https://www.kaggle.com/vaibhavk2128"
              target="_blank"
              rel="noopener noreferrer"
              className="transition ease-in-out hover:-translate-y-1 hover:scale-110 underline underline-offset-4 hidden md:inline-block"
            >
              Kaggle
            </a>

            <a
              href="https://www.fiverr.com/vaibbhavvk?public_mode=true"
              target="_blank"
              rel="noopener noreferrer"
              className="transition ease-in-out hover:-translate-y-1 hover:scale-110 underline underline-offset-4 hidden md:inline-block"
            >
              Fiverr
            </a>
            <a
              href="https://www.upwork.com/freelancers/~01e98ab6fa7c516372"
              target="_blank"
              rel="noopener noreferrer"
              className="transition ease-in-out hover:-translate-y-1 hover:scale-110 underline underline-offset-4 hidden md:inline-block"
            >
              Upwork
            </a>
          </div>

          <div className="flex mt-4 mb-16 flex-wrap gap-6 md:hidden">
            <a
              href="https://www.kaggle.com/vaibhavk2128"
              target="_blank"
              rel="noopener noreferrer"
              className="transition ease-in-out hover:-translate-y-1 hover:scale-110 underline underline-offset-4"
            >
              Kaggle
            </a>
            <a
              href="https://www.fiverr.com/vaibbhavvk?public_mode=true"
              target="_blank"
              rel="noopener noreferrer"
              className="transition ease-in-out hover:-translate-y-1 hover:scale-110 underline underline-offset-4"
            >
              Fiverr
            </a>
            <a
              href="https://www.upwork.com/freelancers/~01e98ab6fa7c516372"
              target="_blank"
              rel="noopener noreferrer"
              className="transition ease-in-out hover:-translate-y-1 hover:scale-110 underline underline-offset-4"
            >
              Upwork
            </a>
          </div>
        </div>
      </Container>
    </Suspense>
  );
};

export default Home;
