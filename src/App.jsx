import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './ui/Home';
import ResultPage from './ui/ResultPage';
import ChartPage from './ui/chartPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/chart" element={<ChartPage />} />
      </Routes>
    </Router>
  );
}

export default App;

