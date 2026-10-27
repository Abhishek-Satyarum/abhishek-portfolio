import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Journey", href: "/journey" },
  { label: "Moments", href: "/moments" },
];

export default function Navbar() {
  return (
    <header>
      <nav>
        <Link href="/">Abhishek Satyarum</Link>

        <div>
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}