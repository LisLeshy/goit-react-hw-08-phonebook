import styled from '@emotion/styled';

export const ContainerAuthNav = styled.div`
  display: flex;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    flex-direction: column;
 
`;

export const Button = styled.button`
  width: 100px;
  height: 40px;
  margin-left: 30px;
  margin-top: 15px;
  margin-bottom: 15px;
  background-color: var(--accent-bg-color);
  color: var(--second-text-color);
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color var(--main-hover-animation);
  :hover,
  :focus {
    background-color: var(--second-bg-color);
  }
`;
