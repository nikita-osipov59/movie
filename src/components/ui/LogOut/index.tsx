import { AuthService } from "@/services";

import { LogOutIcon } from "lucide-react";

import { Button } from "@/components/ui";

import style from "./style.module.scss";

export const LogOut = () => {
  const { handleSignOut } = AuthService();

  return (
    <Button onClick={handleSignOut} variant="default">
      <div className={style.text}>
        <LogOutIcon size={22} />
        LogOut
      </div>
    </Button>
  );
};
