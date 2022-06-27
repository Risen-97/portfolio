import { skills } from "../../data";
import { TbBrandNextjs } from "react-icons/tb";

const Skills = () => {
  return (
    <section className="py-20 dark:text-white text-xs" id="skills">
      <h2 className="title">Skills</h2>

      <div className="flex flex-col sm:flex-row  items-center gap-8 lg:gap-12 justify-center">
        <div className="skill-item">
          {skills.html} <span>Html</span>
        </div>
        <div className="skill-parent">
          <div className="skill-item">
            {skills.css} <span>Css</span>
          </div>
          <div className="skill-item">
            {skills.javascript} <span>Javascript</span>
          </div>
          <div className="skill-item">
            {skills.typescript} <span>Typescript</span>
          </div>
        </div>
        <div className="skill-parent">
          <div className="skill-item">
            {skills.firebase} <span>Firebase</span>
          </div>
          <div className="skill-item">
            {skills.react} <span>React</span>
          </div>
          <div className="skill-item">
            <TbBrandNextjs className="w-10 h-10" />
            <span>Next.js</span>
          </div>
          <div className="skill-item">
            {skills.redux} <span>Redux</span>
          </div>
        </div>
        <div className="skill-parent">
          <div className="skill-item">
            {skills.tailwind} <span>Tailwind</span>
          </div>
          <div className="skill-item">
            {skills.bootstrap} <span>Bootstrap</span>
          </div>
          <div className="skill-item">
            {skills.sass} <span>Sass</span>
          </div>
        </div>
        <div className="skill-item">
          {skills.git}
          <span>Git</span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
