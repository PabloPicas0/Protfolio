import styled from "@emotion/styled";

const styles = {
  Project: styled.li`
    display: flex;
    gap: 1.5rem;
    margin-bottom: 3rem;
    padding: 1rem;
    border-radius: 5px;

    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 0.15s;

    &:hover {
      background-color: rgba(26, 41, 59, 0.5);
      box-shadow: inset 0 1px 0 0 rgba(148, 163, 184, 0.1);

      .project-image {
        background-color: rgba(226, 232, 240, 0.3);
      }
    }

    @media (max-width: 445px) {
      flex-direction: column;
      align-items: center;
    }
  `,
  H2: styled.h2`
    text-align: center;
    margin-bottom: 2rem;
  `,
  P: styled.p`
    text-align: center;
    margin-bottom: 3.5rem;
  `,
  Projects: styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
  `,
};

export default styles;

export const AnchorsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  margin-top: 1.4rem;
`;

export const Anchor = styled.a`
  border: 1px solid;
  padding: 0.4rem;
  text-decoration: none;
  border-radius: 5px;
  color: rgba(226, 232, 240, 0.7);

  &:hover {
    color: aquamarine;
  }
`;
