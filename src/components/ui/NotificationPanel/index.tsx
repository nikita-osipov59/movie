import { useEffect, useRef, useState } from "react";

import { Notification, NotificationHas } from "@/components/ui/svg";

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
          <NotificationHas active={isOpen && true} color="#f50" size={22} />
        ) : (
          <Notification active={isOpen && true} size={22} />
        )}
      </Button>
      {isOpen &&
        (isHas ? (
          <div className={style.open}>есть</div>
        ) : (
          <div className={style.open}>
            <Notification size={50} />В этом разделе будут собраны уведомления о
            каналах, на которые вы подписаны.
          </div>
        ))}
    </div>
  );
};
