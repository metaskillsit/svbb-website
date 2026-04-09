import { useTranslation } from "react-i18next";
import teamJinghao from "@/assets/team-jinghao.jpeg";
import teamChris from "@/assets/team-chris.jpeg";
import teamAndrew from "@/assets/team-andrew.jpeg";

const TeamSection = () => {
  const { t } = useTranslation();

  const team = [
    {
      name: t("team.philongName"),
      title: t("team.philongTitle"),
      img: "https://svbb.sg/wp-content/uploads/2024/03/philong-768x1024.jpg",
      objectPosition: "center 15%",
    },
    {
      name: t("team.jinghaoName"),
      title: t("team.jinghaoTitle"),
      img: teamJinghao,
      objectPosition: "center 10%",
    },
    {
      name: t("team.chrisName"),
      title: t("team.chrisTitle"),
      img: teamChris,
      objectPosition: "center 10%",
    },
    {
      name: t("team.andrewName"),
      title: t("team.andrewTitle"),
      img: teamAndrew,
      objectPosition: "center 10%",
    },
  ];

  return (
    <section id="team" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-gold font-body text-sm font-semibold tracking-widest uppercase">{t("team.sectionTag")}</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            {t("team.title1")} <span className="text-gradient-gold">{t("team.titleHighlight")}</span>
          </h2>
          <p className="font-body text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            {t("team.desc")}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {team.map((member) => (
            <div key={member.name} className="bg-card rounded-2xl overflow-hidden border border-border hover:border-gold/40 hover:shadow-gold transition-all duration-300 group">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  style={{ objectPosition: member.objectPosition }}
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-foreground">{member.name}</h3>
                <p className="font-body text-gold-dark text-sm font-medium mt-1">{member.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
