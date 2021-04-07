import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease } from "../../../modules/pageNumber";

function FontSize(props) {
  const fontSize = useSelector((state) => state.pageNumber.number);

  const dispatch = useDispatch();
  const onSizeUp = () => dispatch(increase());
  const onSizeDown = () => dispatch(decrease());

  return (
    <Section>
      {fontSize && (
        <Button onClick={onSizeUp} disabled={fontSize === 25}>
          +
        </Button>
      )}
      {fontSize && (
        <Button onClick={onSizeDown} disabled={fontSize === 1}>
          -
        </Button>
      )}

      <Content fontSize={fontSize}>
        {fontSize >= 25
          ? `더 이상 늘릴 수 없습니다.`
          : fontSize <= 1
          ? `더 이상 줄일 수 없습니다.`
          : "FontSize"}
      </Content>
    </Section>
  );
}

export default FontSize;

export const Section = styled.section`
  text-align: center;
  width: 80vw;
  height: 80vh;
  border: 1px solid #000;
  margin: 0 auto;
  padding: 1rem;
`;

export const Content = styled.h2`
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : "initial")};
`;

export const Button = styled.button`
  margin: 5rem;
  background-color: #000;
  color: #fff;
  height: 60px;
  font-size: 1.5rem;
  padding: 0 1.5em;
  cursor: ${({ disabled }) => (disabled ? `not-allowed` : `pointer`)};
`;
