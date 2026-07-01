import type { IconType } from "react-icons";
import { FaFacebook, FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import type { SocialLink } from "@/types";

export const socialIcons: Record<SocialLink["icon"], IconType> = {
  github: FaGithub,
  linkedin: FaLinkedin,
  twitter: FaXTwitter,
  facebook: FaFacebook,
};
