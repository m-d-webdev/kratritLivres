import { useState } from "react";
import LOGO from '../components/LOGO'
import { Link, Navigate, useNavigate } from "react-router-dom";
import api from "../config/api";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../slices/user";
import { Ten } from "../slices/ten";

export default function RegisterPage() {

    const dispatch = useDispatch()
    const [newUserData, setNewUserData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const [ErrorEmail, setErrorEmail] = useState(false)
    const { isLoggedIn, isLoading } = useSelector(s => s.user);
    const naviagte = useNavigate();
    if (isLoggedIn) {
        naviagte('/')
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        let res = await dispatch(registerUser(newUserData));
        if (res.error) {
            if (res.payload == "duplicate email") {
                console.log('yes');

                setErrorEmail(true)
            }

        }
    };

    return (
        <div className="wmia mt50  mb20 r-p-c p20 bg-l  h700 br20 drop-shadow-md max-w-10/12 " >
            <form onSubmit={handleSubmit} className="c-s-c w-2/5  hmia">
                <LOGO />
                <div className="wmia mt20  pl20 c-s-s">
                    <h1 style={{ fontSize: "20px" }} className=" fw900">Créer un Nouveau Compte</h1>
                    <p className="fw600 mt10 ml20 text-center  op-7">Rejoignez-nous et commencez votre aventure dès aujourd'hui !</p>
                </div>

                <div className="c-s-s wmia max-w-11/12 mt50">
                    <label htmlFor="nom" className="fw900  op-7">Nom  :</label>
                    <input onChange={e => setNewUserData(({ ...newUserData, name: e.target.value }))} id="nom" type="text" className="border ml-0  p10 fw900 mt10 wmia max-w-4/5" placeholder="Entrez votre nom complet" />
                </div>

                <div className="c-s-s mt20 wmia max-w-11/12 ">
                    <label htmlFor="email" className="fw900  op-7">Email :</label>
                    <input
                        style={ErrorEmail ? {
                            borderColor: "red",
                        } : {}}
                        onChange={e => setNewUserData(({ ...newUserData, email: e.target.value }))} id="email" type="text" className="border ml-0  p10 fw900 mt10 wmia max-w-4/5" placeholder="Email de connexion ..." />
                </div>

                <div className="c-s-s wmia max-w-11/12 mt20">
                    <label htmlFor="password" className="fw900  op-7">Mot de passe :</label>
                    <input type="text" onChange={e => setNewUserData(({ ...newUserData, password: e.target.value }))} id="password" className="border ml-0  p10 fw900 mt10 wmia max-w-4/5" placeholder="Créez un mot de passe fort" />
                </div>
                <div className="c-s-s wmia max-w-11/12 mt20">
                    <label htmlFor="password2" className="fw900  op-7">Confirmer le mot de passe :</label>
                    <input type="text" onChange={e => setNewUserData(({ ...newUserData, confirmPassword: e.target.value }))} id="password2" className="border ml-0  p10 fw900 mt10 wmia max-w-4/5" placeholder="Répétez votre mot de passe" />
                </div>
                <div className="r-c-c wmia pr20 mt50">
                    {
                        isLoading ?
                            <div className="fw900"> just une moment ...</div>
                            :
                            <button className="w200 bl ">
                                S'inscrire
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m700-300-57-56 84-84H120v-80h607l-83-84 57-56 179 180-180 180Z" /></svg>
                            </button>
                    }
                </div>
                <div className="r-c-c mt20 wmia">
                    <span>
                        Déjà un compte ?
                    </span>
                    <Link to={'/login'} className=" r-s-c fw900 c-b">
                        Connectez-vous ici
                        <svg className="ml10 f-b" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m700-300-57-56 84-84H120v-80h607l-83-84 57-56 179 180-180 180Z" /></svg>
                    </Link>
                </div>
            </form>
            <div className="hmia   w-3/5 c-c-c">
                <img src="./media/image-removebg-preview (3).png" alt="" />
            </div>
        </div>

    );
}
