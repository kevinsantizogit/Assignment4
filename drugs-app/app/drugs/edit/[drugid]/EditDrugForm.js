"use client";

// this form shows the current drug values and will later handle validation.
import { useState } from "react";

export default function EditDrugForm({ drug }) {
  const [drugCompany, setDrugCompany] = useState(drug.drug_company);
  const [drugName, setDrugName] = useState(drug.drug_name);
  const [fdaNdcCode, setFdaNdcCode] = useState(drug.fda_ndc_code);
  const [errors, setErrors] = useState({});

function validateForm() {
  const newErrors = {};
  if (drugName.trim().length <= 3) {
    newErrors.drug_name = "Drug name must be longer than 3 characters.";
  }
  if (drugCompany.trim().length <= 4) {
    newErrors.drug_company = "Drug company must be longer than 4 characters.";
  }
  if (!/^[0-9-]+$/.test(fdaNdcCode.trim())) {
    newErrors.fda_ndc_code = "FDA NDC code can only contain digits and dashes.";
  }
  return newErrors;
}

function handleSubmit(event) {
  const validationErrors = validateForm();
  if (Object.keys(validationErrors).length > 0) {
    event.preventDefault();
    setErrors(validationErrors);
    return;
  }
  setErrors({});
}

  return (
    <form onSubmit={handleSubmit}>
      <input type="hidden" name="id" value={drug.id} />
      
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
        {errors.drug_company && (
          <p style={{ color: "#dc2626", marginTop: "6px" }}>
            {errors.drug_company}
          </p>
        )}        
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
        {errors.drug_name && (
          <p style={{ color: "#dc2626", marginTop: "6px" }}>
            {errors.drug_name}
          </p>
        )}
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
        {errors.fda_ndc_code && (
          <p style={{ color: "#dc2626", marginTop: "6px" }}>
            {errors.fda_ndc_code}
          </p>
        )}
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