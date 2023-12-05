
import React, { useEffect } from 'react';
import GoogleLogIn from '../../GoogleLogIn/GoogleLogIn';
import './Login.css'
// import './Login.module.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import app from "../../../firebase.init";
import { getAuth } from "firebase/auth";
import FacebookLogin from '../../FacebookLogin/FacebookLogin';
import mapComponent from '../../mapComponent/mapComponent';

// const auth = getAuth(app)
const Login = () => {


    let islocation = true;

    useEffect(() => {

        // Create a new map instance
        if (window.google && window.google.maps) {
            // Create a new map instance
            // setisLoading(true);
            if (islocation) {
                const map = new window.google.maps.Map(document.getElementById('map'), {
                    center: { lat: -34.397, lng: 150.644 },
                    // center: { lat: islocation.latitude, lng: islocation.longitude },
                    zoom: 10,
                });

                // Optionally, you can add markers, polygons, etc.

                const marker = new window.google.maps.Marker({
                    position: { lat: -34.397, lng: 150.644 },
                    // position: { lat: islocation.latitude, lng: islocation.longitude },
                    map: map,
                    title: 'Hello World!',
                });
                marker.setMap(map);
                // setisLoading(false);
            } else {
                console.log("islocation error", islocation);
                // setisLoading(false);
            }
        } else {
            console.error('Google Maps API not loaded.');
            // setisLoading(false);
        }
    }, [islocation]);


    const auth = getAuth(app);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    let location = useLocation();
    let navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";

    // const [signInWithGoogle, user, error] = useSignInWithGoogle(auth)
    // const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);


    if (user) {
        navigate(from, { replace: true });

    }
    if (loading) {
        console.log("loading");
    }
    if (error) {
        console.log("error", error);
    }

    // const {signInWithGoogle}= useFirebase();
    const { register, reset, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data) => {
        // console.log("LOGIN", data);
        const { Email, Password } = data;
        signInWithEmailAndPassword(Email, Password)
        reset();
    }

    return (

        <section className=''>
            <div className='container'>
                <div className="roww">

                    <div className='map-container my-5'>

                        <div className='pt-5 rounded' id="map" style={{ width: '400px', height: '350px' }}>
                            {/* <img className='rounded-circle' src="images/map.png" alt="Girl in a jacket" ></img> */}
                            {/* <mapComponent></mapComponent> */}

                        </div>


                    </div>

                    {/* //from start */}
                    <div className='full-form rounded'>
                        <div>
                            <form onSubmit={handleSubmit(onSubmit)} className="reg-form">
                                <h2>Log in and send your offer</h2>
                                {/* {...register("Email", { required: "Email Address is required" })} */}

                                {/* <input  class="dotted" type="text" maxlength="15" name="Username" placeholder="username" /> */}
                                <input class="dotted" type="Email" maxlength="40" name="Email" placeholder="Email"
                                    {...register("Email", { required: "Email Address is required" })}
                                    aria-invalid={errors.Email ? "true" : "false"}
                                />

                                {/* //password */}
                                <input class="dotted" type="Password" maxlength="20" name="Password" placeholder="Password"
                                    {...register("Password", { required: "Password  is required" })}
                                    aria-invalid={errors.Email ? "true" : "false"}
                                />

                                {/* <div class="radio-login">
                                <input type="radio" name="myRadio" value="option1" class="radio__input_login" id="myRadio1" />
                                <label class="radio__label_login" for="myRadio1"><p>Owner</p></label>

                                <input type="radio" name="myRadio" value="option2" class="radio__input_login" id="myRadio2" />
                                <label class="radio__label_login" for="myRadio2"><p>User</p>
                                </label>
                            </div> */}
                                <input class="login" type="submit" value="Login" />
                                <Link to="/register">Not Registered? Create New Account</Link>
                                {/* <Link href="">Not Registered? Create New Account</Link>  */}
                                {/* //sign in with google button

                        {/* <button onClick={() => signInWithGoogle()}>
                            <img src="images/gmail-icon.png" alt="" />
                            <span>Sign in with GMAIL</span>
                        </button> */}

                                {/* <GoogleLogIn></GoogleLogIn> */}

                                {/* </button> */}
                                {/* sign in with facebook button */}
                                {/* <a href="#">
                            <img src="images/Fb-icon.png" alt="" />
                            <span>Sign in with FACEBOOK</span>
                        </a> */}

                            </form>
                        </div>
                        <div>
                            <GoogleLogIn></GoogleLogIn>
                            <FacebookLogin></FacebookLogin>
                            {/* <button
                                // onClick={() => signInWithGoogle()}
                                className="googlebtn "
                            >Sign in with FACEBOOK</button> */}
                        </div>
                    </div>

                </div>
            </div>
        </section >
    );
};

export default Login;