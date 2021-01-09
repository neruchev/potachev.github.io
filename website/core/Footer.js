const React = require("react");

const Footer = ({ config }) => (
  <footer className="nav-footer" id="footer">
    <section className="copyright">{config.copyright}</section>
  </footer>
);

module.exports = Footer;
