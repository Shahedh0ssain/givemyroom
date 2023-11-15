
import React from 'react';
import GoogleLogIn from '../../GoogleLogIn/GoogleLogIn';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import app from "../../../firebase.init";
import { getAuth } from "firebase/auth";

// const auth = getAuth(app)
const Login = () => {

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
        // console.log("user", user);
    }
    if (loading) {
        console.log("loading");
    }
    if (error) {
        console.log("error", error);
    }

    // const {signInWithGoogle}= useFirebase();
    const { register, reset, formState: { errors }, handleSubmit } = useForm()
    const onSubmit = (data) => {
        // console.log("LOGIN", data);
        const { Email, Password } = data;
        signInWithEmailAndPassword(Email, Password)
        reset();
    }

    return (
        // <div className='container '>

        //     <h2 className='text-center text-primary mt-5' >Login Now!</h2>
        //     {/* <h2 className='text-center mt-5'>{register ? 'Login Now!!' :' Register Now!!'}</h2> */}
        //     <div className='d-flex align-center justify-content-center  mt-5'>
        //         <button onClick={() => signInWithGoogle()}>Google sign in</button>
        //     </div>
        //     {/* <GoogleLogIn></GoogleLogIn> */}
        //     <Form className=' border  border-success w-50 mx-auto mt-5 p-4'>
        //         <Form.Group className="mb-3" controlId="formBasicEmail">
        //             <Form.Label>Email address</Form.Label>
        //             <Form.Control type="email" placeholder="Enter email" />
        //         </Form.Group>

        //         <Form.Group className="mb-3" controlId="formBasicPassword">
        //             <Form.Label>Password</Form.Label>
        //             <Form.Control type="password" placeholder="Password" />
        //         </Form.Group>


        //         <Button variant="primary" type="submit">

        //             Login Now

        //         </Button>
        //     </Form>
        // </div>

        <section className=''>
            <div className='container'>
                <div className="roww">

                    {/* //from start */}
                    <div className='full-form'>
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
                            <button
                                // onClick={() => signInWithGoogle()}
                                className="googlebtn "
                            >Sign in with FACEBOOK</button>
                        </div>
                    </div>

                </div>
            </div>
        </section >
    );
};

export default Login;