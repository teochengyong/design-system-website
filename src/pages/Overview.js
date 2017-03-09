import React from 'react';

class Overview extends React.Component {

  render() {
    const A = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="74"
        height="63"
        viewBox="0 0 74 63"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <path id="a1" d="M33.0845 6.1583l30.5773 56.755H.869z" />
          <mask id="a2" width="62.7928" height="56.755" x="0" y="0" fill="#fff">
            <use xlinkHref="#a1" />
          </mask>
        </defs>
        <g fill="none" fillRule="evenodd">
          <path fill="#8CD211" d="M43.0845.1583l30.5773 56.755H10.869" />
          <use stroke="#152935" strokeWidth="4" mask="url(#a2)" xlinkHref="#a1" />
        </g>
      </svg>
    );

    const O = (
      <svg xmlns="http://www.w3.org/2000/svg" width="63" height="64" viewBox="0 0 63 64">
        <g fill="none" fillRule="evenodd" transform="translate(1)">
          <ellipse cx="33.6068" cy="28.4331" fill="#EFC100" rx="27.7141" ry="28.1165" />
          <ellipse cx="28.6068" cy="34.4331" stroke="#152935" strokeWidth="2" rx="27.7141" ry="28.1165" />
        </g>
      </svg>
    );

    const Eblue = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="60"
        height="61"
        viewBox="0 0 60 61"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <path id="e1" d="M.719 6.884H53.772v53.8232H.719z" />
          <mask id="e2" width="53.0527" height="53.8231" x="0" y="0" fill="#fff">
            <use xlinkHref="#e1" />
          </mask>
        </defs>
        <g fill="none" fillRule="evenodd">
          <path fill="#5596E6" d="M6.719.884H59.772v53.8232H6.719z" />
          <use stroke="#152935" strokeWidth="4" mask="url(#e2)" xlinkHref="#e1" />
        </g>
      </svg>
    );

    const I = (
      <svg xmlns="http://www.w3.org/2000/svg" width="19" height="62" viewBox="0 0 19 62">
        <g fill="none" fillRule="evenodd">
          <path fill="#E71D32" d="M6.4325 54.642h11.6858V.726H6.4325" />
          <path stroke="#152935" strokeWidth="2" d="M1.4325 60.642h11.6858V6.726H1.4325z" />
        </g>
      </svg>
    );

    const Epurple = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="60"
        height="61"
        viewBox="0 0 60 61"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <path id="e3" d="M.8927 6.4516h53.0527v53.823H.8927z" />
          <mask id="e4" width="53.0527" height="53.8231" x="0" y="0" fill="#fff">
            <use xlinkHref="#e3" />
          </mask>
        </defs>
        <g fill="none" fillRule="evenodd">
          <path fill="#AF6EE8" d="M6.8927.4516h53.0527v53.823H6.8927z" />
          <use stroke="#152935" strokeWidth="4" mask="url(#e4)" xlinkHref="#e3" />
        </g>
      </svg>
    );


    return (
      <section className="overview-page">
        <div className="overview-page__top-banner">
          <div className="overview-page__title">
            <div className="overview-page__title--column">
              <span className="overview-page__title--letter">C</span>
              <span className="overview-page__title--letter">D</span>
              <span className="overview-page__title--letter">S</span>
            </div>
            <div className="overview-page__title--column">
              <span className="overview-page__title--shape">{A}</span>
              <span className="overview-page__title--shape">{Eblue}</span>
              <span className="overview-page__title--letter">Y</span>
            </div>
            <div className="overview-page__title--column">
              <span className="overview-page__title--letter">R</span>
              <span className="overview-page__title--letter">S</span>
              <span className="overview-page__title--letter">S</span>
            </div>
            <div className="overview-page__title--column">
              <span className="overview-page__title--letter">B</span>
              <span className="overview-page__title--shape">{I}</span>
              <span className="overview-page__title--letter">T</span>
            </div>
            <div className="overview-page__title--column">
              <span className="overview-page__title--shape">{O}</span>
              <span className="overview-page__title--letter">G</span>
              <span className="overview-page__title--shape">{Epurple}</span>
            </div>
            <div className="overview-page__title--column">
              <span className="overview-page__title--letter">N</span>
              <span className="overview-page__title--letter">N</span>
              <span className="overview-page__title--letter">M</span>
            </div>
          </div>
        </div>
        <div className="overview-page__content">

        </div>
      </section>
    );
  }
}

export default Overview;