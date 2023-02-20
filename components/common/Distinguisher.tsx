import styled from "styled-components";

const Distinguisher = (props: { name: string }) => {
  return (
    <div>
      <H1>{props.name}</H1>
    </div>
  );
};
export default Distinguisher;

const H1 = styled.h1`
  margin-left: 10px;
  width: 4rem;
  height: 25px;
  line-height: 25px;

  background: #b6dcbe;
  border-radius: 10px;
  font-size: small;
`;
