import { ModeToggle } from "../mode-toggle";

export default function Header() {

  return (
    <header className="fixed top-3 right-3 z-50">
      <ModeToggle />
    </header>
  );
}