import styled from "@emotion/styled";

const styles = {
  HeroContainer: styled.header`
    max-height: 100vh;
    padding: 6rem 0px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    position: sticky;
    top: 0;
    justify-self: center;
  `,
  P: styled.p`
    text-transform: uppercase;
    margin: 0;
  `,
  Donwload: styled.button`
    background-image: linear-gradient(180deg, #566ff8 0%, #394fdc 100%);
    border: none;
    border-radius: 5px;
    font-size: 17px;
    color: inherit;
    cursor: pointer;
    padding: 10px 16px;
  `,
};

export default styles;
