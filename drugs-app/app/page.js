// This home page gives a simple starting link into the app
import Link from "next/link";

export default function HomePage() {
  return (
    <main style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
      <h1>Assignment 4</h1>
      <p>Open the drugs page to view and edit records.</p>
      <p>
        <Link href="/drugs">Go to Drugs Page</Link>
      </p>
    </main>
  );
}