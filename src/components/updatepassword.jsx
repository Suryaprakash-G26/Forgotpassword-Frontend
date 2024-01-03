import { useFormik } from "formik";
import { useState } from "react";
import { ResetPasswordschema } from "../formik/resetpassword";
import { UpdatePassword } from "../API/login";
import { useNavigate, useParams } from "react-router-dom";

const Updatepassword=()=>{
    const { id } = useParams();
    const [data, setdata] = useState("");
        const [success, setsuccess] = useState("");
        const [loading, setLoading] = useState(false);
      const navigate=useNavigate()

        const { values, handleChange, handleSubmit, errors, handleBlur, touched } =
          useFormik({
            initialValues: {
              email: "",
              password:'',
              Confirmpassword:""
            },
            validationSchema: ResetPasswordschema,
            onSubmit: async (user) => {
                try {
                  if (user.password !== user.Confirmpassword) {
                    setdata("Password mismatch");
                    return; // Prevent further execution if there's a password mismatch
                  }
              
                  setLoading(true);
              
                  const info = await UpdatePassword(id, user);
              
                  if (info?.error) {
                    setdata(info.error);
                    setsuccess("");
                  } else {
                    setsuccess(info.data);
                    setdata("");
                  }
                } catch (error) {
                  console.error("Error during form submission:", error);
                } finally {
                  setLoading(false);
                  setTimeout(() => {
                    setsuccess("");
                    setdata("");
                    navigate('/signin')
                  }, 5000);
                }
              },
              
          });
      
        return (<>
        <div className="grid grid-cols-1 sm:grid-cols-2 m-5 p-5 justify-items-center items-center">
        <div>
          <img
            src="https://assets-v2.lottiefiles.com/a/4a774176-1171-11ee-ae48-bf87d1dea7a3/FzdIgU4ZSq.gif"
            alt="Login"
            className="h-full"
          />
        </div>
        <div className="flex flex-col justify-center items-center m-2">
          <h1 className="text-center text-secondary text-3xl m-4">Forgot Password?? </h1>
          <div className="w-full max-w-xs">
            {success !== "" && (
              <div className="toast toast-top toast-end">
                <div className="alert alert-success">
                  <span>{success}</span>
                </div>
              </div>
            )}
      
            {data !== "" && (
              <div className="toast toast-top toast-end">
                <div className="alert alert-info">
                  <span>{data}</span>
                </div>
              </div>
            )}
      
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Enter email"
                name="email"
                value={values.email}
                onBlur={handleBlur}
                onChange={handleChange}
                className="input input-bordered input-accent w-full m-2 p-2"
              />
              {touched.email && errors.email && (
                <div className="text-error">{errors.email}</div>
              )}
                <input
                type="password"
                placeholder="Enter password"
                name="password"
                value={values.password}
                onBlur={handleBlur}
                onChange={handleChange}
                className="input input-bordered input-accent w-full m-2 p-2"
              />
              {touched.password && errors.password && (
                <div className="text-error">{errors.password}</div>
              )}
                <input
                type="password"
                placeholder="Enter password again"
                name="Confirmpassword"
                value={values.Confirmpassword}
                onBlur={handleBlur}
                onChange={handleChange}
                className="input input-bordered input-accent w-full m-2 p-2"
              />
              {touched.Confirmpassword && errors.Confirmpassword && (
                <div className="text-error">{errors.Confirmpassword}</div>
              )}
              <div className="flex justify-center items-center">
                <button
                  className="btn btn-success m-2 p-2"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? (
                    <div className="loading loading-spinner text-accent"></div>
                  ) : (
                    "Click to reset"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
        </>
         
        );
      };


export default Updatepassword