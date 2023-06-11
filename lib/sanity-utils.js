import { sanityClient } from "./sanity-server";
import {
  allEducationsQuery,
  allExperiencesQuery,
  allProjectsQuery,
  allSkillsQuery,
} from "./queries";

export async function getEducations() {
  return sanityClient.fetch(allEducationsQuery);
}

export async function getExperiences() {
  return sanityClient.fetch(allExperiencesQuery);
}

export async function getProjects() {
  return sanityClient.fetch(allProjectsQuery);
}

export async function getSkills() {
  return sanityClient.fetch(allSkillsQuery);
}
