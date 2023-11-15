import React from "react";
import './Register.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import app from "../../../firebase.init";
import { getAuth } from "firebase/auth";
import { Controller, useForm } from 'react-hook-form';

const Register = () => {

    // Log in with google
    const auth = getAuth(app);
    const [signInWithGoogle, loading, Guser, error] = useSignInWithGoogle(auth);
    // const [rloading, setrloading] = useState(false)
    //create user with google and password :
    const [
        createUserWithEmailAndPassword,
        user,
        cloading,
        cerror,
    ] = useCreateUserWithEmailAndPassword(auth);

    let location = useLocation();
    let navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";


    if (user || Guser) {
        navigate(from, { replace: true });
     
    }
    if (loading || cloading) {
        console.log('loading');
    }
    if (cerror || error) {
        console.log("cerror", cerror.code, cerror.message);
    }

   
    const { register, control, watch, setError, formState: { errors }, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {

        const { email, password, confirmPassword } = data;
        if (password !== confirmPassword) {
            setError('confirmPassword', {
                type: 'manual',
                message: 'Passwords do not match',
            });
        } else {
          
            console.log("work", data);
            createUserWithEmailAndPassword(email, password);

            // if (cuser.user) {
            //     // navigate(from, { replace: true });
            //     console.log("result", cuser.user);
            // }

            reset();
            // rloading(false)
        }
    }

    return (


        <div className='container'>
            <div className="roww">


                {/* //from start */}
                <div className='full-form'>
                    <form onSubmit={handleSubmit(onSubmit)} class="reg-form">
                        <h2 class="form-title">Register and Avail your offer</h2>
                        <div class="radio_reg">
                            <input type="radio" name="myRadio" value="option1" class="radio__input_reg" id="myRadio1" />
                            <label class="radio__label_reg" for="myRadio1"><p>Owner</p></label>

                            <input type="radio" name="myRadio" value="option2" class="radio__input_reg" id="myRadio2" />
                            <label class="radio__label_reg" for="myRadio2"><p>User</p>
                            </label>
                        </div>

                        {/* <input class="dotted" type="text" maxlength="30" name="fullname" placeholder="Full Name"
                            {...register("Name", { required: "Name is required" })} */}
                        {/* // aria-invalid={errors.Name ? "true" : "false"} */}
                        {/* /> */}
                        {/* <input class="dotted" type="text" maxlength="50" name="Email" placeholder="Email" required
                            {...register("Email", { required: "Email Address is required" })}
                        // aria-invalid={errors.Email ? "true" : "false"}
                        /> */}


                        {/* {errors.mail && <p role="alert">{errors.mail.message}</p>} */}
                        {/* {errors.Name?.type === 'required' && <p role="alert" className='text-red-500'>{errors.Email?.message}</p>} */}
                        <label>

                            <Controller
                                name="Name"
                                control={control}
                                render={({ field }) => (
                                    <input
                                        className='dotted text-lg'
                                        type="text"
                                        placeholder="Username"
                                        {...field}
                                        {...register('Name', {
                                            required: 'Name is required',

                                        })}
                                    />
                                )}
                            />
                        </label>
                        {/* //first name */}
                        <label>

                            <Controller
                                name="email"
                                control={control}
                                render={({ field }) => (
                                    <input
                                        className='dotted'
                                        type="text"
                                        placeholder="Email"
                                        {...field}
                                        {...register('email', {
                                            required: 'Email is required',
                                            pattern: {
                                                value: /^[a-zA-Z0-9._%+-]+@gmail.com$/,
                                                message: 'Invalid Gmail address',
                                            },
                                        })}
                                    />
                                )}
                            />
                        </label>
                        {errors.email && <p>{errors.email.message}</p>}

                        <label>
                            {/* Password: */}
                            <Controller
                                name="password"
                                control={control}
                                render={({ field }) => <input className='dotted' type="password" placeholder="Password" required {...field} />}
                            />
                        </label>
                        {/* confirm password */}
                        <label>
                            {/* Confirm Password: */}
                            <Controller
                                name="confirmPassword"
                                control={control}
                                render={({ field }) => <input className='dotted' type="password" placeholder="ConfirmPassword" required {...field} />}
                            />
                        </label>
                        {/* error */}
                        <p>{watch('confirmPassword') && watch('password') !== watch('confirmPassword') && 'Passwords do not match'}</p>

                        <input class="login" type="submit" value="Register" />
                        <Link to="/login">Already Registered? Login Here</Link>
                        <p class="login-text">Sign in With :</p>
                        {/* <div class="login-options">

                            <a href="gmail.com">
                                <img src="images/gmail-icon.png" alt="" />

                            </a>
                            <a href="facebook.com">
                                <img src="images/Fb-icon.png" alt="" />
                            </a>
                        </div> */}
                    </form>
                    <div>
                        <div class="login-options">

                            <li onClick={() => signInWithGoogle()}>

                                <img src="images/gmail-icon.png" alt="" />

                            </li>
                            {/* <GoogleLogIn></GoogleLogIn> */}
                            <a href="facebook.com">
                                <img src="images/Fb-icon.png" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;