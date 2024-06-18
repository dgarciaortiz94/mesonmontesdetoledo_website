import Items from "./items/items";
import styles from "./page.module.css";

export default function Menu() {
  return (
    <main>
      <section className="container">
          <h1 className={`${styles.pageTitle}`}>
              <i aria-hidden className="fa-solid fa-chevron-right fa-xs"></i>&nbsp; Menús
          </h1>

          <Items />
      </section>
  </main>
  );
}
