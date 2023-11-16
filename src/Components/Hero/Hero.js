
import './Hero.css'
import img1 from '../../images/img2.png';
import { useState } from 'react';
// import Dropdown from '../Dropdown/Dropdown.js';

const Hero = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    // function setDatepicker(_this) {

    //     /* Get the parent class name so we  
    //         can show date picker */
    //     let className = $(_this).parent()
    //         .parent().parent().attr('class');

    //     // Remove space and add '.' 
    //     let removeSpace = className.replace(' ', '.');

    //     // jQuery class selector 
    //     $("." + removeSpace).datepicker({
    //         format: "dd/mm/yyyy",

    //         // Positioning where the calendar is placed 
    //         orientation: "bottom auto",
    //         // Calendar closes when cursor is  
    //         // clicked outside the calendar 
    //         autoclose: true,
    //         showOnFocus: "false"
    //     });
    // }
    // const [isopen, setIsopen] = useState(false);
    // function myFunction() {
    //     console.log("true")
    //     setIsopen(true)
    //     // document.getElementById("myDropdown").classList.toggle("show");
    // }

    return (

        <section>
            <div className='container'>
                <div className="multi-search-box2">
                    <div class="search">
                        {/* <a href="#"><i class="fa-solid fa-magnifying-glass"></i></a> */}
                        <input type="search" placeholder="CITY, TOWN" />
                        <div class="map d-flex  justify-content-center">
                            <i class="fa-solid fa-map-location-dot"></i>
                        </div>
                    </div>

                    <form className='form'>
                        <ul className='multi-search-box'>
                            <li>
                                <p className='pe-5'>Check In</p>
                                <div class="input-group date">
                                    {/* <!-- Sets the calendar icon --> */}
                                    <span class="input-group-prepend">
                                        <span class="input-group-text bg-transparent">
                                            {/* <i class="fa fa-calendar "
                                                onclick="setDatepicker(this)">
                                            </i> */}
                                            {/* <i class="fa-solid fa-calendar"></i> */}
                                            <i class="fa-sharp fa-solid fa-calendar"></i>
                                        </span>
                                    </span>

                                    {/* <!-- Accepts the input from calendar --> */}
                                    <input className="form-control bg-transparent font-black" type="text"
                                        name="dob" id="dob" placeholder="--/--/--" />
                                </div>
                            </li>
                            <li>
                                <p className='pe-5'>Check Out</p>

                                <div class="input-group date">
                                    {/* <!-- Sets the calendar icon --> */}
                                    <span class="input-group-prepend">
                                        <span class="input-group-text bg-transparent">
                                            {/* <i class="fa fa-calendar"
                                                onclick="setDatepicker(this)">
                                            </i> */}
                                            <i class="fa-solid fa-calendar"></i>
                                        </span>
                                    </span>

                                    {/* <!-- Accepts the input from calendar --> */}
                                    <input className="form-control bg-transparent" type="text"
                                        name="dob" id="dob" placeholder="--/--/--" />
                                </div>
                            </li>
                            <li class="price flex flex-col pe-5">
                                <div>
                                    <p>Price</p>
                                    {/* <button class="btn w-64 rounded-full">Button</button> */}
                                    {/* <button className="btn btn-error">Error</button> */}
                                    <p><input className='bg-transparent' type="number" maxlength="8" placeholder="$5000" /></p>
                                </div>
                            </li>

                            <li onClick={toggleDropdown} class="drop-menu flex items-center">
                                <div className="relative inline-block text-center">
                                    <div className=''>
                                        <button
                                            type="button"
                                            className=" flex items-center pt-3 bg-transparent w-full  mb-7 text-sm font-medium text-gray-700 "
                                            id="options-menu"
                                        // onClick={toggleDropdown}
                                        >
                                            Guests and Rooms
                                            <img class="btn-img m-2" src="images/05.png" />
                                            {/* <svg
                                                className="-mr-1 ml-2 h-5 w-5"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10 12a2 2 0 100-4 2 2 0 000 4z"
                                                    clipRule="evenodd"
                                                />
                                            </svg> */}
                                        </button>
                                    </div>

                                    {isOpen && (
                                        <div className=" z-40 absolute p-2  mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                            <div className=" flex flex-col">

                                                <div class="flex justify-around mb-2">
                                                    <div class="relative hover:border-b-4 border-black">
                                                        <img src="images/05.png" />
                                                        <div class="absolute bottom-0 left-0 right-0 h-0.5 bg-black opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                                    </div>

                                                    <div class="relative group hover:border-b-4 border-black">
                                                        <img src="images/04.png" />
                                                        <div class="absolute bottom-0 left-0 right-0 h-0.5 bg-black opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                                    </div>

                                                    <div class="relative group hover:border-b-4 border-black">
                                                        <img src="images/05.png" />
                                                        <div class="absolute bottom-0 left-0 right-0 h-0.5 bg-black opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                                    </div>
                                                </div>

                                                <div className='mt-2 border-b-4 border-black'></div>

                                                <div className='d-flex align-items-center p-2 mt-2 '>
                                                    <img className='pe-2' src="images/adult.png" />
                                                    <div class="btn-minus">
                                                        {/* <i class="fa-solid fa-minus"></i> */}
                                                        <i class="fa fa-minus" aria-hidden="true"></i>
                                                    </div>
                                                    <input className='' type="number" placeholder="0" />
                                                    <div class="btn-plus">
                                                        {/* <i class="fa-solid fa-plus"></i> */}
                                                        <i class="fa fa-plus" aria-hidden="true"></i>
                                                    </div>
                                                </div>
                                                <div className='d-flex align-items-center p-2'>
                                                    <img className='pe-2' src="images/child.png" />
                                                    <div class="btn-minus">
                                                        {/* <i class="fa-solid fa-minus"></i> */}
                                                        <i class="fa fa-minus" aria-hidden="true"></i>
                                                    </div>
                                                    <input className='' type="number" placeholder="0" />
                                                    <div class="btn-plus">
                                                        {/* <i class="fa-solid fa-plus"></i> */}
                                                        <i class="fa fa-plus" aria-hidden="true"></i>
                                                    </div>
                                                </div>
                                                <div className='d-flex align-items-center p-2'>
                                                    <img className='pe-2' src="images/05.png" />
                                                    <div class="btn-minus">
                                                        {/* <i class="fa-solid fa-minus"></i> */}
                                                        <i class="fa fa-minus" aria-hidden="true"></i>
                                                    </div>
                                                    <input className='' type="number" placeholder="0" />
                                                    <div class="btn-plus">
                                                        {/* <i class="fa-solid fa-plus"></i> */}
                                                        <i class="fa fa-plus" aria-hidden="true"></i>
                                                    </div>
                                                </div>

                                                <div className='d-flex justify-content-between p-2'>

                                                    <button class="reset">Reset</button>
                                                    <button class="apply">Apply</button>

                                                </div>

                                            </div>
                                        </div>
                                    )}
                                </div>
                            </li>

                        </ul>
                        {/* <button class="Sbtn btn-submit-search" type="submit">Search</button> */}
                        <button class="btn2 btn-submit-search" type="submit">Search</button>

                    </form>
                    <div class="banner">
                        <img class="col-lg-4" src={img1} alt="My Image" />
                        <img class="col-lg-4" src="images/img2.png" />
                        <img class="col-lg-4" src="images/img3.png" />
                    </div>
                </div>
            </div>
        </section >

        // <setion id="middle_banner">

        //     <div class="container">

        //         <div class="search">
        //             {/* <!-- <a href="#"><i class="fa-solid fa-magnifying-glass"></i></a> --> */}
        //             <input type="search" placeholder="CITY, TOWN" />
        //             <div class="map"><a href="#"><i class="fa-solid fa-map-location-dot"></i></a></div>
        //         </div>

        //         <form className='form'>
        //             <ul class="multi-search-box">
        //                 <li>
        //                     <p>Check In</p>
        //                     <div class="input-group date">
        //                         {/* <!-- Sets the calendar icon --> */}
        //                         <span class="input-group-prepend">
        //                             <span class="input-group-text">
        //                                 <i class="fa fa-calendar"
        //                                     onclick="setDatepicker(this)">
        //                                 </i>
        //                             </span>
        //                         </span>

        //                         {/* <!-- Accepts the input from calendar --> */}
        //                         <input class="form-control" type="text"
        //                             name="dob" id="dob" placeholder="--/--/--" />
        //                     </div>
        //                 </li>
        //                 <li>
        //                     <p>Check Out</p>
        //                     <div class="input-group date">
        //                         {/* <!-- Sets the calendar icon --> */}
        //                         <span class="input-group-prepend">
        //                             <span class="input-group-text">
        //                                 <i class="fa fa-calendar"
        //                                     onclick="setDatepicker(this)">
        //                                 </i>
        //                             </span>
        //                         </span>

        //                         {/* <!-- Accepts the input from calendar --> */}
        //                         <input class="form-control" type="text"
        //                             name="dob" id="dob" placeholder="--/--/--" />
        //                     </div>
        //                 </li>
        //                 <li class="price">
        //                     <p>Price</p>
        //                     <input type="number" maxlength="8" placeholder="$5000" />
        //                 </li>

        //                 <li class="drop-menu ">
        //                     <div class="dropdown">
        //                         <img class="btn-img" src="images/05.png" />
        //                         <p onclick="myFunction()" class="dropbtn">Guests and Rooms</p>
        //                         <div id="myDropdown" class="dropdown-content show">
        //                             <ul>
        //                                 <li>
        //                                     <div class="radio">
        //                                         <input type="radio" name="myRadio" value="option1" class="radio__input" id="myRadio1" />
        //                                         <label class="radio__label" for="myRadio1"><img src="images/hotel.png" /></label>

        //                                         <input type="radio" name="myRadio" value="option2" class="radio__input" id="myRadio2" />
        //                                         <label class="radio__label" for="myRadio2"><img src="images/04.png" />

        //                                         </label>

        //                                         <input type="radio" name="myRadio" value="option3" class="radio__input" id="myRadio3" />
        //                                         <label class="radio__label" for="myRadio3">
        //                                             <img src="images/05.png" />
        //                                         </label>
        //                                     </div>
        //                                 </li>
        //                                 <li><img src="images/adult.png" /><button class="btn-minus"><i class="fa-solid fa-minus"></i></button><input type="number" placeholder="0" /><button class="btn-plus"><i class="fa-solid fa-plus"></i></button></li>
        //                                 <li><img src="images/child.png" /><button class="btn-minus"><i class="fa-solid fa-minus"></i></button><input type="number" placeholder="0" /><button class="btn-plus"><i class="fa-solid fa-plus"></i></button></li>
        //                                 <li><img src="images/05.png" /><button class="btn-minus"><i class="fa-solid fa-minus"></i></button><input type="number" placeholder="0" /><button class="btn-plus"><i class="fa-solid fa-plus"></i></button></li>
        //                                 <button class="reset">Reset</button><button class="apply">Apply</button>
        //                             </ul>
        //                         </div>
        //                     </div>
        //                 </li>
        //             </ul>
        //             <button class="btn2 btn-submit-search" type="submit">Search</button>
        //         </form>
        //         <div class="banner">
        //             <img class="col-lg-4" src="images/img1.png" />
        //             <img class="col-lg-4" src="images/img2.png" />
        //             <img class="col-lg-4" src="images/img3.png" />
        //         </div>
        //     </div>
        // </setion>

    );
};

export default Hero;