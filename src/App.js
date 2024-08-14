import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './components/Welcome';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Profile from './components/Profile';
import Search from './components/Search';
import SearchResult from './components/SearchResult';
import HomePage from './components/HomePage';
import Sign from './components/Sign';
import AddBook from './components/AddBook';
import BookContent from './components/BookContent';
import AddBookContentData from './components/AddBookContentData';
import AddBookProblemData from './components/AddBookProblemData';
import AddBookContentProblemData from './components/AddBookContentProblemData';
import './styles/App.css';

const App = () => {
  return (
    <Router>
      <div className="app"> 
        <main>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/search" element={<Search />} />
            <Route path="/search-result" element={<SearchResult />} />
            <Route path="/homepage" element={<HomePage />} />
            <Route path="/sign" element={<Sign />} />
            <Route path="/addbook" element={<AddBook />} />
            <Route path="/bookcontent" element={<BookContent />} />
            <Route path="/addbookcontentdata" element={<AddBookContentData />} />
            <Route path="/addbookproblemdata" element={<AddBookProblemData />} />
            <Route path="/addbookcontentproblemdata" element={<AddBookContentProblemData />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
