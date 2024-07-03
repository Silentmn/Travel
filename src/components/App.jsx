import React, { useContext } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./header";
import Footer from "./footer";
import Slidebarr from "./slidebarr";
import Signin from "./signin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./signup";
import About from "./about";
import Explore from "./explore";
import Is from "./Is";
import { AuthContext, AuthProvider } from "./AuthContext";
import SignOut from "./SignOut";
import Plans from "./plans";

function WrappedApp() {
    const { isAuth } = useContext(AuthContext);

    return (
        <div>
            {isAuth ? (
                <Slidebarr />
            ) : (
                <>
                    <Header />
                    <Routes>
                        <Route exact path="/" element={<Is />} />
                        <Route path="/explore" element={<Explore />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/signin" element={<Signin />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/signout" element={<SignOut />} />
                        
                    </Routes>
                    <Footer />
                </>
            )}
        </div>
    );
}

function App(){
    return(
        <AuthProvider>
        <Router>
            <WrappedApp />
        </Router>
    </AuthProvider>
);
}
    

export default App;
