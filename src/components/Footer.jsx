import "../CSS/styles.css"
export default function Footer() {
  return (
    <footer className="Footer">
      <a
        href="#"
        title="twitter"
        rel="noopener noreferrer"
        className="footer-link"
      >
        <i class="fa-brands fa-square-twitter footer-icon"></i>
      </a>
      <a
        href="#"
        title="facebook"
        rel="noopener noreferrer"
        className="footer-link"
      >
        <i class="fa-brands fa-square-facebook footer-icon"></i>
      </a>
      <a
        href="#"
        rel="noopener noreferrer"
        title="instagram"
        className="footer-link"
      >
        <i class="fa-brands fa-square-instagram footer-icon"></i>
      </a>
      <a
        href="https://github.com/neginashkan"
        title="github"
        target="_blank"
        rel="noopener noreferrer"
        className="footer-link"
      >
        <i class="fa-brands fa-square-github footer-icon"></i>
      </a>
    </footer>
  );
}
