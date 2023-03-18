import "../CSS/styles.css";
import profile_photo from "../images/negin.jpg"
export default function Header() {
  return (
    <header>
      <div className="Info">
        <img
          src={profile_photo}
          alt="profile photo"
          title="my photo"
          className="profile-photo"
        />
        <h1 className="title">Negin Ashkan</h1>
        <div className="sub-title-1">Frontend Developer</div>
        <div className="sub-title-2">neginashkan.website</div>
        <div className="buttons">
          <a
            href="mailto:neginashkann@gmail.com"
            title="email"
            rel="noopener noreferrer"
            className="email-button header-button"
          >
            <i class="fa-solid fa-envelope button-icon"></i> Email
          </a>
          <a
            href="https://www.linkedin.com/in/negin-ashkan-b84302256/"
            title="linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedIn-button header-button"
          >
            <i class="fa-brands fa-linkedin button-icon"></i>LinkedIn
          </a>
        </div>
      </div>
    </header>
  );
}
