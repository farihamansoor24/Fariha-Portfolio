const Skills = () => {
  return (
     <section id="skills" className="px-6 lg:px-16 py-20 bg-[#111111]/60 border-t border-b border-bronze-subtle scroll-section">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="scroll-anim">
            <span className="text-xs font-semibold tracking-widest text-[#c5a880] uppercase">MY EXPERTISE</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#f3e3c3] mt-2">Skills & Technologies</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div id="skills-container" className="lg:col-span-5 space-y-5">
              <div>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span className="text-gray-200">JavaScript / TypeScript</span>
                  <span className="text-[#c5a880]">95%</span>
                </div>
                <div className="w-full h-1.5 bg-[#1f1f1f] rounded-full overflow-hidden">
                  <div className="h-full bg-[#c5a880] rounded-full skill-bar" style={{ width: '0%' }} data-width="95%"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span className="text-gray-200">React / Next.js</span>
                  <span className="text-[#c5a880]">92%</span>
                </div>
                <div className="w-full h-1.5 bg-[#1f1f1f] rounded-full overflow-hidden">
                  <div className="h-full bg-[#c5a880] rounded-full skill-bar" style={{ width: '0%' }} data-width="92%"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span className="text-gray-200">Node.js / Express</span>
                  <span className="text-[#c5a880]">90%</span>
                </div>
                <div className="w-full h-1.5 bg-[#1f1f1f] rounded-full overflow-hidden">
                  <div className="h-full bg-[#c5a880] rounded-full skill-bar" style={{ width: '0%' }} data-width="90%"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span className="text-gray-200">MongoDB / SQL</span>
                  <span className="text-[#c5a880]">85%</span>
                </div>
                <div className="w-full h-1.5 bg-[#1f1f1f] rounded-full overflow-hidden">
                  <div className="h-full bg-[#c5a880] rounded-full skill-bar" style={{ width: '0%' }} data-width="85%"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span className="text-gray-200">HTML / CSS / Tailwind</span>
                  <span className="text-[#c5a880]">95%</span>
                </div>
                <div className="w-full h-1.5 bg-[#1f1f1f] rounded-full overflow-hidden">
                  <div className="h-full bg-[#c5a880] rounded-full skill-bar" style={{ width: '0%' }} data-width="95%"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs font-semibold mb-1">
                  <span className="text-gray-200">AWS / Cloud Services</span>
                  <span className="text-[#c5a880]">80%</span>
                </div>
                <div className="w-full h-1.5 bg-[#1f1f1f] rounded-full overflow-hidden">
                  <div className="h-full bg-[#c5a880] rounded-full skill-bar" style={{ width: '0%' }} data-width="80%"></div>
                </div>
              </div>
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
                <div key={index} className="bg-[#141414] p-4 rounded-xl border border-bronze-subtle flex flex-col items-center justify-center space-y-2 hover:border-[#c5a880] transition stagger-card">
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