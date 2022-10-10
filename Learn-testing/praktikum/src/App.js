import './App.css';
import { Button } from 'bootstrap';
import { Stack } from 'react-bootstrap';

const App = () => {
  return (
    <Stack gap={3}>
      <Button variant="primary">Tombol</Button>
    <Button variant="succes">Tombol 2</Button>
    <Button variant="info">Tombol 3</Button>      
    </Stack>
  )
}

export default App;
