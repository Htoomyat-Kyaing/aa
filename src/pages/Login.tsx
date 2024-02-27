import { useState } from "react";
import FormInput from "../components/FormInput";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <div className="flex">
      <div className="w-1/2 p-4 flex flex-col justify-between gap-4">
        <img className="w-40 h-fit object-contain" src="/logo.png" alt="Logo" />

        <div className="px-8 flex flex-col gap-6">
          <div>
            <h1 className="text-4xl font-bold leading-normal">
              Login to Holly Hotel
            </h1>
            <p className="font-bold text-sm">
              New to Holly Hotel?{" "}
              <Link
                to={"/register"}
                className="text-blue-500 hover:cursor-pointer"
              >
                Register Now
              </Link>
            </p>
          </div>
          <form
            className=" flex flex-col gap-6 "
            onSubmit={(e: React.FormEvent) => {
              e.preventDefault();
              console.log(formData);
            }}
          >
            <FormInput
              name="email"
              type="email"
              label="Enter your email"
              autoComplete="username"
              onChange={onChange}
            />

            <FormInput
              name="password"
              type="password"
              label="Enter your password"
              autoComplete="current-password"
              onChange={onChange}
            />

            <div className="w-full flex justify-between">
              <div className="flex gap-2 items-center  justify-center">
                <input
                  type="checkbox"
                  checked={formData.rememberMe}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setFormData({ ...formData, rememberMe: e.target.checked });
                  }}
                />
                <label>Remember me</label>
              </div>
              <a className="text-blue-500 hover:cursor-pointer font-semibold">
                Forget Password?
              </a>
            </div>

            <button
              type="submit"
              className="bg-blue-600 flex w-full justify-center items-center py-2 text-white rounded-lg"
            >
              <p className="text-sm">LOGIN TO YOUR ACCOUNT</p>
            </button>
          </form>

          <div className="flex w-full items-center gap-4">
            <div className="border-t border-gray-300 flex-1"></div>
            <p className="text-gray-600 text-sm">OR</p>
            <div className="border-t border-gray-300 flex-1"></div>
          </div>

          <div className="flex w-full items-center justify-center">
            <img
              className="w-12 cursor-pointer"
              src="/google_icon.png"
              alt=""
            />
          </div>
        </div>

        <div className="flex w-full justify-center gap-6 *:font-semibold">
          <a className="text-blue-600 cursor-pointer">Terms and conditions</a>
          <a className="text-blue-600 cursor-pointer">Privacy policy</a>
        </div>
      </div>
      <div className=" flex w-fit flex-grow">
        <img
          className="h-full object-cover flex-grow"
          src="/login_image.jpg"
          alt="Login Image"
        />
      </div>
    </div>
  );
};

export default Login;
