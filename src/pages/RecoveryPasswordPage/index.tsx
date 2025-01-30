import { BorderPanel, Container, FormRecoveryPassword } from "@/components/ui";

import style from "./style.module.scss";

export const RecoveryPasswordPage = () => {
  return (
    <section>
      <Container>
        <div className={style.box}>
          <BorderPanel>
            <FormRecoveryPassword />
          </BorderPanel>
        </div>
      </Container>
    </section>
  );
};
