import { HeadFC, PageProps } from "gatsby";
import React from "react";

import Seo from "../Components/Seo";
import styles from "../Styles/Pages/Resume";

import { faCheck, faGlobe, faLocationDot, faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faComment, faEnvelope, faSquareCheck } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Container = styles.components.Container;
const LeftColumn = styles.components.LeftColumn;
const RightColumn = styles.components.RightColumn;
const List = styles.components.List;
const StackList = styles.components.StackList();
const SkillsList = styles.components.SkillsList();
const SkillItem = styles.components.SkillItem;
const SkillLink = styles.components.SkillLink;
const StackItem = styles.components.StackItem;
const Project = styles.components.Project;
const ProjectItem = styles.components.ProjectItem;
const Title = styles.components.Title;
const Heading = styles.components.Heading;
const SubTitle = styles.components.SubTitle;
const Description = styles.components.Description;
const School = styles.components.School

const contact = {
  links: [
    {
      src: faGlobe,
      alt: "website",
      text: "pawelfeliksiak.com",
      link: "/",
    },
    {
      src: faGithub,
      alt: "github",
      text: "github.com/PabloPicas0",
      link: "https://github.com/PabloPicas0",
    },
  ],
  rest: [
    { src: faEnvelope, alt: "email", text: "pawel.fe@gmail.com" },
    { src: faMobileAlt, alt: "mobile", text: "+48 791 106 582" },
    { src: faLocationDot, alt: "location", text: "Hrubieszów, Poland" },
  ],
};

const skills = [
  {
    title: "Key skills",
    icon: faSquareCheck,
    content: [
      "JavaScript, TypeScript",
      "React, Redux, JSX",
      "NodeJS, Express",
      "Responsive Web Design",
      "HTML5, CSS3",
    ],
  },
  {
    title: "Additional skills",
    icon: faCheck,
    content: ["Sass, CSS-in-JS", "Git, Github", "Jest, Vitest", "REST, Mongo DB", "Data Visualization"],
  },
  {
    title: "Languages",
    icon: faComment,
    content: ["Polish - Native", "English - Fluent"],
  },
];

const projects = [
  {
    title: "Anime Explorer",
    stack: ["Mongo DB", "Express", "React", "NodeJS"],
    description:
      "Anime Explorer is my biggest fullstack project. It's build as MVP (minimal viable product) and it's core functionality is to track list of user's watched titles.",
    link: "https://pablopicas0.github.io/Anime-Xplorer-App/",
  },
  {
    title: "Around The World App",
    stack: ["React", "D3", "Material-UI"],
    description:
      "The app uses D3.js and React to create interactive and responsive globe. It connects to various APIs to get data about selected coutry.",
    link: "https://pablopicas0.github.io/Around-The-World-App/",
  },
  {
    title: "Any Task",
    stack: ["Mongo DB", "Express", "React", "TypeScript"],
    description:
      "Any Task is fullstack app that let's user track current job. Extended functionality like room creation or permissions allow for working in team environment.",
    link: "https://pablopicas0.github.io/Any-Task/",
  },
];

const certificates = [
  { certificateName: "Responsive Web Design Certification", from: "freeCodeCamp" },
  { certificateName: "Algorithms and Data Structures Certification", from: "freeCodeCamp" },
  { certificateName: "Data Visualization Certification", from: "freeCodeCamp" },
  { certificateName: "Front End Libraries Certification", from: "freeCodeCamp" },
  { certificateName: "Back End Development and APIs", from: "freeCodeCamp" },
];

const Resume: React.FC<PageProps> = () => {
  return (
    <Container>
      <LeftColumn>
        <div>
          <Heading>Contact</Heading>

          <SkillsList>
            {contact.links.map((lnk) => {
              const { alt, link, src, text } = lnk;

              return (
                <SkillItem key={alt}>
                  <SkillLink href={link} target="_blank">
                    <FontAwesomeIcon icon={src} className="icon" />
                    {text}
                  </SkillLink>
                </SkillItem>
              );
            })}

            {contact.rest.map((info) => {
              const { alt, src, text } = info;

              return (
                <SkillItem key={alt}>
                  <FontAwesomeIcon icon={src} className="icon" />
                  {text}
                </SkillItem>
              );
            })}
          </SkillsList>
        </div>

        {skills.map((skill) => {
          const { title, content, icon } = skill;

          return (
            <div key={title}>
              <Heading>{title}</Heading>

              <SkillsList>
                {content.map((info) => {
                  return (
                    <SkillItem key={info}>
                      <FontAwesomeIcon icon={icon} className="icon" />
                      {info}
                    </SkillItem>
                  );
                })}
              </SkillsList>
            </div>
          );
        })}
      </LeftColumn>

      <RightColumn>
        <h1 className="hero">Paweł Feliksiak</h1>

        <section>
          <Title>Summary</Title>
          <Description>
            Front-end developer that has 2 year of experience developing web applications and building
            websites. Actively broadens his knowledge in JavaScript ecosystem and looking for new challenges
            in this area.
          </Description>
        </section>

        <section>
          <Title>Projects</Title>

          <List>
            {projects.map((project) => {
              const { description, stack, title, link } = project;

              return (
                <ProjectItem key={title}>
                  <Project href={link} target="_blank">
                    <SubTitle>{title}</SubTitle>

                    <StackList>
                      {stack.map((tech, idx) => (
                        <StackItem key={tech + "-" + idx}>{tech}</StackItem>
                      ))}
                    </StackList>

                    <Description>{description}</Description>
                  </Project>
                </ProjectItem>
              );
            })}
          </List>
        </section>

        <section>
          <Title>Certificates</Title>

          <List>
            {certificates.map((certificate) => (
              <SkillItem key={certificate.certificateName}>
                <span className="certificate">{certificate.certificateName}</span>
                {" — "}
                {certificate.from}
              </SkillItem>
            ))}
          </List>
        </section>

        <section>
          <Title>Education</Title>

          <List>
            <li>
              <Description>
                <strong>National Security, Master's degree</strong>
              </Description>

              <School>
                Academy of Zamość
                <span>Sep 2019 - Sep 2024</span>
              </School>
            </li>
          </List>
        </section>
      </RightColumn>
    </Container>
  );
};

export default Resume;

export const Head: HeadFC = () => {
  return (
    <Seo title="Resume">
      <style>{styles.head}</style>
    </Seo>
  );
};
