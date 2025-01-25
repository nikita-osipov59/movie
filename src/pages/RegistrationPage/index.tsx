import { BorderPanel, Container, Form } from "@/components/ui";

import style from "./style.module.scss";

export const RegistrationPage = () => {
  return (
    <section>
      <Container>
        <div className={style.box}>
          <BorderPanel>
            <Form />
          </BorderPanel>
        </div>
      </Container>
    </section>
  );
};
