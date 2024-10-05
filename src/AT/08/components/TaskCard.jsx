import styled from 'styled-components';

// Componente do card de tarefas
const TaskCard = () => {
  return (
    <CardContainer>
      <ImageSection>
        <img src="https://via.placeholder.com/100" alt="Foto do Funcionário" />
      </ImageSection>
      <InfoSection>
        <h2>Nome Completo</h2>
        <p>Data de Nascimento</p>
        <p>Setor</p>
        <p>Cargo</p>
      </InfoSection>
      <InteractionSection>
        <IconButton>📞</IconButton>
        <IconButton>✉️</IconButton>
        <IconButton>📍</IconButton>
      </InteractionSection>
      <TaskTable>
        <thead>
          <tr>
            <th>Estado</th>
            <th>Tarefas</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input type="checkbox" defaultChecked /></td>
            <td>Tarefa 1</td>
          </tr>
          <tr>
            <td><input type="checkbox" /></td>
            <td>Tarefa 2</td>
          </tr>
          <tr>
            <td><input type="checkbox" /></td>
            <td>Tarefa 3</td>
          </tr>
        </tbody>
      </TaskTable>
    </CardContainer>
  );
};

export default TaskCard;

// Styled-components para estilização
const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const ImageSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  
  img {
    border-radius: 50%;
    width: 100px;
    height: 100px;
  }

  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 20px;
  }
`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  h2 {
    margin: 0;
    font-size: 1.5rem;
  }

  p {
    margin: 5px 0;
  }

  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 20px;
  }
`;

const InteractionSection = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    margin-bottom: 0;
  }
`;

const IconButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  
  &:hover {
    color: blue;
  }
`;

const TaskTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;

  th, td {
    padding: 10px;
    text-align: left;
    border: 1px solid #ddd;
  }

  input {
    cursor: pointer;
  }
`;
