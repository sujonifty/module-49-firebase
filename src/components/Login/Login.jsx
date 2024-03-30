import { GithubAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase/firebase.init";
import { GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";


const Login = () => {
    const [user, setUser] = useState([])
    const auth = getAuth(app);
    const GoogleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();

    const handleSignOut = () => {
        signOut(auth)
            .then(result => {
                console.log(result);
                setUser(null);

            })
            .catch(error => {
                console.log(error);
            })
    }
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, GoogleProvider)
            .then(result => {
                const GoogleUser = result.user;
                setUser(GoogleUser);

            })
            .catch(error => {
                console.log(error);
            })
    }
    const handleGitHubSignIn = () => {
        signInWithPopup(auth, gitHubProvider)
            .then(result => {
                const GithubUser = result.user;
                setUser(GithubUser);

            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div>
            {
                user? <button onClick={handleSignOut} className="btn bg-blue-300 ">Sign out</button>
                    : <div>
                        <button onClick={handleGoogleSignIn} className="btn bg-blue-300 ">Google SignIn</button>
                        <button onClick={handleGitHubSignIn} className="btn bg-blue-300 ">GitHub SignIn</button>
                    </div>
            }
            {
                user && <div>
                    <p>user:{user.displayName}</p>
                    <p>user:{user.email}</p>
                    <img className=" text-center" src={user.photoURL} alt="photo" />
                </div>

            }
        </div>
    );
};

export default Login;