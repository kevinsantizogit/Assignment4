"use client";

// this form shows the current drug values and will later handle validation.
import { useState } from "react";

export default function EditDrugForm({ drug }) {
  const [drugCompany, setDrugCompany] = useState(drug.drug_company);
  const [drugName, setDrugName] = useState(drug.drug_name);
  const [fdaNdcCode, setFdaNdcCode] = useState(drug.fda_ndc_code);

  return (
    <form>
      <div style={{ marginBottom: "16px" }}>
        <label
          htmlFor="drug_company"
          style={{ display: "block", marginBottom: "6px", fontWeight: "bold" }}
        >
          Drug Company
        </label>
        <input
          id="drug_company"
          name="drug_company"
          type="text"
          value={drugCompany}
          onChange={(e) => setDrugCompany(e.target.value)}
          style={{
            width: "100%",
            padding: "10px 12px",
            border: "1px solid #cbd5e1",
            borderRadius: "8px",
          }}
        />
      </div>

      <div style={{ marginBottom: "16px" }}>
        <label
          htmlFor="drug_name"
          style={{ display: "block", marginBottom: "6px", fontWeight: "bold" }}
        >
          Drug Name
        </label>
        <input
          id="drug_name"
          name="drug_name"
          type="text"
          value={drugName}
          onChange={(e) => setDrugName(e.target.value)}
          style={{
            width: "100%",
            padding: "10px 12px",
            border: "1px solid #cbd5e1",
            borderRadius: "8px",
          }}
        />
      </div>

      <div style={{ marginBottom: "20px" }}>
        <label
          htmlFor="fda_ndc_code"
          style={{ display: "block", marginBottom: "6px", fontWeight: "bold" }}
        >
          FDA NDC Code
        </label>
        <input
          id="fda_ndc_code"
          name="fda_ndc_code"
          type="text"
          value={fdaNdcCode}
          onChange={(e) => setFdaNdcCode(e.target.value)}
          style={{
            width: "100%",
            padding: "10px 12px",
            border: "1px solid #cbd5e1",
            borderRadius: "8px",
          }}
        />
      </div>

      <button
        type="submit"
        style={{
          padding: "10px 18px",
          border: "none",
          borderRadius: "8px",
          background: "#2563eb",
          color: "#ffffff",
          cursor: "pointer",
        }}
      >
        Submit
      </button>
    </form>
  );
}