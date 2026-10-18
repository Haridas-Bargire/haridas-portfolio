import Icon from "./Icons.jsx";

// Shared wrapper: gives every section the same spacing, width and heading.
export default function Section({ id, title, icon, tone = "light", children }) {
  return (
    <section id={id} className={`section section--${tone}`}>
      <div className="container">
        <h2 className="section__title">
          {icon && <Icon name={icon} size={26} className="section__icon" />}
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}
