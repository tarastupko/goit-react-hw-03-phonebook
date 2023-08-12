import styled from 'styled-components';

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  text-align: center; /* Вирівнюємо список по центру */
  max-width: 400px; /* Задаємо максимальну ширину, як у форми */
  margin: 0 auto; /* Центруємо список горизонтально */
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: left;
`;

export const ContactInfo = styled.div`
  flex-grow: 1;
`;

export const ContactName = styled.p`
  font-weight: bold;
`;

export const ContactNumber = styled.p`
  color: #555;
`;