import { useState } from "react";
import { styled } from "styled-components";

const ModelBackground = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  overflow: auto;
  background-color: #00000067;
  width: 100%;
  height: 100%;
`;
const ModelContent = styled.div`
  margin: 12% auto;
  padding: 24px;
  background-color: wheat;
  width: 50%;
  width: 50%;
  height: 50% `;

export const Model = ({ children }) => {
  const [show, setShow] = useState(false);
  
// image popper with background
  return (
    <>
      <button onClick={() => setShow(true)}>show model</button>
      {show && (
        <ModelBackground onClick={() => setShow(false)}>
          <ModelContent onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setShow(false)}>Hide model</button>
            {children}
          </ModelContent>
        </ModelBackground>
      )}
    </>
  );
};
