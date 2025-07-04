import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import {
  NETFLIX_LOGO,
  NETFLIX_USER_LOGO,
  SUPPORTED_LANGUAGES,
} from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLang } from "../utils/configSlice";


const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const gptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    // Cleanup function to unsubscribe from the auth state listener
    // when the component unmounts or when the auth state changes.
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLangChange = (e) => {
    dispatch(changeLang(e.target.value))


  }

  return (
    <div className="absolute w-screen px-8 py-2  bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img src={NETFLIX_LOGO} alt="logo" className="w-44 mx-auto md:mx-0" />

      {user && (
        <div className="flex p-2 items-center cursor-pointer mx-auto md:mx-0">
          {gptSearch && (
            <select className="m-2 p-2 rounded-lg bg-purple-700 text-white"
            onClick={handleLangChange}>
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <button
            className="p-2 m-2 bg-purple-700 text-white rounded-lg"
            onClick={handleGptSearchClick}
          >
            {gptSearch ? "Homepage" : "GPT Search" }
          </button>
          <img
            src={NETFLIX_USER_LOGO || user.photoURL}
            // src={user.photoURL}
            alt="who's-watching-logo"
            className="w-8 h-8 rounded-md"
          />
          <button onClick={handleSignOut} className="font-bold text-white">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
