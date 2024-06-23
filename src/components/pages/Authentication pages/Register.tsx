import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Background from "../../../assets/Background.png";

interface RegisterSchema {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Register = () => {
  const { register, formState, handleSubmit, watch } = useForm<RegisterSchema>({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  const { errors } = formState;

  const onSubmit = (data: RegisterSchema) => {
    console.log(data);
  };

  const password = watch("password");

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="flex rounded-lg shadow-lg overflow-hidden">
        <div className="bg-white flex flex-col justify-between w-80 p-8">
          <div>
            <h1 className="text-center text-2xl font-bold mb-6">Register</h1>
            <TextField
              id="fullName"
              label="Full Name"
              variant="standard"
              type="text"
              {...register("fullName", { required: "Full name is required" })}
              error={!!errors.fullName}
              helperText={errors.fullName?.message}
              className="mb-4 w-full"
            />
            <TextField
              id="email"
              label="Email"
              variant="standard"
              type="email"
              {...register("email", { required: "Email is required" })}
              error={!!errors.email}
              helperText={errors.email?.message}
              className="mb-6 w-full"
            />
            <TextField
              id="password"
              label="Password"
              variant="standard"
              type="password"
              {...register("password", { required: "Password is required" })}
              error={!!errors.password}
              helperText={errors.password?.message}
              className="mb-6 w-full"
            />
            <TextField
              id="confirmPassword"
              label="Confirm Password"
              variant="standard"
              type="password"
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === password || "The passwords do not match",
              })}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword?.message}
              className="mb-6 w-full"
            />
          </div>
          <div className="flex flex-col gap-4">
            <Button
              sx={{
                background: "black",
              }}
              variant="contained"
              onClick={handleSubmit(onSubmit)}
              fullWidth
            >
              Register
            </Button>
            <div className="text-center">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-500 hover:underline">
                Login
              </Link>
            </div>
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

export default Register;
