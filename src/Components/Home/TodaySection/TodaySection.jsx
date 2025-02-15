import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { productsData } from "src/Data/productsData";
import ProductsSlider from "../../Shared/MidComponents/ProductsSlider/ProductsSlider";
import SectionTitle from "../../Shared/MiniComponents/SectionTitle/SectionTitle";
import EventCounter from "./EventCounter";
import s from "./TodaySection.module.scss";

const TodaySection = () => {
  const todaysSection = "sectionTitles.todaysSection";
  const { t } = useTranslation();

  return (
    <section className={s.todaysSection} id="todays-section">
      <h2>Latest Products</h2>
      <ProductsSlider filterFun={filterFlashSalesProducts} loading="lazy" />

      <Link to="/products" className={s.viewProductsBtn}>
        {t("buttons.viewAllProducts")}
      </Link>
    </section>
  );
};
export default TodaySection;

function filterFlashSalesProducts() {
  return productsData.filter((productData) => productData.sold > 100);
}
