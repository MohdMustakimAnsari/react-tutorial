// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'

function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About TextUtils" />
      <div className="container">
        <TextForm heading="Enter the text to analyze" />
      </div>
    </>
  );
}

export default App;
