import { Container, Form } from "@/components/ui";

import style from "./style.module.scss";

export const AuthPage = () => {
  return (
    <section>
      <Container>
        <div className={style.box}>
          <Form />
        </div>
      </Container>
    </section>
  );
};
