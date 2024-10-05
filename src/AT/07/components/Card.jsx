import { 
  CardContainer, 
  EmployeeInfo, 
  TaskTable, 
  ProfileImage, 
  InfoSection, 
  TaskRow 
} from './StyledComponents';

const Card = () => {
  return (
    <CardContainer>
      {/* Seção de informações do funcionário */}
      <EmployeeInfo>
        <ProfileImage src="https://via.placeholder.com/100" alt="Profile" />
        <InfoSection>
          <h2>Nome do Funcionário</h2>
          <h4>Data de Nascimento</h4>
          <h4>Setor</h4>
          <p>Email: funcionario@empresa.com</p>
          <p>Cargo: Desenvolvedor</p>
        </InfoSection>
        <div>
          {/* Ícones de interação, substitua com os ícones desejados */}
          <span role="img" aria-label="Editar">✏️</span>
          <span role="img" aria-label="Deletar">🗑️</span>
        </div>
      </EmployeeInfo>

      {/* Seção de tarefas */}
      <TaskTable>
        <thead>
          <tr>
            <th>Concluída</th>
            <th>Nome da Tarefa</th>
          </tr>
        </thead>
        <tbody>
          <TaskRow>
            <td><input type="checkbox" /></td>
            <td>Implementar nova funcionalidade</td>
          </TaskRow>
          <TaskRow>
            <td><input type="checkbox" /></td>
            <td>Corrigir bugs</td>
          </TaskRow>
          <TaskRow>
            <td><input type="checkbox" /></td>
            <td>Revisar código</td>
          </TaskRow>
        </tbody>
      </TaskTable>
    </CardContainer>
  );
};

export default Card;
