import React from "react";
import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import FormikController from "../components/global/FormikController";
import { signupSchema } from "../validations/login";
import Navbar from "../components/ui/Navbar";
import { useUserAuth } from "../context/AuthContext";
import { updateProfile } from "firebase/auth";
import { auth, db } from "../config/firebase";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";

const RegisterPage = () => {
  const { register } = useUserAuth();
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center">
        <Formik
          initialValues={{
            first_name: "",
            last_name: "",
            email: "",
            password: "",
          }}
          validationSchema={signupSchema}
          onSubmit={async (values) => {
            const name = `${values.first_name} ${values.last_name}`;
            try {
              const res = await register(values.email, values.password);

              await updateProfile(auth.currentUser, {
                displayName: name,
              });

              await setDoc(doc(db, "users", res.user.uid), {
                ...values,
                timeStamp: serverTimestamp(),
              }).catch((err) => console.error(err.message));

              if (res) {
                navigate("/dashboard");
                return res;
              }
            } catch (error) {
              console.error(error.message);
            }
          }}
        >
          {({ errors, touched, isValid, dirty, isSubmitting }) => (
            <Form>
              <div className="mt-8">
                <h2 className="mb-8 text-2xl font-bold text-center text-gray-800 font-roboto">
                  Create an account
                </h2>
                <div className="space-y-4">
                  <FormikController
                    control="input"
                    name="first_name"
                    label="First name"
                    error={Boolean(errors.first_name && touched.first_name)}
                  />
                  <FormikController
                    control="input"
                    name="last_name"
                    label="Last name"
                    error={Boolean(errors.last_name && touched.last_name)}
                  />
                  <FormikController
                    control="input"
                    type="email"
                    name="email"
                    label="Email address"
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
                    className={`w-full py-2 text-sm text-white transition duration-150 bg-indigo-600 rounded-md ring-2 ring-indigo-600 focus:ring-offset-2 ${
                      !(isValid && dirty) &&
                      "bg-indigo-600/80 ring-indigo-600/80"
                    } ${isSubmitting && "bg-indigo-600/80 ring-indigo-600/80"}`}
                  >
                    {isSubmitting ? "Signing up..." : "Sign up"}
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default RegisterPage;
