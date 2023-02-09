import React from 'react';
import { SiYoutube } from 'react-icons/si';
import { useGlobalContext } from '../context';
import { Link, useNavigate } from 'react-router-dom';
import fetchVideos from '../helpers/fetchVideos';
import './css/nav.css';

const Nav = () => {
  const { searchTerm, searchTermDummy, setAppState } = useGlobalContext();
  const navigate = useNavigate();

  const submitHandler = (
    e:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    navigate('/');
    fetchVideos(searchTerm).then((res) =>
      setAppState((prev) => {
        return {
          ...prev,
          videos: res.items,
          searchTerm: prev.searchTermDummy,
          activeCategory: 'Home',
          searchTermDummy: '',
        };
      })
    );
  };

  return (
    <nav>
      <Link to="/">
        <div
          className="logo-div"
          onClick={() => {
            setAppState((prev) => {
              return { ...prev, searchTerm: '', activeCategory: 'Home' };
            });
          }}
        >
          <SiYoutube className="logo-icon" />
          <p>YouTube</p>
        </div>
      </Link>
      <form className="input-form" onSubmit={submitHandler}>
        <input
          type="search"
          value={searchTermDummy}
          placeholder="Search..."
          onChange={(e) =>
            setAppState((prev) => {
              return { ...prev, searchTermDummy: e.target.value };
            })
          }
        />
        <button
          className="search-button"
          type="submit"
          onClick={submitHandler}
        ></button>
      </form>
    </nav>
  );
};

export default Nav;
