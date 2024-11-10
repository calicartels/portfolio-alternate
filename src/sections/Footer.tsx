import Link from "next/link";

function Footer() {
  return (
    <footer>
      <Link
        href="https://github.com/koolkishan/chat-app-react-nodejs"
        target="_blank"
        className="footer-link"
      >
        <span className="footer-info">Designed and Built by Vishnu.</span>
      </Link>
    </footer>
  );
}

export default Footer;