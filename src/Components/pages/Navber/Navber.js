import React, { useState } from 'react';
import Header from '../../../Components/Header/Header';
import Sidebar from '../../../Components/Sidebar/Sidebar';

const Navber = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const openSidebar = () => {
        setIsSidebarOpen(true);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    return (
        <div>
            <Header onOpenSidebar={openSidebar} />
            <Sidebar isOpen={isSidebarOpen} onCloseSidebar={closeSidebar} />
        </div>
    );
};

export default Navber;
