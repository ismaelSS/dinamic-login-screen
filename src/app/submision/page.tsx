import LoginForm from "@/components/forms/login";

export default function LoginPage() {
  return (
    <div className="bg-red-500 min-h-screen flex items-center justify-center">
      <div className="bg-white w-11/12 md:w-7/12 lg:w-5/12 rounded-lg shadow-lg p-6">
        <div className="flex justify-between mb-4">
          <button className="py-2 px-4 rounded-full bg-red-500 text-white">Login</button>
          <button className="py-2 px-4 rounded-full bg-gray-300 text-gray-700">Register</button>
        </div>
        <form id="login-form" className="hidden">
          <h3 className="text-2xl mb-6">Login</h3>
          <div className="mb-4">
            <label className="block text-gray-600">Email or Username</label>
            <input type="text" name="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-red-500" placeholder="Enter your email or username">
            </input>
          </div>
          <div className="mb-6">
            <label className="block text-gray-600">Password</label>
            <input type="password" name="password" id="password" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-red-500" placeholder="Enter your password"></input>
          </div>
          <button type="submit" className="w-full py-2 px-4 bg-red-500 text-white rounded-md">Login</button>
        </form>
        <form id="register-form">
          <h3 className="text-2xl mb-6">Register</h3>
          <div className="mb-4">
            <label className="block text-gray-600">Full Name</label>
            <input type="text" name="fullname" id="fullname" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-red-500" placeholder="Enter your full name">
            </input>
          </div>
          <div className="mb-4">
            <label className="block text-gray-600">Email</label>
            <input type="email" name="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-red-500" placeholder="Enter your email">
            </input>
          </div>
          <div className="mb-4">
            <label className="block text-gray-600">Username</label>
            <input type="text" name="username" id="username" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-red-500" placeholder="Choose a username">
            </input>
          </div>
          <div className="mb-6">
            <label className="block text-gray-600">Password</label>
            <input type="password" name="password" id="password" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-red-500" placeholder="Choose a password">
            </input>
          </div>
          <button type="submit" className="w-full py-2 px-4 bg-red-500 text-white rounded-md">Register</button>
        </form>
      </div>

      <script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="></script>
      <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"></script>
    </div>
  )
}
