export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r p-6 hidden md:block">
      <h1 className="text-xl font-bold mb-8">Dashboard</h1>

      <nav className="space-y-4 text-gray-600">
        <p className="font-medium text-purple-600">Dashboard</p>
        <p className="hover:text-black cursor-pointer">Advanced Query</p>
        <p className="hover:text-black cursor-pointer">Events</p>
      </nav>
    </aside>
  );
}