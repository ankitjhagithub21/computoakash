export default function AdminLayout({ children }) {
  return (
    <div>
      <nav>Admin Sidebar</nav>
      <main>{children}</main>
    </div>
  );
}
