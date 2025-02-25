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
              <h1 className="font-bold text-2xl md:text-4xl tracking-tight mb-1 text-black dark:text-white">
                Vaibhav Kesharwani
              </h1>

              <div className="flex items-center mb-4">
                <MdLocationPin
                  size="1em"
                  className="text-gray-600 dark:text-gray-400"
                />
                <p className="ml-1 text-gray-600 dark:text-gray-400 text-sm">
                  Chennai, Tamil Nadu, India
                </p>
              </div>

              <p className="text-gray-600 dark:text-gray-400 mb-16">
                Technical Manager at Banrboard | 🎓 IIT Madras | 💻 Data
                Scientist | Full Stack Web and Mobile App Developer | Freelancer
              </p>
            </div>

            <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
              <Image
                alt="Vaibhav Kesharwani"
                height={176}
                width={176}
                src="/dp.jpg"
                sizes="30vw"
                priority
                className="rounded-full filter"
              />
            </div>
          </div>

          <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
            Links
          </h3>
          <div className="flex mt-4 flex-wrap gap-6">
            <a
              href="https://datstek.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition ease-in-out hover:-translate-y-1 hover:scale-110"
            >
              <img
                src="/datstek.png"
                alt="datstek"
                className="h-[3em] w-[3em]"
              />
            </a>
            <a href="mailto:vaibhav.vk2128@gmail.com">
              <SiGmail
                className="transition ease-in-out hover:-translate-y-1 hover:scale-110"
                size="3em"
                color="#FD2606"
              />
            </a>
          </div>
          <div className="flex mt-4 flex-wrap gap-6">
            <a
              href="https://www.linkedin.com/in/vaibhav-kesharwani"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn
                className="transition ease-in-out hover:-translate-y-1 hover:scale-110"
                size="3em"
                color="#0A66C2"
              />
            </a>
            <a
              href="https://github.com/vaibbhavk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub
                className="transition ease-in-out hover:-translate-y-1 hover:scale-110"
                size="3em"
                color="#181717"
              />
            </a>
            <a
              href="https://wa.me/8770911462"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp
                className="transition ease-in-out hover:-translate-y-1 hover:scale-110"
                size="3em"
                color="#25D366"
              />
            </a>{" "}
            <a
              href="https://www.instagram.com/vaibbhavk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram
                className="transition ease-in-out hover:-translate-y-1 hover:scale-110"
                size="3em"
                color="#E4405F"
              />
            </a>
            <a
              href="https://www.facebook.com/vaibhav.vk28"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook
                className="transition ease-in-out hover:-translate-y-1 hover:scale-110"
                size="3em"
                color="#1877F2"
              />
            </a>
          </div>

          <div className="flex mt-4 flex-wrap gap-6">
            <a
              href="https://www.fiverr.com/vaibbhavvk?public_mode=true"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiFiverr
                className="transition ease-in-out hover:-translate-y-1 hover:scale-110"
                size="3em"
                color="#1DBF73"
              />
            </a>
            <a
              href="https://www.upwork.com/freelancers/~01e98ab6fa7c516372"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiUpwork
                className="transition ease-in-out hover:-translate-y-1 hover:scale-110"
                size="3em"
                color="#6FDA44"
              />
            </a>
          </div>

          <div className="flex items-center justify-center mt-4 mb-16 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6">
            <p className="text-sm">Resume</p>
            <Link
              href="https://drive.google.com/drive/folders/167F2LSfuEwrN3rEMzVGi2B8N2CV1Xt_Z?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MdOutlinePictureAsPdf
                size="3em"
                className="ml-1 transition ease-in-out hover:-translate-y-1 hover:scale-110"
              />
            </Link>
          </div>

          <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
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

          <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
            Experience
          </h3>
          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-1 items-start">
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
        </div>
        <span className="h-16" />
      </Container>
    </Suspense>
  );
};

export default Home;
