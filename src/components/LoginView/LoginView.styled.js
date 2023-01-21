import styled from '@emotion/styled';

export const FormContainer = styled.div`
  margin-top: 100px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Title = styled.span`
  font-weight: 600;
  color: var(--main-text-color);
  margin-bottom: 5px;
`;

export const Input = styled.input`
  height: 40px;
  margin-top: 10px;
  padding: 0 10px 0 10px;
  outline: none;
  border: 1px solid var(--second-bg-color);
  border-radius: 8px;
  outline: none;
  color: var(--main-text-color);
  font-size: 14px;
  :focus {
    border-color: var(--accent-bg-color);
  }
  ::placeholder {
    font-size: 12px;
    color: var(--main-text-color);
  }
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
