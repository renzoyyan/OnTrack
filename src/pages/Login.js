import React, { useState } from "react";
import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import FormikController from "../components/global/FormikController";
import { loginSchema } from "../validations/login";
import { useUserAuth } from "../context/AuthContext";
import Navbar from "../components/ui/Navbar";

const LoginPage = () => {
  const [error, setError] = useState("");
  const { loginUser } = useUserAuth();
  const navigate = useNavigate();
  return (
    <>
      <Navbar login={true} />

      <div className="flex items-center justify-center h-[80vh]">
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={loginSchema}
          onSubmit={async (values) => {
            const { email, password } = values;
            try {
              await loginUser(email, password);
              navigate("/admin/dashboard");
            } catch (error) {
              console.error(error.message);
              setError("Email or password is incorrect");
            }
          }}
        >
          {({ errors, touched, isSubmitting, isValid, dirty }) => (
            <Form>
              <h2 className="mb-8 text-2xl font-bold text-center text-gray-800 font-roboto">
                Login your account
              </h2>
              {error && <p className="text-sm text-red-500">{error}</p>}
              <div className="space-y-3">
                <FormikController
                  control="input"
                  type="email"
                  name="email"
                  label="Email address"
                  autoComplete="on"
                  error={Boolean(errors.email && touched.email)}
                />
                <FormikController
                  control="input"
                  type="password"
                  name="password"
                  label="Password"
                  error={Boolean(errors.password && touched.password)}
                />
              </div>
              <div className="mt-5">
                <button
                  disabled={!(isValid && dirty) || isSubmitting}
                  type="submit"
                  className={`w-full py-2 text-sm text-white transition duration-150 bg-indigo-600 rounded-md outline-none ring-2 ring-indigo-600 focus:ring-offset-2  ${
                    !(isValid && dirty) && "bg-indigo-600/80 ring-indigo-600/80"
                  } ${isSubmitting && "bg-indigo-600/80 ring-indigo-600/80"}`}
                >
                  Login
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default LoginPage;
