import React from 'react';
import { customHead, triggeredEvent} from "./constants";
import MFrame from "./lib";

const customStyles = `
    body {
      background-color: rebeccaPurple;
    }
    .red {
        color: red;
    }
    .blue {
        color: blue;
    }
`;

class App extends React.Component {
  render() {
    return (
      <div style={{ padding: "20px" }}>

    <h2>IFrame - Load and Mouse Interaction Events</h2>
    <MFrame src="https://share.constitutioncenter.org/amendment-xi"
            width="560"
            id="ConstitutionEmbed"
            className="iFrameConstitution"
            height="360"
            onLoad={() => { triggeredEvent("onload", "was triggered")}}
            onMouseOver={() => {  triggeredEvent("onmouseover", "has occurred") }}
            onMouseOut={() => { triggeredEvent("onmouseout", "has occurred") }}
            border="10px solid blue"
            allowFullScreen
    />

    <h2>IFrame - Responsive Iframe</h2>
    <div style={{ position: "relative", paddingBottom: "56.25%", paddingTop: "35px", height: 0, overflow: "hidden"}}>
      <MFrame src="https://www.youtube.com/embed/pTA0DSfrGZ0"
              responsive
              allowFullScreen
      />
    </div>

    <h2>Iframe - Using sandbox options</h2>

    <MFrame src="https://platform.twitter.com/widgets/tweet_button.html"
              position="relative"
              width="61px"
              id="TwitterEmbed"
              className="twitterFrame"
              height="20px"
              allow="geolocation"
              sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
              allowFullScreen
    />

    <h2>IFrame - Setting Scrolling Margins Etc... </h2>

    <MFrame src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;coord=37.374907, -122.012103&amp;q=740%20Kifer%20Rd%20Sunnyvale%2C%20CA%2094086+(MLSListings)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
            position="relative"
            width="100%"
            id="GoogleMapEmbed"
            height="600"
            allow="geolocation"
            marginheight="10"
            marginwidth="0"
            scrolling="no"
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
            allowFullScreen
    />

    <h2>IFrame - Passing Custom Content. </h2>

    <MFrame head={customHead("Passed Title", customStyles)}
            height="200"
            position="relative"
            marginheight="10"
            >
      <div>
        <h1 className="red">Salve Terra Rubrum</h1>
        <h1 className="blue">Salve Terra Caeruleum</h1>
      </div>
    </MFrame>

    <h2>IFrame - Autosizing Custom Content - Inject External CSS </h2>

      <MFrame
        head={customHead("Passed Title", undefined, ["https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css", "https://use.fontawesome.com/releases/v5.3.1/css/all.css"])}
        width="50%"
        autoResizeContent
        >
        <div>
        <div className="alert alert-success" role="alert">
          <h4 className="alert-heading">Hac impulsi occasione</h4>
        <p><i className="fas fa-allergies"></i> Quieta Gallia Caesar, ut constituerat, in Italiam ad conventus agendos proficiscitur. Ibi cognoscit de Clodii caede [de] senatusque consulto certior factus, ut omnes iuniores Italiae coniurarent, delectum tota provincia habere instituit.</p>
          <hr />
          <p className="mb-0">Eae res in Galliam Transalpinam celeriter perferuntur. Addunt ipsi et adfingunt rumoribus Galli, quod res poscere videbatur, retineri urbano motu Caesarem neque in tantis dissensionibus ad exercitum venire posse.</p>
        </div>
        <div className="card" style={{width: "18rem"}}>
          <img className="card-img-top" src="https://picsum.photos/180/100/" alt="MLS Logo" />
          <div className="card-body">
            <h5 className="card-title">Indictis inter se principes Galliae</h5>
            <p className="card-text">In primis rationem esse habendam dicunt, priusquam eorum clandestina consilia efferantur, ut Caesar ab exercitu intercludatur.</p>
            <a href="http://www.mlslistings.com" className="btn btn-primary">In Via</a>
          </div>
        </div>
        </div>
      </MFrame>



  </div>
    );
  }
}

export default App;
