import { useTranslation } from "react-i18next";
import useScrollOnMount from "src/Hooks/App/useScrollOnMount";
import PagesHistory from "../Shared/MiniComponents/PagesHistory/PagesHistory";
import s from "./Contact.module.scss";
import ContactForm from "./ContactForm/ContactForm";

const Contact = () => {
  const { t } = useTranslation();

  useScrollOnMount();

  return (
    <>

      <div className="container">
        <main className={s.contactPage}>
          <PagesHistory history={["/", t("nav.contact")]} />

          <div className={s.contactContent} id="contact-page">
            {/* <ContactCardInfo /> */}
            <ContactForm />
          </div>
        </main>
      </div>
    </>
  );
};
export default Contact;
