import teamJinghao from "@/assets/team-jinghao.jpeg";
import teamChris from "@/assets/team-chris.jpeg";
import teamAndrew from "@/assets/team-andrew.jpeg";

const team = [
  {
    name: "Phan Phi Long",
    title: "Vice President, Singapore-Vietnam Chambers of Commerce",
    img: "https://svbb.sg/wp-content/uploads/2024/03/philong-768x1024.jpg",
    objectPosition: "center 15%",
  },
  {
    name: "Dr Ke Jinghao",
    title: "Director, SVBB; CEO, Metaskills Institute",
    img: teamJinghao,
    objectPosition: "center 10%",
  },
  {
    name: "Christopher Tan",
    title: "Chief Business Development Officer, SVBB",
    img: teamChris,
    objectPosition: "center 10%",
  },
  {
    name: "Andrew Toh",
    title: "Head Operations, SVBB",
    img: teamAndrew,
    objectPosition: "center 10%",
  },
];

const TeamSection = () => {
  return (
    <section id="team" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-gold font-body text-sm font-semibold tracking-widest uppercase">Our Leadership</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            Meet the <span className="text-gradient-gold">Experts</span>
          </h2>
          <p className="font-body text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            Our consultants bring deep expertise in both Singapore and Vietnam markets — championing bilateral trade and business growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
