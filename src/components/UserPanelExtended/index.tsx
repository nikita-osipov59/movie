import { useEffect, useRef, useState } from "react";

import { UserPanel } from "@/components";

import { LogOut, Settings, SwitchTheme } from "@/components/ui";

import style from "./style.module.scss";

export const UserPanelExtended = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={style.userPanelExtended} ref={menuRef}>
      <div onClick={() => setIsOpen(!isOpen)}>
        <UserPanel type="button" />
      </div>
      {isOpen && (
        <div className={style.open}>
          <ul className={style.list}>
            <UserPanel type="link" />
            <li className={style.item}>
              <Settings />
              <SwitchTheme />
            </li>
            <li className={style.item}>
              <LogOut />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
