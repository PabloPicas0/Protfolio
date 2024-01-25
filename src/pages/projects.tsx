import { type PageProps, type HeadFC, graphql, Link } from "gatsby";
import React from "react";
import Seo from "../Components/Seo";
import { IndexPageData } from ".";
import getSrc from "../utils/getSrc";
import getKey from "../utils/key";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Projects: React.FC<PageProps<IndexPageData>> = (props) => {
  const { data } = props;

  return (
    <>
      <Link to="/" className="projects-archive">
        <FontAwesomeIcon
          icon={faArrowRight}
          fontSize={14}
          style={{ marginRight: "5px" }}
          className="projects-archive-icon"
        />
        Go Back
      </Link>

      <h1 style={{ marginTop: "10px" }}>All Projects</h1>

      <table cellSpacing={20} align="center">
        <thead>
          <tr>
            <th>Date</th>
            <th>Project</th>
            <th>Build with</th>
            <th>Live</th>
          </tr>
        </thead>

        <tbody>
          {data.allMdx.nodes.map((node) => {
            const { title, techs, homepageUrl, date } = node.frontmatter;
            const { id } = node;

            return (
              <tr key={id}>
                <td>{date}</td>

                <td align="center">{title}</td>

                <td>
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
                          />
                        </li>
                      );
                    })}
                  </ul>
                </td>

                <td>
                  <a target="_blank" href={homepageUrl}>
                    Live
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
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
          banner
        }
        id
      }
    }
  }
`;

export default Projects;

// Fix: Seo component breaks page fast load
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
        }

        table {
          border-collapse: collapse;
        }

        tr {
          border-bottom: 1px solid white;
        }

        th,
        td {
          padding: 10px;
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
          transform: rotate(-180deg) !important
        }
        `}
      </style>
    </Seo>
  );
};
