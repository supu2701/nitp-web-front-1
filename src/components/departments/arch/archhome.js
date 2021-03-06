import React from "react"
import main from "../img/main.png"
import pc from "../img/pc.svg"
import mountain from "../img/mountain.svg"
import map from "../img/map.svg"
import lens from "../img/lens.svg"
import "../css/home.css"

const Archhomepage = () => {
  return (
    <div className="depsection">
      <div className="dmainrow dmainrowmain">
        <div className="col-6">
          <div className="row rowmarl3">
            <h1 data-aos="zoom-in-right">Architecture Department</h1>
          </div>
          <div className="row rowmarl3">
            <h2 data-aos="zoom-in-right">
              “The computer was born to solve problems that did not exist
              before.”
            </h2>
          </div>
          <div className="row rowmarl3">
            <h2 data-aos="zoom-in-right" id="aut">
              — Bill Gates
            </h2>
          </div>
        </div>
        <div className="col-6 imgcolstyle">
          <img
            data-aos="zoom-in"
            src={main}
            className="img-fluid"
            loading="lazy"
          />
        </div>
      </div>
      <div className="dmainrow dmainrow1">
        <div className="depabout">
          <div className="row">
            <h1 data-aos="zoom-in">About</h1>
          </div>
          <div className="row">
            <p data-aos="zoom-in">
              The Department of Architecture is one of the oldest Department of
              the Institute, which was established in the year 1979. The
              Department offers undergraduate program in architecture, Post
              graduate program in Urban and Regional Planning and Doctoral
              program. It is committed to provide quality teaching and research
              opportunities to its student.
              <br />
              <br />
              The department is dedicated to producing intellectuals and
              professionals who are well-versed in the state-of-the-art
              techniques and requisite skills of the profession. The programme
              also inculcates humanist ideas, community values and team spirit
              to motivate and stimulate creativity. To understand these
              objectives, architecture is taught as a serious, exploratory and
              creative attempt that embraces both the humanities and the
              sciences.
            </p>
          </div>
        </div>
      </div>
      <div className="dmainrow dmainrow1">
        <div className="col-6 imgcolstyle">
          <img
            data-aos="zoom-in"
            src={mountain}
            className="img-fluid"
            loading="lazy"
          />
        </div>
        <div className="col-6">
          <div className="row rowmarr3">
            <h1 data-aos="zoom-in-left">Mission</h1>
          </div>
          <div className="row rowmarr3">
            <p data-aos="zoom-in-left">
              To generate intellectual capital by engaging in cutting-edge
              research and to promote academic growth by offering
              state-of-the-art undergraduate, postgraduate and doctoral
              programmes.
              <br />
              <br />
              To develop the department as regional center of knowledge and
              information in the field of Architecture and Planning.
              <br />
              <br />
              To identify, based on an informed perception of local, regional
              national and global needs, areas of specialization upon which the
              department can concentrate.
              <br />
              <br />
              To undertake joint initiatives which offer opportunities for
              long-term interaction with academia, industry, government and
              society.
              <br />
              <br />
              To develop human potential to its fullest extent so that
              intellectually capable and imaginatively gifted leaders can emerge
              in a range of ethical professions.
            </p>
          </div>
        </div>
      </div>
      <div className="dmainrow">
        <div className="col-6">
          <div className="row rowmarl3">
            <h1 data-aos="zoom-in-right">Vision</h1>
          </div>
          <div className="row rowmarl3">
            <p data-aos="zoom-in-right">
              To become a center of excellence to inspire, innovate and
              transform the knowledge to create a sustainable built environment
              for improved quality of life on the earth.
            </p>
          </div>
        </div>
        <div className="col-6 imgcolstyle">
          <img
            data-aos="zoom-in"
            src={lens}
            className="img-fluid"
            loading="lazy"
          />
        </div>
      </div>
      <div className="dmainrow dmainrow1">
        <div className="col-6 imgcolstyle">
          <img
            data-aos="zoom-in"
            src={map}
            className="img-fluid"
            loading="lazy"
          />
        </div>
        <div className="col-6">
          <div className="row rowmarr3">
            <h1 data-aos="zoom-in-left">Contact</h1>
          </div>
          <div className="row rowmarr3">
            <p data-aos="zoom-in-left">
              Department of Architecture,
              <br />
              <br />
              National Institute Of Technology Patna,
              <br />
              Ashok Rajpath, Patna - 800005.
              <br />
              <br />
              Email: head.ar@nitp.ac.in
              <br />
              <br />
              Extn: +91-612-(2371715/2715/2371929/
              <br />
              2370419/2370843/2371930) * 199
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Archhomepage
