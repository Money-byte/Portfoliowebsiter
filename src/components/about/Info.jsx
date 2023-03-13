import React from "react";

const Info = () => {
  return (
    <div className="about_info grid">
      <div className="about_box">
        <i class="bx bx-award"></i>
        <h3 className="about_title">Awards</h3>
        <span className="about_subtitle">
          <ol>
            <li>Tarrang 2022 winner</li>
            <li>IOT summer camp winner</li>
            <li>Framjee Scholarship</li>
          </ol>
        </span>
      </div>

      <div className="about_box">
        <i class="bx bx-briefcase-alt"></i>
        <h3 className="about_title">Courses Completed</h3>
        <span className="about_subtitle">
          <ol>
            <li>MERN Stack</li>
            <li>Machine Learning</li>
            <li>C, C++, Java</li>
          </ol>
        </span>
      </div>

      <div className="about_box">
        <i class="bx bxs-network-chart"></i>
        <h3 className="about_title">Internships Completed</h3>
        <span className="about_subtitle">
          🧩3
          <ol>
            <li>Claratic</li>
            <li>College Ranker</li>
            <li>Fessorpro</li>
          </ol>
        </span>
      </div>
    </div>
  );
};

export default Info;
