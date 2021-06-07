const Jumbotron = (props) => {
    return (
      <div className="container">
        <div className="row">
          <div className="jumbotron col-12 bg-light py-5">
            <h1 className="display-4">{props.title}</h1>
            <p className="lead">{props.coments}</p>
            <a
              className="btn btn-primary btn-lg"
              href={props.buttonHref}
              role="button"
            >
              {props.buttonLabel}
            </a>
          </div>
        </div>
      </div>
    );
  };
  export default Jumbotron;