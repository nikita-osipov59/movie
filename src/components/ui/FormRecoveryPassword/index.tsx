import { Mail } from "@/components/ui/svg";

import { getAuthStore } from "@/store";

import { AuthService } from "@/services";

import { Button, Reminder } from "@/components/ui";

import { NavLinkBtn } from "@/components/ui";

import style from "./style.module.scss";

export const FormRecoveryPassword = () => {
  const { error, email, setEmail } = getAuthStore();

  const { handleResetPassword } = AuthService();

  return (
    <div className={style.wrapper}>
      <div className={style.welcomeBox}>
        <p className={style.welcomeTitle}>
          Welcome to <span>IWatch</span>you can do more
        </p>
      </div>
      <div className={style.box}>
        <div className={style.title}>
          <NavLinkBtn to="#">Recovery password</NavLinkBtn>
        </div>
        <div className={style.content}>
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
          {error && <span className="error">{error}</span>}
        </div>
        <Button onClick={handleResetPassword} width="100%" variant="primary">
          Send email
        </Button>
        <Reminder view="Remember" />
      </div>
    </div>
  );
};
