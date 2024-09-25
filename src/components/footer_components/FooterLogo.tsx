const FooterLogo = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <img src="/img/logo/logomark_footer.png" alt="logo" />
        <span>Ecommerce</span>
      </div>
      <div>
        <p>DevCut is a YouTube channel for</p>
        <p>practical project-based learning.</p>
      </div>
      <div className="flex gap-1">
        <img src="/img/social icons/Github.png" alt="github" />
        <img src="/img/social icons/Instagram.png" alt="instagram" />
        <img src="/img/social icons/Youtube.png" alt="youtube" />
      </div>
    </div>
  );
};

export default FooterLogo;
