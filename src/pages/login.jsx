import { useState } from "react";
import LOGO from '../components/LOGO'
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../slices/user";
import { p } from "framer-motion/client";
import Loader from "../components/Loader";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [ErrorLogin, setErrorLogin] = useState(false);
    const dispatch = useDispatch()
    const handleSubmit = async (e) => {
        e.preventDefault();
        let res = await dispatch(loginUser({ email, password }))
        if (res.error) {
            setErrorLogin(true)
        }
    };
    const { isLoggedIn, isLoading } = useSelector(s => s.user);
    const naviagte = useNavigate();

    if (isLoggedIn) {
        naviagte('/')
    }
    return (
        <div className="wmia mt50  mb20 r-p-c p20 bg-l  h600 br20 drop-shadow-md max-w-10/12 " >
            <form onSubmit={handleSubmit} className="c-s-c w-2/5  hmia">
                <LOGO />
                <div className="wmia mt50  pl20 c-s-s">
                    <h1 style={{ fontSize: "20px" }} className=" fw900">Connexion à Votre Compte</h1>
                    <p className="fw600 mt10 ml20 text-center  op-7">Bienvenue ! Veuillez vous connecter pour accéder à votre espace personnel.</p>
                </div>
                {
                    ErrorLogin && <p className="c-r fw900 mt20 wmia op-7">Email ou mot de passe incorrect</p>
                }
                <div className="c-s-s wmia max-w-11/12 mt20">
                    <label htmlFor="email" className="fw900  op-7">Email :</label>
                    <input onChange={e => setEmail(e.target.value)} id="email" type="text" className="border ml-0  p10 fw900 mt10 wmia max-w-4/5" placeholder="Email de connexion ..." />
                </div>

                <div className="c-s-s wmia max-w-11/12 mt20">
                    <label htmlFor="password" className="fw900  op-7">Mot de passe :</label>
                    <input onChange={e => setPassword(e.target.value)} type="text" id="password" className="border ml-0  p10 fw900 mt10 wmia max-w-4/5" placeholder="Mot de passe de connexion ..." />
                </div>

                <div className="r-c-c wmia pr20 mt50">
                    {
                        isLoading ?
                            <Loader />
                            :
                            <button className="w200 bl ">
                                Se connecter
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m700-300-57-56 84-84H120v-80h607l-83-84 57-56 179 180-180 180Z" /></svg>
                            </button>
                    }
                </div>

                <div className="r-c-c wmia mt50">
                    <span>
                        Pas encore inscrit ?
                    </span>
                    <Link to={'/register'} className=" r-s-c fw900 c-b">
                        Connectez-vous ici
                        <svg style={{ stroke: "var(--bg-blue)" }} className="f-no op-7 stroke-sky-500 stroke-2  ml10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokelinecap="round" strokelinejoin="round" width={32} height={32} strokeWidth={1}> <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path> <path d="M16 19h6"></path> <path d="M19 16v6"></path> <path d="M6 21v-2a4 4 0 0 1 4 -4h4"></path> </svg>
                    </Link>

                </div>
            </form>
            <div className="hmia   w-3/5 c-c-c">
                <img src="./media/image-removebg-preview (3).png" alt="" />
            </div>
        </div>

    );
}
