import { Header } from './components/Header';
import { TaskList } from './components/TaskList';
import { Footer } from './components/Footer';
import './App.css';

export default function App() {
  const info = "Random";

  return(
    <div className='App'>
      <Header/>
      <TaskList info={info}/>
      <Footer/>
    </div>
  );
}





