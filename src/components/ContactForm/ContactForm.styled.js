import styled from 'styled-components';

export const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 12px;
  cursor: pointer;
  border-radius: 4px;
  font-size: 14px;
`;

export const Form = styled.form`
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 0 auto 20px; /* Центруємо форму горизонтально та додаємо знизу відступ */
  max-width: 400px; /* Обмежуємо максимальну ширину форми */
`;

export const Input = styled.input`
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  width: 95%;
  margin-bottom: 10px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;