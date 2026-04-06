const team = [
  {
    name: "Phan Phi Long",
    title: "Vice President, Singapore-Vietnam Chambers of Commerce",
    expertise: "Vietnam Business Consulting | Cryptocurrency | Machine Learning | Leadership",
    bio: "A seasoned IT professional with over 20 years of experience. Holds ITIL Expert, PMP, and CEH certifications. Vice President of the Singapore-Vietnam Chambers of Commerce, bridging businesses between both nations.",
    img: "https://svbb.sg/wp-content/uploads/2024/03/philong-768x1024.jpg",
  },
  {
    name: "Dr Ke Jinghao",
    title: "Director, SVBB; CEO, JCube Institute; SMU Programme Director",
    expertise: "ASEAN Business Leadership | Data Science | AI | Power BI",
    bio: "Ph.D. in Business (Finance) from Singapore Management University. Leads multiple AI and business analytics initiatives across Southeast Asia. SMU Programme Director for 'New Ventures In Vietnam'.",
    img: "https://svbb.sg/wp-content/uploads/2023/05/Jinghao-Profilepic2-1024x1024.jpg",
  },
  {
    name: "Dr Jack Hong",
    title: "CEO, Integrum Global",
    expertise: "Data Science | AI | Machine Learning | Business Intelligence",
    bio: "Co-founder of Research Room, an A.I. consulting firm. AI Technology Consultant at Certis Group, Data Science Advisor at Vertex Holdings. Adjunct faculty at SMU since 2015.",
    img: "https://svbb.sg/wp-content/uploads/2022/01/founder-300-sq-300x300.jpg",
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

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member) => (
            <div key={member.name} className="bg-card rounded-2xl overflow-hidden border border-border hover:border-gold/40 hover:shadow-gold transition-all duration-300 group">
              <div className="h-72 overflow-hidden">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-foreground">{member.name}</h3>
                <p className="font-body text-gold-dark text-sm font-medium mt-1">{member.title}</p>
                <p className="font-body text-muted-foreground text-sm mt-3 leading-relaxed">{member.bio}</p>
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="font-body text-xs text-muted-foreground">
                    <span className="font-semibold text-foreground">Expertise:</span> {member.expertise}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
