import './App.css';
import { ElevatorsContainer, PageContainer } from './components';
import { FloorsContainer } from './components/FloorsContainer';

const App = () => {
  return (
    <PageContainer>
      <ElevatorsContainer />
      <FloorsContainer />
    </PageContainer>
  );
};

export default App;
