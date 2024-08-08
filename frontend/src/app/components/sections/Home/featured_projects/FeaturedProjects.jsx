import { urlFor } from "@/app/services/home.services";
import style from "./FeaturedProjects.module.scss";

const FeaturedProjects = ({ data }) => {
  const cn = (...className) => className.join(" ");

  const sectionTitle = data.homeProjects.relevantProjectsH2;
  const sectionTitleItalic = data.homeProjects.relevantProjectsH2Italic;

  return (
    <section className={style.featured}>
      <div className={style.featuredInner}>
        <h3 className={cn("h3__brown")}>Desarrollos</h3>
        <h2 className={cn("h2__2xl")}>{sectionTitle}</h2>
        <h2 className={cn("h2__2xl", style.italic)}>{sectionTitleItalic}</h2>
        <ul className={style.featuredInner__ul}>
          {data.homeProjects.relevantProjectPreview.map((card, idx) => (
            <li key={idx}>
              <img
                src={urlFor(card.projectPreviewCard.previewCardImg.media).url()}
                alt={card.projectPreviewCard.previewCardImg.asset.altText}
              />
              <div>
                <h4>{card.projectName}</h4>
                <p>{card.projectPreviewCard.previewCardType}</p>
                <a href={`/proyectos/${card.projectSlug.current}`}>
                  Ver proyecto
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FeaturedProjects;
