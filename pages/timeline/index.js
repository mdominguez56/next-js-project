import Link from "next/link";

export default function Timeline() {
  return (
    <div className="container">
      <h1>I´m a timeline</h1>
      <p>Who are you?</p>
      <nav className="nav">
        <Link href="/">
          <a>Go home!</a>
        </Link>
      </nav>
      <style jsx>{`
        .container {
          margin: 50px;
        }
        p {
          color: red;
        }
        a {
          color: blue;
        }
      `}</style>
    </div>
  );
}
