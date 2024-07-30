import styled from "@emotion/styled";

const styles = {
  components: {
    Container: styled.div<{ windowWidth: number }>`
      max-width: 1280px;
      margin: 0 auto;
      padding: ${(props) => (props.windowWidth > 625 ? "0px 5rem" : "0px 1rem")};
    `,
    ProjectsHeader: styled.header`
      margin-top: 8rem;
    `,
    H1: styled.h1`
      margin-top: 10px;
      font-size: 2.5em;
    `,
    TableHead: styled.thead`
      position: sticky;
      top: 0;
      backdrop-filter: blur(5px);
      background-color: rgba(15, 23, 42, 0.75);
    `,
    TableRow: styled.tr<{ windowWidth: number }>`
      text-align: ${(props) => (props.windowWidth < 1024 ? "start" : "center")};
      color: "rgba(226, 232, 240, 0.7)";
    `,
    ColumnTitle: styled.td`
      color: rgb(226, 232, 240);
    `,
    techs: {
      ColumnTech: styled.td<{ windowWidth: number }>`
        display: ${(props) => (props.windowWidth < 1024 ? "none" : "")};
      `,
      TechsList: styled.ul`
        list-style-type: none;
        display: flex;
        gap: 10px;
        justify-content: center;
        margin: 0;
        padding: 0;
      `,
    },
    ColumnProjectLive: styled.td<{ windowWidth: number }>`
      display: ${(props) => (props.windowWidth <= 625 ? "none" : "")};
    `,
  },
  head: `
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
        `,
};

export default styles;
