import { Search } from "lucide-react";

export default function Navbar() {
  return (
    <div className="bg-white px-6 py-4 flex justify-between items-center border-b">
      <div className="flex items-center gap-4">
        <Search size={18} />
        <input
          type="text"
          placeholder="Search..."
          className="outline-none text-sm"
        />
      </div>

      <div className="flex items-center gap-3">
        <span className="text-sm font-medium">Bessie Cooper</span>
        <div className="w-8 h-8 rounded-full bg-gray-300" />
      </div>
    </div>
  );
}