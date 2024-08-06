import styled from "@emotion/styled";

const styles = {
  components: {
    Container: styled.div`
      display: grid;
      grid-template-columns: 30% 70%;
      width: 21cm;
      height: 29.7cm;
      background-color: red;
      margin: 0 auto;
      background-color: #fff;
      overflow-y: hidden;
      font-size: 14px;
    `,
    LeftColumn: styled.div`
      padding: 13px;
      background-color: #f4f4f4;
      border-right: 1px solid black;
    `,
    RightColumn: styled.div`
      padding: 13px;
    `,
    List: styled.ul`
      list-style-type: none;
      padding: 0px;
      margin: 0px;
    `,
    StackList() {
      return styled(this.List)`
        display: flex;
        padding-bottom: 0.3rem;
        border-bottom: 1px solid #ccc;
        margin-bottom: 3px;

        li:last-child {
          border: none;
        }
      `;
    },
    SkillsList() {
      return styled(this.List)`
        margin-bottom: 27px;
      `;
    },
    SkillItem: styled.li`
      margin-bottom: 0.7rem;
    `,
    StackItem: styled.li`
      border-right: 1px solid #ccc;
      margin-right: 6px;
      padding: 0px 6px 0px 0px;
    `,
    Title: styled.h2`
      margin: 27px 0px 5px 0px;
      text-align: center;
      font-size: 1.15rem;
      font-weight: 600;
    `,
    Heading: styled.h4`
      margin: 0 0 0.7rem 0;
      font-size: 1rem;
      letter-spacing: -0.04rem;
      font-weight: 600;
    `,
    SubTitle: styled.h3`
      margin: 0 0 3px 0;
    `,
    Description: styled.p`
      margin: 0;
      text-align: justify;
    `,
    School: styled.div`
      display: flex;
      justify-content: space-between;

      span {
        font-size: 0.7rem;
      }
    `,
    Project: styled.a`
      text-decoration: none;
      color: inherit;
      margin-bottom: 1rem;
    `,
    ProjectItem: styled.li`
      margin-bottom: 1rem;
    `,
    SkillLink: styled.a`
      text-decoration: none;
      color: inherit;
    `,
  },
  head: `
        * {
          box-sizing: border-box;
        }

        html {
          font: 112.5%/1.55 'Inter',sans-serif;
        }

        body {
          color: hsla(0, 0%, 0%, 0.8);
          margin: 0;
          font-weight: normal;
          word-wrap: break-word;
          font-kerning: normal;
          -moz-font-feature-settings: "kern", "liga", "clig", "calt";
          -ms-font-feature-settings: "kern", "liga", "clig", "calt";
          -webkit-font-feature-settings: "kern", "liga", "clig", "calt";
          font-feature-settings: "kern", "liga", "clig", "calt";
          font-variant-ligatures: none;
          font-family: 'Inter',sans-serif;
        }
        
        .hero {
          text-align: center;
          margin: 0px 0px 6px 0px;
          border-bottom: 1px solid #ccc;
          letter-spacing: 3px;
          font-size: 2rem;
          font-weight: 600;
        }

        .icon {
          width: 18px;
          height: 18px;
          margin-right: 10px;
        }

        .certificate {
          font-weight: 600
        }
    `,
};

export default styles;
