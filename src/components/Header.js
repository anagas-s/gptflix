import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged} from "firebase/auth";
import { addUser,removeUser } from "../utils/userSlice"; 
import { NETFLIX_LOGO_URL } from "../utils/constants";

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const user = useSelector(store => store.user)

    const handleSignout =() => {
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            navigate("/error");
            // An error happened.
          });
    }


    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              const {uid,email,displayName,photoURL}= user;
              dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
              navigate("/browse");

              // ...
            } else {
                dispatch(removeUser());
                navigate("/");
                
              // User is signed out
              // ...

            }
          });
//Unsubscribe when components unmount
          return () => unsubscribe();
    },[])

    return (
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
            <img className="w-44" alt="netflix-logo" src={NETFLIX_LOGO_URL} />
            {user && <div className="flex p-2 mt-2">
                <img className="w-12 h-12" src={user?.photoURL}
                 alt="usericon"/>
                 <button onClick={handleSignout} className="font-bold text-white">Sign Out</button>
            </div>}
        </div>
    )
}

export default Header;