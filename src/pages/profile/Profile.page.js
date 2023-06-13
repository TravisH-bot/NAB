import React, { useState, useEffect } from "react";
import "./Profile.styles.css";
import { storage } from "../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { nanoid } from "nanoid";
import { useAuth, database } from "../../firebase";
import { updateProfile } from "firebase/auth";
import { Ripple, initTE } from "tw-elements";
import { ref as ref2, set } from "firebase/database";

initTE({ Ripple });

const Profile = () => {
  const [imageUpload, setImageUpload] = useState(null);
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
  );

  const handleImageChange = (event) => {
    if (event.target.files[0]) {
      setImageUpload(event.target.files[0]);
    }
  };

  const currentUser = useAuth();

  useEffect(() => {
    if (currentUser?.url) {
      setUrl(currentUser.url);
    }
  }, [currentUser]);

  const uploadImage = (currentUser) => {
    if (imageUpload === null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + nanoid()}`);
    uploadBytes(imageRef, imageUpload)
      .then((snapshot) => {
        getDownloadURL(imageRef)
          .then((url) => {
            set(ref2(database, "profile-urls/" + currentUser.uid), {
              profile_picture: url,
            });
          })
          .catch((error) => {
            console.log(error.message, "error getting the image url");
          });
        setImageUpload(null);
      })
      .catch((error) => {
        console.log(error.message);
      });
    updateProfile(currentUser, { url });
  };

  return (
    <div className="profile bg-slate-400 dark:bg-slate-800">
      <div className="profPic">
        <div class="mb-3">
          <img src={url} class="w-36 rounded-full" alt="Avatar" />
          <label
            for="formFile"
            class="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
          >
            Upload a profile picture
          </label>
          <input
            class="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
            type="file"
            id="formFile"
            onChange={handleImageChange}
          />
          <button
            disabled={loading || !imageUpload}
            type="button"
            class="inline-block rounded bg-neutral-800 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] transition duration-150 ease-in-out hover:bg-neutral-800 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-neutral-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] dark:bg-neutral-900 dark:shadow-[0_4px_9px_-4px_#030202] dark:hover:bg-neutral-900 dark:hover:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:focus:bg-neutral-900 dark:focus:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:active:bg-neutral-900 dark:active:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)]"
            onClick={uploadImage}
          >
            Upload Image
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
