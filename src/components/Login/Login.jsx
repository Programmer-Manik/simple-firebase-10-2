import React, { useState } from 'react';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import app from '../../Firebase/Firebase.init';
const Login = () => {
    const [user, setUser] = useState(null)
    const auth = getAuth(app)
    console.log(app)
    const googleprovider = new GoogleAuthProvider();
    const githbprovider = new GithubAuthProvider()
    const handlepop = () => {
        signInWithPopup(auth, googleprovider)
            .then((result) => {
                const usergoogle = result.user;
                console.log(usergoogle);
                setUser(usergoogle)
            })
            .catch((error) => {
                console.log('errir', error.message);
            });}

            const mank = () =>{
                signOut(auth)
                .then(result =>{
                    console.log(result)
                    setUser(null)
                })
                .catch(error =>{
                    console.log(error)
                })
            }

            const github =() => {
                signInWithPopup(auth, githbprovider)
                .then((result) => {
                    const usergoogle = result.user;
                    console.log(usergoogle);
                    setUser(usergoogle)
                })
                .catch((error) => {
                    console.log('errir', error.message);
                });
            }
    return (
        <div>
            {
             user ? 
             <button onClick={mank}>singout</button>:
            <div>
                <button onClick={handlepop}>login</button>
                <button onClick={github}>github</button>
            </div>
            }


            {user && <div>
                <h1>{user.displayName}</h1>
            </div>

            }
        </div>
    );
};
export default Login;