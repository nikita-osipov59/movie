import { NavLink, useLocation } from "react-router-dom";

import { useState } from "react";

import { ROUTER_PATH } from "@/router/PATH";

import { Mail, Lock } from "@/components/ui/svg";

import { getAuthStore } from "@/store";

import { AuthService } from "@/services";

import { Reminder } from "@/components/ui";

import style from "./style.module.scss";

export const Form = () => {
  const { error, email, setEmail } = getAuthStore();

  const { handleLogin, handleRegistration } = AuthService();

  const [password, setPassword] = useState("");

  const location = useLocation();

  return (
    <div className={style.wrapper}>
      <div className={style.welcomeBox}>
        <p className={style.welcomeTitle}>
          Welcome to <span>movie</span>you can do more
        </p>
      </div>
      <div className={style.box}>
        <div className={style.title}>
          <NavLink to={ROUTER_PATH.REGISTRATION}>Registration</NavLink>
          <div>/</div>
          <NavLink to={ROUTER_PATH.AUTH}>Login</NavLink>
        </div>
        <div className={style.mail}>
          <p>Email</p>
          <label htmlFor="mail-input">
            <Mail size={22} />
          </label>
          <input
            className={style.input}
            id="mail-input"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@gmail.ru"
          />
        </div>
        <div className={style.lock}>
          <p>Password</p>
          <label htmlFor="password-input">
            <Lock size={22} />
          </label>
          <input
            className={style.input}
            id="password-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
          />
        </div>
        {error && <span className="error">{error}</span>}
        {location.pathname === ROUTER_PATH.REGISTRATION && (
          <Reminder
            view="Registration"
            onClick={() => handleRegistration(email, password)}
          />
        )}
        {location.pathname === ROUTER_PATH.AUTH && (
          <Reminder view="Login" onClick={() => handleLogin(email, password)} />
        )}
      </div>
    </div>
  );
};
