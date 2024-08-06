import React from 'react';
import MovieList from '../Components/MovieList';
import SideBar from '../Components/Sidebar';

const HomePage = () => {
  return (
    <div className="home-page">
      <SideBar />
      <MovieList />
    </div>
  );
};

export default HomePage;
