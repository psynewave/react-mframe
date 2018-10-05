# React AFrame

A react component for making adding iframes to your react project as simple as possible. Supports both external iframes and dynamic iframes using react portal. You can add event listeners pass dynamic styles and even have your dynamic content iframes resize automatically.

## Getting Started

IFrame - Load and Mouse Interaction Events

```
<AFrame src="https://share.constitutioncenter.org/amendment-xi"
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
```

IFrame - Responsive Iframe

```
<div style={{ position: "relative", paddingBottom: "56.25%", paddingTop: "35px", height: 0, overflow: "hidden"}}>
    <AFrame src="https://www.youtube.com/embed/pTA0DSfrGZ0"
            responsive
            allowFullScreen
    />
</div>
```

Iframe - Using sandbox options

```
<AFrame src="https://platform.twitter.com/widgets/tweet_button.html"
            position="relative"
            width="61px"
            id="TwitterEmbed"
            className="twitterFrame"
            height="20px"
            allow="geolocation"
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
            allowFullScreen
/>
```

IFrame - Setting Scrolling Margins Etc...

```
<AFrame src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;coord=37.374907, -122.012103&amp;q=740%20Kifer%20Rd%20Sunnyvale%2C%20CA%2094086+(MLSListings)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
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
```

IFrame - Passing Custom Content.

```
<AFrame head={customHead("Passed Title", customStyles)}
        height="200"
        position="relative"
        marginheight="10"
        >
    <div>
    <h1 className="red">Salve Terra Rubrum</h1>
    <h1 className="blue">Salve Terra Caeruleum</h1>
    </div>
</AFrame>
```

IFrame - Autosizing Custom Content - Inject External CSS

```
    <AFrame
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
        <img className="card-img-top" src="http://lorempixel.com/180/100/" alt="MLS Logo" />
        <div className="card-body">
        <h5 className="card-title">Indictis inter se principes Galliae</h5>
        <p className="card-text">In primis rationem esse habendam dicunt, priusquam eorum clandestina consilia efferantur, ut Caesar ab exercitu intercludatur.</p>
        <a href="http://www.mlslistings.com" className="btn btn-primary">In Via</a>
        </div>
    </div>
    </div>
    </AFrame>
```

## Built With

* [React](https://reactjs.org/) - The web framework used
* [React Create App](https://github.com/facebook/create-react-app) - Build Script Generator

## Authors

* **Mark Flavin** - *Initial work* - [Psynewave](https://github.com/psynewave)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Inspired by the [TrendMicro Iframe Component](https://github.com/trendmicro-frontend/react-iframe)
