import { BorderPanel, Container, Form } from "@/components/ui";

import style from "./style.module.scss";

const RegistrationPage = () => {
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
export default RegistrationPage;
