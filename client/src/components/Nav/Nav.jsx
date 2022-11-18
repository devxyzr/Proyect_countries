import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <header className="">
      <nav>
        <div>
          <div>
            <NavLink to="/" className>
              {' '}
              inicio{' '}
            </NavLink>
            <NavLink to="/countries" className>
              {' '}
              Home{' '}
            </NavLink>
            <NavLink to="/activities" className>
              {' '}
              Activities{'    '}
            </NavLink>
            <NavLink to="/activities/create" className>
              {' '}
              CreateActivitie{' '}
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
