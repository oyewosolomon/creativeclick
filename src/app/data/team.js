// First, let's create a data file for team members
// data/team.js
export const teamMembers = [
    {
      id: 1,
      name: " MR, INYANG EYO",
      title: "",
      role: "Founder/CEO",
      slug: "inyan-eyo",
      image: "/assets/hogan.JPG",
      summary: "Founder and CEO with extensive experience...",
      expertise: [
        // Add expertise
      ],
      fullBio: `
       
        <p>FOUNDER & Cinematographer</p>

        <p>As the fonder and the CEO of Creative Click Ltd, a leading creative agency, I bring a unique blend of business acumen and artistic vision to the forefront of the media industry. With a deep-rooted passion for visual storytelling, I have carved out a distinguished career as a cinematographer, delivering innovative and impactful solutions to organizations both locally and internationally.
        </p>

        <p>Under my leadership, Creative Click Ltd has become synonymous with creativity, quality, and innovation. We specialize in crafting tailored visual experiences that resonate with audiences across various platforms, from feature films and television series to commercials, digital content, and corporate media. My role as Founder and CEO involves steering the strategic direction of the company, fostering a culture of creativity and excellence, and ensuring that we consistently exceed client expectations.
        </p>
        <p>As a cinematographer, I have had the privilege of working with a diverse range of clients in the media space, developing customized visual strategies that align with their brand identity and objectives. My work is characterized by a meticulous attention to detail, a strong sense of composition, and a deep understanding of the power of visual narratives. Whether working on large-scale international productions or intimate local projects, I bring the same level of dedication and creativity to every endeavor.
        </p>
        <p>My dual role as CEO and cinematographer allows me to bridge the gap between creative vision and business strategy, ensuring that every project we undertake is not only visually stunning but also aligned with our clients' goals and market demands. With a global perspective and a commitment to pushing the boundaries of what's possible, I am dedicated to leading Creative Click Ltd to new heights in the ever-evolving media landscape.
        </p>

      `
    },
    {
      id: 2,
      name: "Ojochemi Eyo-Inyang, ACIPM.",
      title: "ACIPM",
      role: "COO/Director",
      slug: "ojochemi-eyo-inyang",
      image: "/assets/manager.jpg",
      summary: "A dynamic HR, Administration, and Management professional who has recently ventured into the vibrant world of media.",
      expertise: [
        "Human Resources Management",
        "Administrative Management",
        "Talent Management",
        "Process Optimization",
        "Employee Development",
        "Media Management"
      ],
      fullBio: `
        <p>
        Ojochemi Eyo is a dynamic HR, Administration, and Management professional who has recently ventured into the vibrant world of media. With a strong background in human resources and administrative management, Ojochemi brings a wealth of experience in creating and implementing efficient systems that foster a productive and positive workplace culture.
        </p>
        <p>
        Known for a strategic approach to talent management, Ojochemi has a proven track record of aligning human capital strategies with organizational goals. This involves a deep understanding of the intricacies of recruitment, employee engagement, performance management, and compliance, ensuring that teams are not only well-staffed but also motivated and aligned with the company’s vision.

        <p>
        In administration, Ojochemi excels in streamlining operations, optimizing processes, and implementing policies that enhance organizational effectiveness. With a keen eye for detail and a commitment to excellence, they have consistently ensured that the administrative functions are robust, responsive, and supportive of the company's broader objectives.
        </p>
        <p>
        Transitioning into the media space, Ojochemi is eager to apply their expertise in a new and dynamic industry. Recognizing the unique challenges and opportunities within the media landscape, they are focused on driving organizational success through innovative HR practices and efficient administrative management.
        </p>
        <p>
        Ojochemi's leadership style is characterized by a collaborative approach, with a strong emphasis on communication, continuous improvement, and employee development. They are passionate about fostering a work environment that is inclusive, creative, and conducive to high performance.
        </p>
        `
    },
    {
        id: 3,
        name: "Barrister Chioma Esuabom",
        title: "",
        role: "Legal Officer",
        slug: "chima-esuabom",
        image: "/assets/barr-1.jpg",
        summary: "Founder and CEO with extensive experience...",
        expertise: [
          // Add expertise
        ],
        fullBio: `
        <p>A vastly experienced Startup and Comemrcial Lawyer with more than half-a-decade experience consulting for Startups, SMEs and established Corporations.
        </p>
        <p>Also a Venture Capital Fellow at the Laconia Capital Group, USA, where she horned more her skills in Venture Capital and Capital Support Startups.
        </p>
        `
      },

  ];
  
  // Helper function to get team member by slug
  export function getTeamMemberBySlug(slug) {
    return teamMembers.find(member => member.slug === slug);
  }
  
  // Helper function to get all team member slugs
  export function getAllTeamMemberSlugs() {
    return teamMembers.map(member => member.slug);
  }