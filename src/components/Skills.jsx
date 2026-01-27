const Skills = () => {
  const skills = [
    'Java',
    'C#',
    '.NET',
    'ASP.NET Core',
    'SQL',
    'HTML',
    'CSS',
    'JavaScript',
    'Spring Boot',
    'Spring MVC',
    'Hibernate',
    'jQuery',
    'AngularJS',
    'Bootstrap',
    'Thymeleaf',
    'MySQL',
    'PostgreSQL',
    'SQL Server Management',
    'Git',
    'Azure DevOps',
    'CI/CD Pipelines',
    'Apache Tomcat',
    'JMeter',
    'Postman',
    'JasperReports',
    'RESTFUL APIs',
    'JSON',
    'XML',
    'Shell Script',
    'JUnit',
  ]

  return (
    <section id="skills" className="section skills">
      <h2 className="section__title">Skills</h2>
      <code style={{ color: 'var(--clr-comment)', display: 'block', marginBottom: '1rem' }}>
        // Technologies and tools I work with
      </code>
      <div className="skills__list">
        {skills.map((skill, index) => (
          <span key={index} className="skills__list-item">
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}

export default Skills
