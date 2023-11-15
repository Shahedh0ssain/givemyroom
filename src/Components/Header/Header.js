
import './Header.css';



// const auth = getAuth(app);

const Header = ({ onOpenSidebar }) => {

    // const { user } = useFirebase();
    // const [user] = useAuthState(auth);

    // function loadGoogleTranslate() {
    //     new google.translate.TranslateElement("google_element");
    // }
    // <script src="http://translate.google.com/translate_a/element.js?cb=loadGoogleTranslate"></script>

    // const [isOpen, setIsOpen] = useState(false);

    // const toggleSidebar = () => {
    //     setIsOpen(!isOpen);
    // };
    // const [isOpen, setIsOpen] = useState(false);

    // const toggleSidebar = () => {
    //     setIsOpen(!isOpen);
    // };

    return (

        // <header>
        //     {/* <Sidebar></Sidebar> */}
        //     <div class="main_menu">
        //         {/* <Sidebar></Sidebar> */}
        //         <div className="sidebar-toggle" onClick={toggleSidebar}>
        //             ☰ {/* You can use any icon or text for the menu button */}
        //         </div>
        //         <Sidebar onCloseSidebar={closeSidebar}></Sidebar>

        //         <div class="logo">
        //             <a href="givemyroom.com/">
        //                 <img src="images/GIVE-MY-ROOM.png" alt="" srcset="" />
        //                 {/* <img src="images/GIVE-MY-ROOM.png" alt="logo"> */}

        //             </a>
        //         </div>
        //         <div id="google_element"></div>
        //     </div>
        // </header>
        <div className="">
            <div className="header">
                <div className="open-btn" onClick={onOpenSidebar}>
                    ☰
                </div>
                <div class="logo">
                    <a href="givemyroom.com/">
                        <img src="images/GIVE-MY-ROOM.png" alt="logo" />
                    </a>
                </div>
                <div>
                    <div id="google_translate_element"></div>
                    {/* <Traslate></Traslate> */}
                    {/* <p className='text-white mb-0'>{user ? user.email : `User name`}</p> */}
                </div>

            </div>
        </div>




    );
};

// <div className='d-flex align-center justify-content-center'>
//     <nav className=' d-flex'>
//         <Link className='nav-link p-2 fs-3 fw-semibold ' to="/">Home</Link>
//         <Link className='nav-link p-2 fs-3 fw-semibold' to="/products">Product</Link>
//         <Link className='nav-link p-2 fs-3 fw-semibold' to="/order" >Order</Link>


//         <span className='  p-2 fs-3 fw-semibold'>{user && user.displayName}</span>
//         {
//             user?.uid
//                 ?
//                 <button onClick={()=>signOut(auth)} className='btn btn-primary'>sign out</button>

//                 :

//                 <>
//                     <Link className='nav-link p-2 fs-3 fw-semibold' to="/login" >Login</Link>
//                     <Link className='nav-link p-2 fs-3 fw-semibold' to="/register" >Register</Link>
//                 </>

//         }
//     </nav>
// </div>

export default Header;