import logo from '../assets/logo2x.webp'
const Login = () => {
    return ( 
<>
<div class="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-yellow-300 to-orange-300">
  <div class="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
    <div class="flex justify-center mb-6">
   <img src={logo} alt="" srcset=""className='h-[90px]' />
    </div>
    <form class="space-y-4">
      <div>
        <label
          class="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 block text-gray-700 font-bold mb-2"
          for="username"
        >
          Username
        </label>
        <input
          class="flex h-10 bg-background text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-2 border-beige-400 rounded-lg px-4 py-2 w-full"
          id="username"
          placeholder="Enter your username"
          type="text"
        />
      </div>
      <div>
        <label
          class="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 block text-gray-700 font-bold mb-2"
          for="password"
        >
          Password
        </label>
        <input
          class="flex h-10 bg-background text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-2 border-beige-400 rounded-lg px-4 py-2 w-full"
          id="password"
          placeholder="Enter your password"
          type="password"
        />
      </div>
      <button
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-md"
            type="submit"
          >
            Sign In
          </button>
    </form>
  </div>
</div>
</>

    );
}

export default Login;