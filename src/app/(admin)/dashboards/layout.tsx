export default function DashboardLayout({
  children,
  settings,
  stats,
}: {
  children: React.ReactNode;
  settings: React.ReactNode;
  stats: React.ReactNode;
}) {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <div style={{ display: "flex", gap: "2rem" }}>
        <div>{settings}</div>
        <div>{stats}</div>
      </div>
      {children}
    </div>
  );
}
