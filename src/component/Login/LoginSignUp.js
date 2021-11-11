import React, { useRef, useState } from "react";
import "./LoginSignUp.css";
//import { useDispatch } from "react-redux";
//import { login, register } from "../../actions/loginAction";

const LoginSignUp = () => {
   // const dispatch = useDispatch();
    //const [loginUser, setLoginUser] = useState();
   // const [loginPassword, setLoginPassword] = useState();
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    });

    /*const SignInUser = (e) => {
        e.preventDefault()
        dispatch(login(loginUser, loginPassword))
    }*/

    const registerUser = (e) => {
        e.preventDefault()
        const formRegister = new FormData()
        formRegister.set("name", user.name)
        formRegister.set("email", user.email)
        formRegister.set("password", user.password)
        //dispatch(register(formRegister))
    }

    const dataChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }
    const switchpage = useRef(null);
    const switchPage = (page) => {
        if(page === 'register') {
            switchpage.current.classList.add("sign-up-mode")
        }
        else {
            switchpage.current.classList.remove("sign-up-mode")
        }
    }
    return (
        <div className="d-flex justify-content-center align-items-center">
            <div ref={switchpage} className="loginUI">
            <div className="forms-container">
                <div className="signin-signup">
                <form  autoComplete="off" className="sign-in-form">
                    <p className="title">ĐĂNG NHẬP</p>
                    <div className="input-field">
                    <i className="fas fa-user" />
                    <input type="text" placeholder="Username" />
                    </div>
                    <div className="input-field">
                    <i className="fas fa-lock" />
                    <input type="password" placeholder="Password" />
                    </div>
                    <input type="submit" value="Đăng nhập" className="buttonlogin" />
                    <p className="social-text">Hoặc đăng nhập thông qua</p>
                    <div className="social-media">
                    <a href="/" className="social-icon social-facebook" >
                        <i className="fab fa-facebook" />
                    </a>
                    <a href="/" className="social-icon social-twitter">
                        <i className="fab fa-twitter" />
                    </a>
                    <a href="/" className="social-icon social-google">
                        <i className="fab fa-google" />
                    </a>
                    <a href="/" className="social-icon social-linkedin">
                        <i className="fab fa-linkedin-in" />
                    </a>
                    </div>
                </form>
                <form  autoComplete="off" onSubmit={registerUser} className="sign-up-form">
                    <p className="title">ĐĂNG KÍ</p>
                    <div className="input-field">
                    <i className="fas fa-user" />
                    <input onChange={dataChange} type="text" name="name" placeholder="Username" />
                    </div>
                    <div className="input-field">
                    <i className="fas fa-envelope" />
                    <input onChange={dataChange} type="email" name="email" placeholder="Email" />
                    </div>
                    <div className="input-field">
                    <i className="fas fa-lock" />
                    <input onChange={dataChange} type="password" name="password" placeholder="Password" />
                    </div>
                    <input type="submit" className="buttonlogin" value="Đăng kí" />
                    <p className="social-text">Hoặc đăng kí bằng</p>
                    <div className="social-media">
                    <a href="/" className="social-icon social-facebook">
                        <i className="fab fa-facebook-f" />
                    </a>
                    <a href="/" className="social-icon social-twitter">
                        <i className="fab fa-twitter" />
                    </a>
                    <a href="/" className="social-icon social-google">
                        <i className="fab fa-google" />
                    </a>
                    <a href="/" className="social-icon social-linkedin">
                        <i className="fab fa-linkedin-in" />
                    </a>
                    </div>
                </form>
                </div>
            </div>
            <div className="panels-container">
                <div className="panel left-panel">
                <div className="content">
                    <h3>Welcome you to my store!</h3>
                    <p>Bạn chưa có tài khoản? Hãy đăng kí ngay!</p>
                    <button onClick={() => switchPage("register")} className="buttonnew" id="sign-up-btn">
                    Đăng kí ngay
                    </button>
                </div>
                <img src="/image/undraw_secure_login_pdn4.svg" className="image" alt="" />
                </div>
                <div className="panel right-panel">
                <div className="content">
                    <h3>Welcome you to my store!</h3>
                    <p>Bạn đã có tài khoản? Đăng nhập ngay!</p>
                    <button onClick={() => switchPage("login")} className="buttonnew" id="sign-in-btn">
                    Đăng nhập
                    </button>
                </div>
                <img src="/image/undraw_access_account_re_8spm.svg" className="image" alt="" />
                </div>
            </div>
            </div>
        </div>
    );
};

export default LoginSignUp;