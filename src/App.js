import {
  BrowserRouter,
  NavLink,
  Routes,
  Route
} from 'react-router-dom';
/** Pages */
import Home from './pages/Home'
import About from './pages/About'
import { Link } from 'react-router-dom/dist';

/** Main root */
function App() {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <h1>Jobarouter</h1>
          {/* <Link to="/">Home</Link> */}
          {/* <Link> does not have class=active when clicked */}
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          {/* Sames effect --> `path="/"` same as `index` */}
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App
