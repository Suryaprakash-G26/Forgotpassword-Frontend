/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate, useParams } from "react-router-dom";
import { Activator } from "../API/login";
import { useState, useEffect } from "react";

const AccountActivator = () => {
  const { id } = useParams();
  const [data, setdata] = useState("");
  const [success, setsuccess] = useState("");
  const navigate=useNavigate()

  useEffect(() => {
    const activateAccount = async () => {
      try {
        const info = await Activator(id);

        if (info?.error) {
          setdata(info.error);
          setsuccess("");
        } else {
          setsuccess(info.data);
          setdata("");
          console.log(info);
          setTimeout(() => {
            setsuccess(""), setdata("");
            navigate('/')
          }, 5000);

        }
      } catch (error) {
        console.log(error);
      }
    };

    activateAccount();
  }, [id]);

  return (
<div className="grid m-5 p-5  image-full mx-auto ">
<figure>
<img
      src={success !== "" ? "https://64.media.tumblr.com/562d05b47808c8b25fa72c266ce17c74/tumblr_pzhta0NGr61vz2sn9o2_400.gifv" : "https://media.tenor.com/9WFsBeb7sr8AAAAC/loading-gif.gif"}
      alt={success !== "" ? "Success Image" : "Loading Image"}
      className="mx-auto full mt-4 rounded-lg"
      style={{ maxWidth: '100%', height: 'auto' }}
    />
</figure>

  <div className="w-full max-w-xs mx-auto">

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


   
  </div>
</div>

  );
};

export default AccountActivator;
