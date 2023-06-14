import React, { useState } from "react";
import "./Form.css"; // Import custom CSS file for styling
import TagsInput from "react-tagsinput";

const ResumeForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [education, setEducation] = useState([
    { institute: "", year: "", degree: "" },
  ]);
  const [experience, setExperience] = useState([
    { company: "", year: "", designation: "" },
  ]);
  const [skills, setSkills] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, ""); // Remove non-digit characters
    if (value.length <= 10) {
      // Limit to 10 digits
      setPhone(value);
    }
  };

  const handleEducationChange = (index, field, value) => {
    const updatedEducation = [...education];
    updatedEducation[index][field] = value;
    setEducation(updatedEducation);
  };

  const handleAddEducation = () => {
    setEducation([...education, { institute: "", year: "", degree: "" }]);
  };

  const handleExperienceChange = (index, field, value) => {
    const updatedExperience = [...experience];
    updatedExperience[index][field] = value;
    setExperience(updatedExperience);
  };

  const handleAddExperience = () => {
    setExperience([...experience, { company: "", year: "", designation: "" }]);
  };

  const handleSkillsChange = (skills) => {
    setSkills(skills);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Tab") {
      e.preventDefault();
      const inputValue = e.target.value;
      const caretPosition = e.target.selectionStart;
      const newValue =
        inputValue.substring(0, caretPosition) +
        " " +
        inputValue.substring(caretPosition);
      e.target.value = newValue;
      handleSkillsChange(e.target.value.split(","));
    }
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address:</label>
              <textarea
                className="form-control form-control-textarea"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone:</label>
              <input
                type="tel"
                className="form-control"
                id="phone"
                value={phone}
                onChange={handlePhoneChange}
                required
                pattern="[0-9]{10}"
                maxLength={10}
              />
            </div>
            <div className="form-group">
              <label htmlFor="education">Education:</label>
              {education.map((edu, index) => (
                <div key={index}>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Institute"
                    value={edu.institute}
                    onChange={(e) =>
                      handleEducationChange(index, "institute", e.target.value)
                    }
                    required
                  />
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Year"
                    value={edu.year}
                    onChange={(e) =>
                      handleEducationChange(index, "year", e.target.value)
                    }
                    required
                  />
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Degree"
                    value={edu.degree}
                    onChange={(e) =>
                      handleEducationChange(index, "degree", e.target.value)
                    }
                    required
                  />
                </div>
              ))}
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleAddEducation}
              >
                Add Education
              </button>
            </div>
            <div className="form-group">
              <label htmlFor="experience">Experience:</label>
              {experience.map((exp, index) => (
                <div key={index}>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Company"
                    value={exp.company}
                    onChange={(e) =>
                      handleExperienceChange(index, "company", e.target.value)
                    }
                    required
                  />
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Year"
                    value={exp.year}
                    onChange={(e) =>
                      handleExperienceChange(index, "year", e.target.value)
                    }
                    required
                  />
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Designation"
                    value={exp.designation}
                    onChange={(e) =>
                      handleExperienceChange(
                        index,
                        "designation",
                        e.target.value
                      )
                    }
                    required
                  />
                </div>
              ))}
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleAddExperience}
              >
                Add Experience
              </button>
            </div>
            <div className="form-group">
              <label htmlFor="skills">Skills:</label>
              <TagsInput
                id="skills"
                value={skills}
                onChange={handleSkillsChange}
                inputProps={{
                  placeholder: "Add skills",
                  className: "form-control",
                  onKeyDown: handleKeyDown,
                }}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResumeForm;
