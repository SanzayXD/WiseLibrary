import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Background from "../../../assets/Background.png";

interface ForgotPasswordSchema {
  email: string;
}

const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiInputLabel-root": {
    transition: theme.transitions.create(["top", "font-size"], {
      duration: theme.transitions.duration.standard,
    }),
  },
  "& .MuiInputLabel-shrink": {
    top: -10,
  },
  "& .MuiInput-root": {
    marginTop: theme.spacing(3),
  },
}));

const ForgotPassword = () => {
  const { register, formState, handleSubmit } = useForm<ForgotPasswordSchema>({
    defaultValues: {
      email: "",
    },
  });
  const { errors } = formState;

  const onSubmit = (data: ForgotPasswordSchema) => {
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="flex rounded-lg shadow-lg overflow-hidden">
        <div className="bg-white flex flex-col justify-between w-80 p-8">
          <div>
            <h1 className="text-center text-2xl font-bold mb-6">
              Forgot Password
            </h1>
            <p className="text-center text-gray-600 mb-6">
              Enter your email address and we'll send you a link to reset your
              password.
            </p>
            <StyledTextField
              id="email"
              label="Email"
              variant="standard"
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              error={!!errors.email}
              helperText={errors.email?.message}
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
              Reset Password
            </Button>
            <div className="text-center">
              <Link to="/login" className="text-blue-500 hover:underline">
                Back to Login
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

export default ForgotPassword;
