import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ChevronDown, ChevronUp } from "lucide-react";
import teamPhilong from "@/assets/team-philong.png";
import teamJinghao from "@/assets/team-jinghao.jpeg";
import teamChris from "@/assets/team-chris.jpeg";
import teamAndrew from "@/assets/team-andrew.jpeg";
import teamMindy from "@/assets/team-mindy.png";

const BIO_THRESHOLD = 320;

const TeamSection = () => {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const team = [
    {
      key: "jinghao",
      name: t("team.jinghaoName"),
      title: t("team.jinghaoTitle"),
      bioShort: t("team.jinghaoBioShort"),
      bioFull: t("team.jinghaoBioFull"),
      img: teamJinghao,
      objectPosition: "center 10%",
    },
    {
      key: "philong",
      name: t("team.philongName"),
      title: t("team.philongTitle"),
      bioShort: t("team.philongBioShort"),
      bioFull: t("team.philongBioFull"),
      img: teamPhilong,
      objectPosition: "center 15%",
    },
    {
      key: "chris",
      name: t("team.chrisName"),
      title: t("team.chrisTitle"),
      bioShort: t("team.chrisBioShort"),
      bioFull: t("team.chrisBioFull"),
      img: teamChris,
      objectPosition: "center 10%",
    },
    {
      key: "mindy",
      name: t("team.mindyName"),
      title: t("team.mindyTitle"),
      bioShort: t("team.mindyBioShort"),
      bioFull: t("team.mindyBioFull"),
      img: teamMindy,
      objectPosition: "center 15%",
    },
    {
      key: "andrew",
      name: t("team.andrewName"),
      title: t("team.andrewTitle"),
      bioShort: t("team.andrewBioShort"),
      bioFull: t("team.andrewBioFull"),
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

        <div className="max-w-4xl mx-auto space-y-8">
          {team.map((member) => {
            const isOpen = !!expanded[member.key];
            const hasLongBio = member.bioFull && member.bioFull.length > BIO_THRESHOLD;
            return (
              <div
                key={member.key}
                className="bg-card rounded-2xl overflow-hidden border border-border hover:border-gold/40 hover:shadow-gold transition-all duration-300 flex flex-col sm:flex-row"
              >
                <div className="sm:w-64 sm:flex-shrink-0 aspect-square overflow-hidden">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: member.objectPosition }}
                    loading="lazy"
                  />
                </div>
                <div className="p-6 sm:p-8 flex flex-col flex-1">
                  <h3 className="font-heading text-xl font-bold text-foreground">{member.name}</h3>
                  <p className="font-body text-gold-dark text-sm font-medium mt-1">{member.title}</p>

                  <div className="mt-4 font-body text-sm text-muted-foreground leading-relaxed space-y-3 flex-1">
                    {isOpen ? (
                      member.bioFull.split("\n\n").map((p, i) => <p key={i}>{p}</p>)
                    ) : (
                      <p>{member.bioShort}</p>
                    )}
                  </div>

                  {hasLongBio && (
                    <button
                      type="button"
                      onClick={() => setExpanded((prev) => ({ ...prev, [member.key]: !isOpen }))}
                      className="mt-4 inline-flex items-center gap-1 text-gold-dark hover:text-gold font-body text-sm font-semibold transition-colors self-start"
                    >
                      {isOpen ? t("common.showLess") : t("common.showFullBio")}
                      {isOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
