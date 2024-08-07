import styled from "@emotion/styled";

const styles = {
  List: styled.ul`
    padding: 0px;
    margin: 4rem 0rem 0rem 0rem;
    list-style: none;
    color: rgb(93, 111, 139);

    @media (max-width: 1065px) {
      color: rgb(215 223 239);
      margin: 0;
    }
  `,
  Item: styled.li`
    padding: 1rem 0.5rem;
    border-radius: 10px;
    margin-bottom: 1.2rem;
    text-align: center;
    transition: all 250ms;

    &:hover {
      a {
        color: rgb(215 223 239);
      }

      svg {
        color: rgb(215 223 239);
      }
    }

    @media (max-width: 1065px) {
      margin: 0 auto 10px auto;
    }
  `,
  Anchor: styled.a<{ isDesktop: boolean }>`
    display: grid;
    justify-items: center;
    color: inherit;
    text-decoration: none;
    letter-spacing: 0.05rem;
    font-size: ${(props) => (props.isDesktop ? "1rem" : "1.3rem")};
  `,
};

export default styles