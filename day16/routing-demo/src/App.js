import React, { Suspense } from 'react';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import './App.css';
import Movie from './Movie';
import { MovieDetail } from './Movies';


// const MovieList = React.lazy(() => import('./Movies'))
const MovieList = React.lazy(() => import('./Movies').then(module => ({
  default: module.MovieList
})));

function App() {
  return (
    <BrowserRouter>
      <div >
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/print">Print</Link>
            </li>
            <li>
              <Link to="/snapshot">Snapshot</Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
          </ul>
        </nav>

        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
            <Route path="print" element={<Print />} />
            <Route path="snapshot" element={<Snapshot />} />
            <Route path="movies" element={
              <Suspense fallback={<div>Loading...</div>}>
                <MovieList movies={movies} />
              </Suspense>
            } />
            <Route path="movies/:id" element={<MovieDetail />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Contact() {
  return <h2>Contact</h2>;
}

function NotFound() {
  return <h2>Not Found!</h2>
}

function Print() {
  return (
    <div>
      <button>Print</button>
    </div>
  )
}
function Snapshot() {
  return (
    <div>
      <button>Snapshot</button>
    </div>
  )
}


export const movies = [
  new Movie(
    1,
    " Titanic",
    "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
    "Drama"
  ),
  new Movie(
    2,
    " E.T. the Extra-Terrestrial",
    "A troubled child summons the courage to help a friendly alien escape Earth and return to his home world.",
    "Fantasy"
  ),
  new Movie(
    3,
    "The Wizard of Oz",
    // tslint:disable-next-line:max-line-length
    "Dorothy Gale is swept away from a farm in Kansas to a magical land of Oz in a tornado and embarks on a quest with her new friends to see the Wizard who can help her return home in Kansas and help her friends as well.",
    "Fantasy"
  ),
  new Movie(
    4,
    "Star Wars: Episode IV - A New Hope ",
    // tslint:disable-next-line:max-line-length
    "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire/`s world-destroying battle-station while also attempting to rescue Princess Leia from the evil Darth Vader.",
    "Action"
  ),
];