const Experiences = () => {
  const experiences = [
    {
      company: "Partner Associates Int'l Co., Ltd.",
      url: 'https://partnerassociates.com/home',
      period: '2025 - Present',
      role: 'Developer',
      responsibilities: [
        'Designed, developed, and managed software programs to ensure quality and efficiency.',
        'Worked with teams (developers, designers, analysts) to build and improve system and database designs.',
        'Ensured software was practical and met operational needs, integrating different devices as needed.',
        'Stayed updated on the latest tools and programming methods to improve software.',
        'Explained complex procedures clearly and helped colleagues by sharing knowledge.',
        'Identified areas to improve existing programs and made changes to enhance performance.',
        'Assisted deployment engineers with advice and support.',
        'Provided training to junior developers and support engineers.',
        'Paid close attention to detail and focused on analyzing data to improve systems.',
      ],
    },
    {
      company: 'NTT DATA MYANMAR',
      url: 'https://www.infonttdatamyanmar.com.mm/',
      period: '2024 - 2025',
      role: 'Junior System Engineer',
      responsibilities: [
        'Developed and maintained system specifications (ED/ID/MUT, IT/ST/RT) for financial institution projects, ensuring alignment with client requirements.',
        'Performed thorough reviews of system specifications and testing plans to ensure accuracy and compliance.',
        'Identified and resolved bugs/errors, conducting root-cause analysis and implementing solutions to maintain system stability.',
        'Managed project timelines effectively, ensuring tasks were completed on schedule while meeting quality standards.',
        'Collaborated with team members to share knowledge, troubleshoot issues, and drive problem-solving efforts.',
        'Provided regular progress updates to managers and clients, ensuring transparent communication.',
        'Adhered to ISO 27001:2022 security standards, ensuring compliance and maintaining data security throughout development processes.',
        'Created and maintained comprehensive documentation, including system specifications, test plans, and bug/error reports.',
      ],
    },
    {
      company: 'Myanmar Information Technology (MIT)',
      url: 'https://www.mit.com.mm/',
      period: '2023 - 2024',
      role: 'Developer',
      responsibilities: [
        'Designed, developed, and maintained Core Banking APIs and Digital Financial Solutions using Java and Spring Boot, adhering to RESTful API design principles.',
        'Conducted rigorous API testing using Postman and JMeter, ensuring functionality, reliability, and performance.',
        'Integrated APIs with third-party services and databases, ensuring seamless communication and data consistency.',
        'Implemented security measures such as authentication and authorization to ensure API integrity and data confidentiality.',
        'Provided on-site deployment support, troubleshooting issues, and facilitating server maintenance.',
        'Spearheaded the development of the Skynet Web Portal, implementing data filtering and report generation to enhance decision-making processes.',
      ],
    },
    {
      company: 'ACE Data System',
      url: 'https://acedatasystems.com/',
      period: '2022 - 2023',
      role: 'On Job Training',
      responsibilities: [
        'Contributed to the development and maintenance of business applications using Java, Spring Framework, and RDBMS.',
        'Developed a Job Recruitment and Offering Management System using JSP, Thymeleaf, and JavaScript.',
        'Participated in on-site support for server deployments, ensuring smooth system integration and troubleshooting issues as needed.',
      ],
    },
    {
      company: 'Mo Money Payment Myanmar',
      url: 'https://www.mo.com.mm/momoney/',
      period: '2022 - 2022',
      role: 'Internship',
      responsibilities: [
        'Developed and managed Java applications, gaining hands-on experience with Core Java and Spring Framework.',
        'Conducted database management and system integration for digital payment solutions.',
      ],
    },
  ]

  return (
    <section id="experiences" className="section experiences">
      <h2 className="section__title">Experience</h2>
      <code style={{ color: 'var(--clr-comment)', display: 'block', marginBottom: '1rem' }}>
        // Professional journey and career milestones
      </code>

      <div className="experiences__grid">
        {experiences.map((experience, index) => (
          <div key={index} className="experience">
            <div className="experience__header">
              <a
                href={experience.url}
                target="_blank"
                rel="noopener noreferrer"
                className="experience__company"
              >
                <h3>{experience.company}</h3>
              </a>
              <div className="experience__meta">
                <span className="experience__period">{experience.period}</span>
                <span className="experience__role">{experience.role}</span>
              </div>
            </div>
            <div className="experience__content">
              <ul className="experience__stack">
                {experience.responsibilities.map((responsibility, idx) => (
                  <li key={idx} className="experience__stack-item">
                    {responsibility}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experiences
