const LanguageItem = ({ language, level }) => (
  <div className="skill_item">
    <span className="row_skill">
      <i className="bx bxs-checkbox-checked"></i>
    </span>
    <span className="skill-name">{language}:</span>
    <span>{level}</span>
  </div>
);

export default LanguageItem;