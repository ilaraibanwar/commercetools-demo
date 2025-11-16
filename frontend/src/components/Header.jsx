import { logout } from "../auth/authService";

export default function Header({ user }) {
  return (
    <header className="sticky top-0 w-full bg-neutral-900 border-b border-neutral-800
      flex justify-between items-center px-10 py-4 z-20">

      <h2 className="text-2xl font-bold text-green-400">
        Hello, {user?.profile?.name || user?.profile?.email || "User"}
      </h2>

      <button
        onClick={logout}
        className="bg-green-500 hover:bg-green-600 text-black px-5 py-2
        rounded-md font-semibold">
        Logout
      </button>

    </header>
  );
}
