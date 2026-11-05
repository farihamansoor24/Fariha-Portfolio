const Skills = () => {
  return (
    <section id="skills" className="px-6 lg:px-16 py-20 bg-[#0c0c0c] border-t border-b border-bronze-subtle scroll-section">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="scroll-anim">
          <span className="text-xs font-semibold tracking-widest text-[#fcf6ba] uppercase">MY EXPERTISE</span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text mt-2" style={{ backgroundImage: 'linear-gradient(135deg, #ffe066 0%, #ffffff 40%, #d4af37 70%, #996515 100%)' }}>Skills & Technologies</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div id="skills-container" className="lg:col-span-5 space-y-5 bg-[#0a0a0a] p-8 rounded-2xl border border-bronze-subtle shadow-xl">
            {[
              { name: "JavaScript / TypeScript", width: "95%" },
              { name: "React / Next.js", width: "92%" },
              { name: "Node.js / Express", width: "90%" },
              { name: "MongoDB / SQL", width: "85%" },
              { name: "HTML / CSS / Tailwind", width: "95%" },
              { name: "AWS / Cloud Services", width: "80%" }
            ].map((skill, idx) => (
              <div key={idx}>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span className="text-gray-200">{skill.name}</span>
                  <span className="text-[#ffd700]">{skill.width}</span>
                </div>
                <div className="w-full h-2 bg-[#161616] rounded-full overflow-hidden">
                  <div className="h-full rounded-full skill-bar" style={{ width: '0%', background: 'linear-gradient(135deg, #bf953f 0%, #fcf6ba 25%, #b38728 50%, #fbf5b7 75%, #aa771c 100%)' }} data-width={skill.width}></div>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-7 grid grid-cols-5 gap-4 stagger-grid">
            {[
              { icon: 'devicon-react-original text-cyan-400', name: 'React' },
              { icon: 'devicon-nextjs-plain text-white', name: 'Next.js' },
              { icon: 'devicon-nodejs-plain text-green-500', name: 'Node.js' },
              { icon: 'devicon-typescript-plain text-blue-500', name: 'TypeScript' },
              { icon: 'devicon-javascript-plain text-yellow-400', name: 'JavaScript' },
              { icon: 'devicon-tailwindcss-original text-teal-400', name: 'Tailwind' },
              { icon: 'devicon-mongodb-plain text-emerald-500', name: 'MongoDB' },
              { icon: 'devicon-postgresql-plain text-blue-400', name: 'PostgreSQL' },
              { icon: 'devicon-git-plain text-orange-500', name: 'Git' },
              { icon: 'devicon-docker-plain text-blue-500', name: 'Docker' },
              { icon: 'devicon-amazonwebservices-plain-wordmark text-amber-500', name: 'AWS' },
              { icon: 'devicon-firebase-plain text-yellow-500', name: 'Firebase' },
              { icon: 'devicon-graphql-plain text-pink-500', name: 'GraphQL' },
              { icon: 'devicon-redux-original text-purple-400', name: 'Redux' },
              { icon: 'devicon-jest-plain text-rose-500', name: 'Jest' }
            ].map((skill, index) => (
              <div key={index} className="bg-[#0a0a0a] p-4 rounded-xl border border-bronze-subtle flex flex-col items-center justify-center space-y-2 hover:border-[#ffd700] transition stagger-card shadow">
                <i className={`${skill.icon} text-2xl`}></i>
                <span className="text-[11px] font-semibold text-gray-300">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills