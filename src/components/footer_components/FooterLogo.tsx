import { NavLink } from "react-router-dom";

const FooterLogo = () => {
  return (
    <div className="space-y-4 hidden md:block">
      <div className="flex items-center space-x-2 ">
        <img src="/img/logo/logomark_footer.png" alt="logo" />
        <span>Ecommerce</span>
      </div>
      <div>
        <p>DevCut is a YouTube channel for</p>
        <p>practical project-based learning.</p>
      </div>
      <div className="flex gap-1">
        <NavLink to="https://github.com/" target="_blank">
          <img src="/img/social_icons/github.png" alt="github" />
        </NavLink>
        <NavLink to="https://www.instagram.com/" target="_blank">
          {" "}
          <img src="/img/social_icons/instagram.png" alt="instagram" />
        </NavLink>
        <NavLink to="https://www.youtube.com/" target="_blank">
          {" "}
          <img src="/img/social_icons/youtube.png" alt="youtube" />
        </NavLink>
      </div>
    </div>
  );
};

export default FooterLogo;
