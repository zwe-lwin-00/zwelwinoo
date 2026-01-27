const Educations = () => {
  const educations = [
    {
      institution: 'Info Myanmar University',
      period: '2019-2021',
      degree: 'Higher National Diploma',
      description: 'Software Computing',
    },
    {
      institution: 'Edinburgh Napier University',
      period: '2021-2022',
      degree: "Bachelor's Degree",
      description: 'BSc Computing',
    },
  ]

  return (
    <section id="educations" className="section educations">
      <h2 className="section__title">Education</h2>
      <code style={{ color: 'var(--clr-comment)', display: 'block', marginBottom: '1rem' }}>
        // Academic background and qualifications
      </code>

      <div className="educations__grid">
        {educations.map((education, index) => (
          <div key={index} className="education">
            <div className="education__header">
              <h3 className="education__institution">{education.institution}</h3>
              <div className="education__meta">
                <span className="education__period">{education.period}</span>
                <span className="education__degree">{education.degree}</span>
              </div>
            </div>
            <div className="education__content">
              <p className="education__description">{education.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Educations
