import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Schema } from "../../types/types";
import Background from "../../../assets/Background.png";

const Login = () => {
  const { register, formState, handleSubmit } = useForm<Schema>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { errors } = formState;
  const onSubmit = (data: Schema) => {
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="flex rounded-lg shadow-lg overflow-hidden">
        <div className="bg-white flex flex-col justify-between w-80 p-8">
          <div>
            <h1 className="text-center text-3xl font-bold mb-6">Login</h1>
            <TextField
              id="standard-basic"
              label="Email"
              variant="standard"
              type="email"
              {...register("email", { required: "Email is required" })}
              error={!!errors.email}
              helperText={errors.email?.message}
              className="my-6  w-full"
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
