import { useState } from "react";
import FormInput from "../components/FormInput";
import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "+95",
    phoneNumber: "",
    nationality: "Myanmar",
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
              Register Holly Hotel
            </h1>
            <p className="font-bold text-sm">
              Already have an account?{" "}
              <Link
                to={"/login"}
                className="text-blue-500 hover:cursor-pointer"
              >
                Login Now
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
            <div className="flex justify-center gap-2">
              <div className="w-full">
                <FormInput
                  name="firstName"
                  type="text"
                  label="First Name"
                  autoComplete="username"
                  onChange={onChange}
                />
              </div>
              <div className="w-full">
                <FormInput
                  name="lastName"
                  type="text"
                  label="Last Name"
                  autoComplete="username"
                  onChange={onChange}
                />
              </div>
            </div>

            <FormInput
              name="email"
              type="email"
              label="Email Address"
              autoComplete="username"
              onChange={onChange}
            />

            <div className="flex flex-col gap-1">
              <label className="text-gray-600 text-sm">Phone Number</label>
              <div className="w-full flex gap-2">
                <select
                  name="countryCode"
                  className="border border-gray-600 rounded py-1 w-fit"
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    });
                  }}
                >
                  <option value="+95">+95</option>
                  <option value="+61">+61</option>
                </select>
                <input
                  name="phoneNumber"
                  className="border border-gray-600 rounded p-1 indent-1 flex-grow"
                  type="text"
                  onChange={onChange}
                />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-gray-600 text-sm">Nationality</label>
              <div className="w-full flex gap-2">
                <select
                  name="nationality"
                  defaultValue={"Select your nationality"}
                  className="border border-gray-600 rounded py-1 w-full"
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value,
                    });
                  }}
                >
                  <option value="Myanmar">Myanmar</option>
                  <option value="Australia">Australia</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="bg-blue-600 flex w-full justify-center items-center py-2 text-white rounded-lg"
            >
              <p className="text-sm">CREATE NEW ACCOUNT</p>
            </button>
          </form>
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

export default Register;
