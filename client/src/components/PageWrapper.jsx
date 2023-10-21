import React from 'react';
import Header from "./headers/Header";
import Footer from "./footers/Footer";

const PageWrapper = ({children, ...props}) => {
    return (
        <div>
            <Header/>
            {children}
            <Footer/>
        </div>
    );
};

export default PageWrapper;