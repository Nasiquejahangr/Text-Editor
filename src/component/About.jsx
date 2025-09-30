import React, { useState } from "react";

function About() {
 const [btntext, setbtntext] = useState("Enable dark mode");

 const btntextchange = () => {
  let btntext  = "Enable light mode";
  setbtntext(btntext);
 }

  const [mystyle, setmystyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const togglestyleforblack = () => {
    if(mystyle.color === "white"){
      setmystyle({
        color:"black",
        backgroundColor:"white"
      })
      setbtntext("Enable dark mode")
    }
    else{
      setmystyle({
        color:"white",
        backgroundColor:"black"
      })
      setbtntext("Enable light mode")
    }
  };


  return (
    <>
      <div className="coontainer my-3  p-3" style={mystyle}>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
              style={mystyle}
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne">
                who I Am
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample">
              <div className="accordion-body" style={mystyle}>
                <strong>"My name is Er Md Nasique</strong>I am passionate about
                technology and currently focusing on Java full-stack development
                with Spring Boot and MySQL. I enjoy building real-world
                projects, exploring SaaS ideas, and continuously learning new
                skills. Apart from coding, I also create educational content to
                help beginners in tech. My goal is to grow as a developer and
                entrepreneur while contributing innovative solutions."
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed "
                style={mystyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo">
                my skills
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample">
              <div className="accordion-body" style={mystyle}>
                <code>
                  "name": "Your Name", "role": "Java Full Stack Developer",
                  "skills": [ "Java", "Spring Boot", "MySQL", "HTML", "CSS",
                  "JavaScript" ], "currentProjects": [ "Doctor Appointment
                  Website", "Multi-language Online Compiler", "SaaS Product
                  Development" ], "interests": [ "Full Stack Development",
                  "Artificial Intelligence", "Entrepreneurship", "Tech Content
                  Creation" ], "goals": "To grow as a developer and
                  entrßepreneur by building innovative projects and sharing
                  knowledge with others.", "hobbies": [ "Coding", "Fitness",
                  "Exploring New Tech Ideas" ]
                </code>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
              style={mystyle}
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree">
                Accordion Item #3
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse "
              data-bs-parent="#accordionExample">
              <div className="accordion-body" style={mystyle}>
                <strong>This is the third item’s accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It’s also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
        </div>
        <button className="btn btn-primary mx-2 my-2" onChange={btntextchange} value="Dark" onClick={togglestyleforblack}>{btntext}</button>
        {/* <button className="btn btn-primary mx-2 my-2" onClick={togglestyleforwhite}>Light</button> */}
      </div>
    </>
  );
}

export default About;
