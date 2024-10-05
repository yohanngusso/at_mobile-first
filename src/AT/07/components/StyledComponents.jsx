import styled from 'styled-components';

export const CardContainer = styled.div`
  border: 1px solid #ccc;
  padding: 16px;
  border-radius: 8px;
  width: 300px;
  margin: 16px;
`;

export const EmployeeInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  flex-direction: column; /* Por padrão, mantenha vertical */

  @media (min-width: 768px) {
    flex-direction: row; /* Mude para horizontal em telas maiores */
  }
`;

export const ProfileImage = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin-right: 16px;
`;

export const InfoSection = styled.div`
  flex: 1;
`;

export const TaskTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TaskRow = styled.tr`
  border-bottom: 1px solid #ccc;
  &:last-child {
    border-bottom: none;
  }
`;
