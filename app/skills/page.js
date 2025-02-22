import Container from "@/components/Container";
import SkillCard from "@/components/SkillCard";
import { getSkills } from "@/lib/sanity-utils";

export const metadata = {
  title: "Skills - Vaibhav Kesharwani",
  description: "A collection of my skills.",
};

const Page = async () => {
  const skills = await getSkills();

  return (
    <Container>
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-2xl font-bold tracking-tight text-black md:text-4xl dark:text-white">
          Skills
        </h1>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          I have hands-on experience with these skills. These skills have been
          used on the projects that are listed along with them.
        </p>
        <div className="grid w-full grid-cols-1 gap-4 mt-4 sm:grid-cols-2 items-start">
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              title={skill.title}
              projects={skill.projects}
            />
          ))}
        </div>
      </div>
      <span className="h-16" />
    </Container>
  );
};

export default Page;
