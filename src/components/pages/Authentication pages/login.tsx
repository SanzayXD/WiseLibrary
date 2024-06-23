import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Schema } from "../../types/types";
import Background from "../../../assets/Background.png";

const mockAuth = (email: string, password: string) => {
  const validEmail = "admin@admin.com";
  const validPassword = "admin";
  if (email === validEmail && password === validPassword) {
    return { success: true, user: { email } };
  } else {
    return { success: false, error: "Invalid email or password" };
  }
};

const Login = () => {
  const navigate = useNavigate();
  const [authError, setAuthError] = useState<string | null>(null);
  const [shouldRefresh, setShouldRefresh] = useState(false);

  const { register, formState, handleSubmit, reset } = useForm<Schema>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { errors } = formState;

  useEffect(() => {
    if (shouldRefresh) {
      window.location.reload();
    }
  }, [shouldRefresh]);

  const onSubmit = (data: Schema) => {
    const result = mockAuth(data.email, data.password);
    if (result.success) {
      console.log("Login successful", result.user);
      navigate("/books");
    } else {
      console.log("Login failed", result.error);
      setAuthError(result.error || "An error occurred");
      reset(); // Clear the form
      setShouldRefresh(true); // Trigger page refresh
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="flex rounded-lg shadow-lg overflow-hidden">
        <div className="bg-white flex flex-col justify-between w-80 p-8">
          <div>
            <h1 className="text-center text-3xl font-bold mb-6">Login</h1>
            {authError && (
              <p className="text-red-500 text-sm mb-4">{authError}</p>
            )}
            <TextField
              id="standard-basic"
              label="Email"
              variant="standard"
              type="email"
              {...register("email", { required: "Email is required" })}
              error={!!errors.email}
              helperText={errors.email?.message}
              className="my-6 w-full"
            />
            <TextField
              id="filled-basic"
              label="Password"
              variant="standard"
              type="password"
              {...register("password", { required: "Password is required" })}
              error={!!errors.password}
              helperText={errors.password?.message}
              className="mt-12 w-full"
            />
            <Link to="/forgotpw">
              <button className="text-blue-500 hover:underline cursor-pointer my-8">
                Forgot password?
              </button>
            </Link>
          </div>
          <div className="flex gap-4">
            <Button
              sx={{
                background: "black",
              }}
              variant="contained"
              onClick={handleSubmit(onSubmit)}
            >
              Login
            </Button>
            <Link to="/register">
              <Button variant="outlined" color="success">
                SignUp
              </Button>
            </Link>
          </div>
        </div>
        <div className="w-80 h-auto relative">
          <img
            src={Background}
            alt="Wise Library"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
