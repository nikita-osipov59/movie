import { useEffect, useRef, useState } from "react";

import { Bell, BellDot } from "lucide-react";

import { Button } from "@/components/ui";

import style from "./style.module.scss";

export const NotificationPanel = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isHas = false;
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
    <div ref={menuRef} className={style.box}>
      <Button onClick={() => setIsOpen(!isOpen)} variant="default">
        {isHas ? (
          <BellDot
            className={
              isHas ? `${style.BellDot} ${isOpen ? "active" : ""}` : ""
            }
            size={22}
          />
        ) : (
          <Bell className={isOpen ? "active" : ""} size={22} />
        )}
      </Button>
      {isOpen &&
        (isHas ? (
          <div className={style.open}>есть</div>
        ) : (
          <div className={style.open}>
            <Bell size={50} /> В этом разделе будут собраны уведомления о
            каналах, на которые вы подписаны.
          </div>
        ))}
    </div>
  );
};
