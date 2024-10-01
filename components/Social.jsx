import Link from "next/link";

import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/dav24github" },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/david-escalante/",
  },
  {
    icon: <FaFacebook />,
    path: "https://www.facebook.com/david.escalantesossa",
  },
  { icon: <FaXTwitter />, path: "https://x.com/DavidESossa" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            target="_blank"
            key={index}
            href={item.path}
            className={iconStyles}
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
