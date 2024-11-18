import Sidebar from "../components/SideBar";

function About() {
  return (
    <div className="flex">
      <div className="w-full  mx-auto p-24">
        <h1 className="text-5xl mb-20 font-light">Project Details</h1>
        <div>
          <div>
            <h1>Definations</h1>
            <span className="font-semibold">Impact</span> is the potential
            effect or significance of a trend. <br />
            <span className="font-semibold">Likelihood</span> refers to the
            probability of an event occurring. <br />
            <span className="font-semibold">Intensity</span> measures the
            strength or magnitude of the effect. <br />
            <span className="font-semibold">Relevance</span> indicates how
            pertinent the insight is to the current context. <br />
            <span className="font-semibold">PESTLE</span> categorizes the
            influencing factors (Political, Economic, Social, Technological,
            Legal, Environmental). <br />
            <span className="font-semibold">Sector</span> identifies the
            industry or field associated with the insight.
          </div>
        </div>
        <div className="mt-5">
          <p className="text-xl">
            <span className="text-slate-500">Stack :</span> MERN
          </p>
          <p className="text-xl">
            <span className="text-slate-500">Styling :</span> Tailwindcss{" "}
          </p>
          <p className="text-xl">
            <span className="text-slate-500">Data Visulization :</span> ChartJS,
            Google Charts for Geomap{" "}
          </p>
          <p className="text-xl">
            <span className="text-slate-500">Frontend :</span> cd
            frontend/my-app __ npm run dev
          </p>
          <p className="text-xl">
            <span className="text-slate-500">Backend :</span> cd backend __ node
            index
          </p>
          <a
            href="https://github.com/adrishpinto/DataVisualization"
            target="_blank"
          >
            GitHub Link
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
