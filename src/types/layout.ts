import { Icon as TablerIcon } from "tabler-icons-react";

export interface NavbarLinkProps {
  icon: TablerIcon;
  label: string;
  link: string;
  active?: boolean;
  onClick?(): void;
}

export interface HeaderSearchProps {
  links: { link: string; label: string; links: { link: string; label: string }[] }[];
}

export interface FooterLinksProps {
  data: {
    title: string;
    links: { label: string; link: string }[];
  }[];
}
