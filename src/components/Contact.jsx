const Contact = () => {
  return (
    <section id="contact" className="section contact">
      <h2 className="section__title">Contact</h2>
      <code style={{ color: 'var(--clr-comment)', display: 'block', marginBottom: '1rem' }}>
        // Let's connect and build something amazing together
      </code>
      <p style={{ marginBottom: '1.5rem', color: 'var(--clr-fg)' }}>
        I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', alignItems: 'flex-start' }}>
        <a href="mailto:zwelwinoodevtech@gmail.com" className="btn btn--outline">
          <i className="fas fa-envelope"></i>
          zwelwinoodevtech@gmail.com
        </a>
        <a className="btn btn--outline" href="tel:+959787238201">
          <i className="fas fa-phone"></i>
          +95 9787238201
        </a>
        <a
          className="btn btn--outline"
          href="https://github.com/zwe-lwin-00"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
          GitHub Profile
        </a>
      </div>
    </section>
  )
}

export default Contact
