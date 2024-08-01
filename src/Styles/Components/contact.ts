import styled from "@emotion/styled";

const styles = {
  Footer: styled.footer`
    text-align: center;
    color: rgba(255, 255, 255, 0.4);
  `,

  H2: styled.h2`
    text-align: center;
    letter-spacing: 0.05rem;
    margin: 2rem 0rem;
  `,
  P: styled.p`
    margin: 2rem 0rem;

    @media (max-width: 1065px) {
      text-align: center;
    }
  `,
};

export default styles
