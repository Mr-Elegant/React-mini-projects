import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Users from "./components/Users";

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [users, setUsers] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (formData.password.length < 8) {
      setError("Password must be 8 characters long");
    }
    if (formData.password !== FormData.confirmPassword) {
      setError("Password must be same as Confirm Password");
    }
    if (!/[!@#$%^&*()<>?.""]/.test(formData.password)) {
      setError("Password must contain special character");
    }
    if (!/[A-Z]/.test(formData.password)) {
      setError("Password must contain any capital letter");
      return;
    }

    setUsers((prevUsers) => [
      ...prevUsers,
      {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      },
    ]);

    setError("");
    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

    toast.success("Login Successfull! ✅", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <>
      <div className="min-h-screen  flex items-center justify-center p-4">
        <div className="bg-white w-full max-w-sm rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-center mb-4">
            Create an account
          </h2>
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
            autoComplete="on"
            className="flex flex-col gap-4"
          >
            <input
              required
              value={formData.name}
              name="name"
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
              type="text"
              placeholder="Name"
            />

            <input
              required
              value={formData.email}
              name="email"
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
              type="email"
              placeholder="Email"
            />

            <input
              required
              value={formData.password}
              name="password"
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
              type="password"
              placeholder="Password"
            />

            <input
              required
              value={formData.confirmPassword}
              name="confirmPassword"
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
              type="password"
              placeholder="Confirm Password"
            />

            {error && (
              <p className="text-red-500 font-medium text-sm text-center">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="bg-fuchsia-600 text-white py-2 rounded-lg font-semibold text-base hover:bg-fuchsia-700 transition"
            >
              Submit
            </button>
          </form>

          <p className="text-xs text-gray-600 mt-4 text-center">
            By registering, you agree to our{" "}
            <span className="text-indigo-600">Terms & Conditions</span> and{" "}
            <span className="text-indigo-600">Privacy Policy</span>.
          </p>
        </div>
        <ToastContainer></ToastContainer>
      </div>
      {users.map((elem, idx) => (
        <Users key={idx} elem={elem} />
      ))}
    </>
  );
};

export default App;
