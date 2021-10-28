import Field from "./components/Field";
import { Form } from './components/Form/Form';
import Button from "./components/button/button";
import './app.css'

function App() {
  return (
    <div className="loginBgr">
    <div className='loginPosition'>
      <h3>Please Log in</h3>
      <Form>
        Username:
        <Field />
        Password:
        <Field />
      </Form>
      <Button text='Login'/>
    </div>
    </div>
  );
}

export default App;
