import { CircleUserRound, UserPlus } from "lucide-react";

import { getAuthStore } from "@/store";

import { Button } from "@/components/ui";

import style from "./style.module.scss";

export const ProfilePreview = () => {
  const { name, email, photoURL } = getAuthStore();

  return (
    <>
      <div>
        <div className={style.wrapper}>
          <div
            className={style.poster}
            style={{
              backgroundImage: `url('https://img1.akspic.ru/crops/7/4/2/9/7/179247/179247-vizualnoe_iskusstvo-art-graficeskij_dizajn-dizajn-grafika-1280x720.jpg')`,
            }}
          />
          <div className={style.userBox}>
            <div className={style.avatar}>
              {photoURL ? (
                <img src={photoURL} alt="avatar" />
              ) : (
                <CircleUserRound size={200} />
              )}
            </div>
            <div className={style.info}>
              <div className={style.userInfo}>
                <p className={style.title}>{name ? name : email}</p>
                <div className={style.additionalInfo}>
                  <p className={style.tag}>@{email}</p>
                  <span>•</span>
                  <p className={style.followers}>55,4k followers</p>
                </div>
                <p className={style.description}>Description</p>
                <Button variant="primary">
                  <UserPlus />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
