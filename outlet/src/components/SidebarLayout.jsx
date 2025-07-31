// layout/SidebarLayout.jsx
import { Link, Outlet } from 'react-router-dom';

function SidebarLayout() {
  return (
    <div style={{ display: 'flex' }}>
      <aside style={{ width: '200px', padding: '1rem', background: '#f0f0f0' }}>
        <h3>Sidebar</h3>
        <ul>
          <li><Link to="/admin">Admin</Link></li>
          <li><Link to="/sales">Sales</Link></li>
          <li><Link to="/calling">Calling</Link></li>
        </ul>
      </aside>
      <main style={{ flexGrow: 1, padding: '1rem' }}>
        <Outlet />
      </main>
    </div>
  );
}

export default SidebarLayout;
