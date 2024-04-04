import React from 'react'
import { Backend_skill, Frontend_skill, Full_stack} from '@/constants'
import SkillDataProvider from '@/components/skilldata-provider'
import Tooltip from '@/components/tooltip'

export default function Skills() {
    return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20"
      style={{ transform: "scale(0.9" }}
    >
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        <Tooltip items={Frontend_skill}/>
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        <Tooltip items={Backend_skill}/>
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        <Tooltip items={Full_stack}/>
      </div>
      </section>
    )
}
