import styled from "@emotion/styled";

const styles = {
  components: {
    Main: styled.main`
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 200px;
      justify-content: center;
      max-width: 1444px;
      margin: 0px auto;
      padding: 0px 96px;
      gap: 35px;

      @media (max-width: 1065px) {
        display: block;
        padding: 0px;
      }
    `,

    Div: styled.div`
      display: grid;
      grid-column: 2 / span 2;
      padding: 96px 0px;

      @media (max-width: 1065px) {
        width: initial;
        padding: 96px 10px;
      }
    `,

    Nav: styled.nav`
      position: sticky;
      top: 0;
      display: flex;
      flex-direction: column;
      max-height: 100vh;
      justify-self: end;
      padding-top: calc(96px - 4rem);

      @media (max-width: 1065px) {
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        width: 100%;
        flex-direction: row;
        justify-content: space-between;
        padding: 0.8rem 2rem;
        background-color: #663399;
      }
    `,
  },
  particles: {
    background: {
      color: {
        value: "rgb(15, 23, 42)",
      },
    },
    fullScreen: {
      zIndex: -1,
    },
    fpsLimit: 120,
    particles: {
      color: {
        value: "#ffffff",
      },
      links: {
        color: "#ffffff",
        distance: 100,
        enable: true,
        opacity: 0.1,
        width: 1,
      },
      move: {
        enable: true,
        random: true,
        speed: 2,
        straight: false,
      },
      number: {
        density: {
          enable: true,
        },
        value: 80,
      },
      opacity: {
        value: 0.1,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 4 },
      },
    },
    detectRetina: true,
  },
  head: `
        * {
          box-sizing: border-box;
        } 

        html {
         scroll-behavior: smooth;
         scroll-padding-top: 45.5px;
        }

        body {
          color: rgb(226, 226, 240);
          margin: 0px;
          background-color: rgb(15, 23, 42);
          font-family: 'Inter', sans-serif;
        }

        section {
          margin-bottom: 9rem;
        }

        .icon {
          color: rgb(148, 163, 184);

          &:hover {
            color: whitesmoke;
          }
        }

        .about-section {
          margin-bottom: 12rem !important;
          scroll-margin-top: 8rem;
        }

        .about-title {
          @media (max-width: 1065px) {
            text-align: center;
          }
        }
         
        .about-content { 
          line-height: 1.625rem;
          font-size: 18px;
          text-align: justify;
        }

        .project-title {
          margin-top: 0px;

          @media (max-width: 445px) {
            text-align: center;
          }
        }

        .project-description {
          text-align: justify;
        }

        .project-stack { 
          display: flex;
          gap: 15px;
        }

        .projects-archive {
          text-decoration: none;
          color: inherit;

          &:hover {
            color: aquamarine;
            text-decoration: underline;
            text-underline-offset: 8px;
            
            .projects-archive-icon {
              transform: translateX(8px)
            }
          }
        }

        .projects-archive-icon {
          transition: transform 200ms ease;
          margin-left: 5px;
        }

        .active {
          color:  rgb(226, 226, 240);
          background-color: rgba(26, 41, 59, 0.5);
          box-shadow: inset 0 1px 0 0 rgba(148, 163, 184, 0.1);
        }

        .project-image {
          border: 2px solid;
          border-radius: 0.25rem;
          border-color: rgba(226, 232, 240, 0.1);
        }

        #contact {
          margin: 0rem 0rem 17rem 0rem
        }

        .resume-link {
          background-image: linear-gradient(180deg, #566ff8 0%, #394fdc 100%);
          border: none;
          border-radius: 5px;
          font-size: 17px;
          color: inherit;
          cursor: pointer;
          padding: 10px 16px;
          text-align: center;
          text-decoration: none;
          color: inherit;
        }

        .resume-icon {
          margin-right: 10px
        }
        
        .nav-icon {
          margin-bottom: 5px;
        }
        `,
};

export default styles;
