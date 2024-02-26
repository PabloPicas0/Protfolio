import { type PageProps, type HeadFC, graphql, Link } from "gatsby";
import React from "react";
import Seo from "../Components/Seo";

import { IndexPageData } from ".";

import "../string.extensions";

import getSrc from "../utils/getSrc";
import getKey from "../utils/key";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useWindowWidth from "../Hooks/useWindowDimensions";

const Projects: React.FC<PageProps<IndexPageData>> = (props) => {
  const { data } = props;

  const windowWidth = useWindowWidth();

  return (
    <div
      style={{ maxWidth: "1280px", margin: "0 auto", padding: windowWidth > 625 ? "0px 5rem" : "0px 1rem" }}>
      <header style={{ marginTop: "8rem" }}>
        <Link to="/" className="projects-archive">
          <FontAwesomeIcon
            icon={faArrowRight}
            fontSize={14}
            style={{ marginRight: "8px" }}
            className="projects-archive-icon"
          />
          Go Back
        </Link>

        <h1 style={{ marginTop: "10px", fontSize: "2.5em" }}>All Projects</h1>
      </header>

      <table cellSpacing={20} width={"100%"}>
        <thead
          style={{
            position: "sticky",
            top: 0,
            backdropFilter: "blur(5px)",
            backgroundColor: "rgba(15,23,42,.75)",
          }}>
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
        </thead>

        <tbody>
          {data.allMdx.nodes.map((node) => {
            const { title, techs, homepageUrl, date } = node.frontmatter;
            const { id } = node;

            return (
              <tr
                key={id}
                style={{
                  textAlign: windowWidth < 1024 ? "start" : "center",
                  color: "rgba(226, 232, 240, 0.7)",
                }}>
                <td>{windowWidth > 625 ? date : date.split("-")[2]}</td>

                <td style={{ color: "rgb(226, 232, 240)" }}>
                  {windowWidth > 625 ? (
                    title.toPascalCase()
                  ) : (
                    <a href={homepageUrl} target="_blank">
                      {title.toPascalCase()}
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        style={{ transform: "rotate(-40deg)", fontSize: "0.8rem", marginLeft: "5px" }}
                      />
                    </a>
                  )}
                </td>

                <td style={{ display: windowWidth < 1024 ? "none" : "" }}>
                  <ul
                    style={{
                      listStyleType: "none",
                      display: "flex",
                      gap: "10px",
                      justifyContent: "center",
                      margin: 0,
                      padding: 0,
                    }}>
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
                  </ul>
                </td>

                <td style={{ display: windowWidth <= 625 ? "none" : "" }}>
                  <a target="_blank" href={homepageUrl}>
                    Live
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      fontSize={13}
                      style={{ marginLeft: "5px" }}
                      className="projects-link-icon"
                    />
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
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
      <style>
        {`
        * {
          box-sizing: border-box;
        }

        body {
          color: rgb(226, 232, 240);
          margin: 0px;
          background-color: rgb(15, 23, 42);
          font-family: 'Inter', sans-serif;
        }

        table {
          border-collapse: collapse;
        }

        tr {
          border-bottom: 1px solid rgba(203, 213, 225, .1);
        }

        th,
        td {
          padding: 1rem 1rem 1rem 0px;
        }

         .projects-archive {
          text-decoration: none;
          color: inherit;

          &:hover {
            text-decoration: underline;
            text-underline-offset: 8px;
            
            .projects-archive-icon {
              translate: -8px
            }
          }
        }

        .projects-archive-icon {
          transition: translate 200ms ease;
          transform: rotate(-180deg) !important;
        }

        .projects-link-icon {
          transition: all 200ms ease;
        }

        a {
          color: inherit;
          text-decoration: none;
          text-underline-offset: 5px;
        }

        a:hover {
          color: aquamarine;
          text-decoration: underline;

          .projects-link-icon {
            transform: translateX(8px);
          }
        }
        `}
      </style>
    </Seo>
  );
};
