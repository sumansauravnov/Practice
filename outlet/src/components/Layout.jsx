import { Outlet, Link } from 'react-router-dom';

function Layout() {
  return (
    <div>
      <h1>My Website</h1>
      <nav>
        <Link to="/">Home</Link> |{' '}
        <Link to="/about">About</Link>
      </nav>
      <hr />
      {/* Nested route component will render here */}
      <Outlet />
    </div>
  );
}

export default Layout;
