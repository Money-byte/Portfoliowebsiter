import React from "react";

const Frontend = () => {
  return (
    <div className="skills_content">
      <h3 className="skills_title">Data Science</h3>

      <div className="skills_box">
        <div className="skills_group">
          <div className="skills_data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skills_name">Advanced Excel</h3>
              <span className="skills_level">Advanced</span>
            </div>
          </div>

          <div className="skills_data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skills_name">Python</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>

          <div className="skills_data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skills_name">Supervised Learning</h3>
              <span className="skills_level">Intermediate</span>
            </div>
          </div>
        </div>

        <div className="skills_group">
          <div className="skills_data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skills_name">Unsupervised Learning</h3>
              <span className="skills_level">Beginner</span>
            </div>
          </div>
          <div className="skills_data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skills_name">EC2 Deployment</h3>
              <span className="skills_level">Beginner</span>
            </div>
          </div>

          <div className="skills_data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skills_name">Neural Networks</h3>
              <span className="skills_level">Beginner</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
