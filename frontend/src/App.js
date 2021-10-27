import Field from "./components/Field";
import { Form } from './components/Form/Form';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Form>
        <Field text='User Name: '/>
        <Field text='Password: '/>
        <Header/>
      </Form>
    </div>
  );
}

export default App;
