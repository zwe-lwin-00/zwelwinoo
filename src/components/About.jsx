const About = () => {
  return (
    <section id="about" className="section about">
      <h1>
        <span className="about__name">const</span> developer = <span className="about__name">'Zwe Lwin Oo'</span>;
      </h1>
      <h2 className="about__role">Full-Stack Developer</h2>
      
      <div className="about__desc">
        <code style={{ color: 'var(--clr-comment)', display: 'block', marginBottom: '1rem' }}>
          // Passionate developer building scalable applications
        </code>
        <p>
          I am a dedicated and skilled Senior Developer with extensive experience
          in building Java-based business applications, including Core Banking
          APIs, Digital Financial Solutions, and Border Management Information
          Systems. I currently work as a Full Stack Developer using Angular and
          .NET C#, with strong expertise in web technologies and multiple
          programming languages.
        </p>
        <code style={{ color: 'var(--clr-comment)', display: 'block', marginTop: '1rem' }}>
          // Always learning, always building
        </code>
      </div>

      <div className="about__contact">
        <a href="/resume/zwelwinoo.pdf" download className="btn btn--outline">
          <i className="fas fa-download"></i>
          Download Resume
        </a>

        <a
          href="https://github.com/zwe-lwin-00"
          aria-label="github"
          className="link--icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github" aria-hidden="true"></i>
        </a>

        <a
          href="https://www.linkedin.com/in/zwe-lwin-oo"
          aria-label="linkedin"
          className="link--icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin" aria-hidden="true"></i>
        </a>
      </div>
    </section>
  )
}

export default About
