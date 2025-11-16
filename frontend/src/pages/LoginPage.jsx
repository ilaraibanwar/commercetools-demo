import { login } from "../auth/authService";

export default function LoginPage() {
  return (
    <div className="flex h-screen w-screen bg-black text-white">

      <div className="w-full md:w-[420px] p-10 my-auto mx-auto">
        <h3 className="text-green-400 font-semibold mb-3 text-sm">Welcome</h3>

        <h1 className="text-4xl font-extrabold text-white mb-2">Sign in</h1>

        <p className="text-gray-400 text-sm mb-8">
          to continue to{" "}
          <span className="text-green-400 font-semibold">Commercetools Demo</span>
        </p>

        <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="text-sm font-medium text-gray-300">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full mt-1 p-3 bg-neutral-900 border border-neutral-700 text-white rounded-md"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-300">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full mt-1 p-3 bg-neutral-900 border border-neutral-700 text-white rounded-md"
            />
          </div>

          <button
            type="button"
            onClick={login}
            className="w-full bg-green-500 hover:bg-green-600 text-black font-bold py-3 rounded-md"
          >
            Login →
          </button>

          <button
            type="button"
            onClick={login}
            className="w-full bg-green-500 hover:bg-green-600 text-black font-bold py-3 rounded-md"
          >
            Login with PingOne →
          </button>
        </form>
      </div>

      <div className="hidden md:flex flex-1 justify-center items-center p-10">
        <img
          src="/assets/shopper.png"
          alt="Shopping"
          className="w-[70%] object-contain opacity-80"
        />
      </div>

    </div>
  );
}
