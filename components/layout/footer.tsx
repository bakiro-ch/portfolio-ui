import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const socialLinks = [
  {
    href: "https://github.com/your-username",
    label: "GitHub",
    icon: FaGithub,
  },
  {
    href: "https://linkedin.com/in/your-username",
    label: "LinkedIn",
    icon: FaLinkedin ,
  },
  {
    href: "mailto:baki@example.com",
    label: "Email",
    icon: MdEmail,
  },
];

export function Footer() {
  return (
    <footer className="border-t py-6 mt-10 px-10 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built by <Link href="/" className="font-medium underline underline-offset-4">Bakiro</Link>.
          <br className="hidden sm:inline" />
          {" "}The source code is available on{" "}
          <Link
            href="https://github.com/bakiro-ch/portfolio-api"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            GitHub
          </Link>
          .
        </p>

        <div className="flex items-center gap-4">
          {socialLinks.map((social) => (
            <Link
              key={social.href}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <social.icon className="h-5 w-5" />
              <span className="sr-only">{social.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}