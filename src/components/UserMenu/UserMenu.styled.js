import styled from '@emotion/styled';

export const Title = styled.span`
  font-weight: 600;
  color: var(--main-text-color);
  margin-bottom: 5px;
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
  }
`;
