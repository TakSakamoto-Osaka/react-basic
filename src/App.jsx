import './App.css'
import { Header } from './components/Header';
import { MainContent } from './components/MainContent';
import { Footer} from './components/Footer';

function App() {
  const siteTitle = "Reactの基礎を学ぼう";
  const currentYear = new Date().getFullYear();

  const progress = 40;

  return (
    <>
      <Header siteTitle={siteTitle} />
      <MainContent progress={progress} />
      <Footer siteTitle={siteTitle} currentYear={currentYear} />
    </>
  )
}

export default App
