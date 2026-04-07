// this function fetches one drug record by its id.
async function getDrugById(drugId) {
  const response = await fetch(`http://localhost:4000/drugs/${drugId}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch drug.");
  }

  return response.json();
}

// this edit page fetches one drug on the server and passes it into the form.
import EditDrugForm from "./EditDrugForm";
import styles from "./page.module.css";

export default async function EditDrugPage({ params }) {
  const { drugid } = await params;
  const drug = await getDrugById(drugid);

  return (
    <main className={styles.page}>
      <div className={styles.card}>
        <h1 className={styles.title}>Edit Drug</h1>
        <p className={styles.subtitle}>
          Update the selected drug record below.
        </p>

        <EditDrugForm drug={drug} />
      </div>
    </main>
  );
}