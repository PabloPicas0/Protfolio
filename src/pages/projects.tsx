import { type PageProps, type HeadFC, graphql, Link } from "gatsby";
import React from "react";
import Seo from "../Components/Seo";

import { IndexPageData } from "../Controllers/IndexPageController";

import "../string.extensions";

import getSrc from "../utils/getSrc";
import getKey from "../utils/key";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import useWindowWidth from "../Hooks/useWindowDimensions";

import styles from "../Styles/Pages/Projects";

const Container = styles.components.Container;
const ProjectsHeader = styles.components.ProjectsHeader;
const H1 = styles.components.H1;
const TableHead = styles.components.TableHead;
const TableRow = styles.components.TableRow;
const ColumnTitle = styles.components.ColumnTitle;
const ColumnTech = styles.components.techs.ColumnTech;
const TechsList = styles.components.techs.TechsList;
const ColumnLive = styles.components.ColumnProjectLive;

const Projects: React.FC<PageProps<IndexPageData>> = (props) => {
  const { data } = props;

  const windowWidth = useWindowWidth();

  return (
    <Container windowWidth={windowWidth}>
      <ProjectsHeader>
        <Link to="/" className="projects-archive">
          <FontAwesomeIcon
            icon={faArrowRight}
            fontSize={14}
            style={{ marginRight: "8px" }}
            className="projects-archive-icon"
          />
          Go Back
        </Link>

        <H1 style={{ marginTop: "10px", fontSize: "2.5em" }}>All Projects</H1>
      </ProjectsHeader>

      <table cellSpacing={20} width={"100%"}>
        <TableHead>
          <tr>
            <th align={windowWidth < 1024 ? "left" : "center"}>Date</th>
            <th align={windowWidth < 1024 ? "left" : "center"}>Project</th>
            <th style={{ display: windowWidth < 1024 ? "none" : "" }}>Build with</th>
            <th
              style={{ display: windowWidth <= 625 ? "none" : "" }}
              align={windowWidth < 1024 ? "left" : "center"}>
              Live
            </th>
          </tr>
        </TableHead>

        <tbody>
          {data.allMdx.nodes.map((node) => {
            const { title, techs, homepageUrl, date } = node.frontmatter;
            const { id } = node;

            return (
              <TableRow key={id} windowWidth={windowWidth}>
                <td>{windowWidth > 625 ? date : date.split("-")[2]}</td>

                <ColumnTitle>
                  {windowWidth > 625 ? (
                    title.toPascalCase()
                  ) : (
                    <a href={homepageUrl} target="_blank">
                      {title.toPascalCase()}
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        style={{ transform: "rotate(-40deg)", fontSize: "0.8rem", margin: "0 0 4px 4px" }}
                      />
                    </a>
                  )}
                </ColumnTitle>

                <ColumnTech windowWidth={windowWidth}>
                  <TechsList>
                    {techs.map((tech) => {
                      return (
                        <li key={getKey()}>
                          <img
                            src={getSrc(tech.toLowerCase())}
                            alt={`Image of ${tech}`}
                            width={26}
                            height={26}
                            title={tech}
                          />
                        </li>
                      );
                    })}
                  </TechsList>
                </ColumnTech>

                <ColumnLive windowWidth={windowWidth}>
                  <a target="_blank" href={homepageUrl}>
                    Live
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      fontSize={13}
                      style={{ marginLeft: "5px" }}
                      className="projects-link-icon"
                    />
                  </a>
                </ColumnLive>
              </TableRow>
            );
          })}
        </tbody>
      </table>
    </Container>
  );
};

export const query = graphql`
  query Projects {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          description
          homepageUrl
          repoUrl
          techs
          title
          date(formatString: "DD-MM-YYYY")
        }
        id
      }
    }
  }
`;

export default Projects;

export const Head: HeadFC = () => {
  return (
    <Seo title="Paweł Feliksiak">
      <style>{styles.head}</style>
    </Seo>
  );
};
