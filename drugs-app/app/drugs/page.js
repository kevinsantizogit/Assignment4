// This function fetches all drugs from the json-server API
async function getDrugs() {
  const response = await fetch("http://localhost:4000/drugs", {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch drugs.");
  }

  return response.json();
}

// This page shows all drugs in a server-rendered table
import Link from "next/link";
import styles from "./page.module.css";

export default async function DrugsPage() {
  const drugs = await getDrugs();

  return (
    <main className={styles.page}>
      <div className={styles.headerRow}>
        <div>
          <h1 className={styles.title}>Drugs</h1>
          <p className={styles.subtitle}>
            Full list of available drug records from the REST API.
          </p>
        </div>
      </div>

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Drug Company</th>
              <th>Drug Name</th>
              <th>FDA NDC Code</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {drugs.map((drug) => (
              <tr key={drug.id}>
                <td>{drug.id}</td>
                <td>{drug.drug_company}</td>
                <td>{drug.drug_name}</td>
                <td>{drug.fda_ndc_code}</td>
                <td>
                  <Link href={`/drugs/edit/${drug.id}`}>edit</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}