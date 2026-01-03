"use client";
import React, { useState } from "react";
import "../styles/bookDemo.css";

const grades = ["KG","1","2","3","4","5","6","7","8","9","10","11","12"];

const programs = [
  "Oratrics Math Explorers",
  "Personality Enrichment",
  "Public Speaking",
  "Creative Writing",
  "Confidence Building Social Skill",
  "Leadership Program"
];

const countries = [
  { code: "+91", name: "India" },
  { code: "+1", name: "USA, Canada" },
  { code: "+44", name: "United Kingdom" },
  { code: "+61", name: "Australia" },
  { code: "+33", name: "France" },
  { code: "+49", name: "Germany" },
  { code: "+971", name: "UAE" },
  { code: "+65", name: "Singapore" }
];

export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    parentName: "",
    childName: "",
    email: "",
    phone: "",
    countryCode: "+91",
    grade: "",
    program: ""
  });

  const isStepOneValid =
    form.parentName &&
    form.childName &&
    form.email &&
    form.phone;

  return (
    <div className="form-wrapper">
      <h2>Book Your Free Demo Class</h2>

      {/* STEP 1 */}
      {step === 1 && (
        <div className="form-step">
          <div className="form-group">
            <label>Parent Name</label>
            <input
              type="text"
              value={form.parentName}
              onChange={(e) => setForm({ ...form, parentName: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label>Child Name</label>
            <input
              type="text"
              value={form.childName}
              onChange={(e) => setForm({ ...form, childName: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>

          <div className="form-group phone-group">
            <label>Phone Number</label>
            <div className="phone-row">
              <select
                value={form.countryCode}
                onChange={(e) =>
                  setForm({ ...form, countryCode: e.target.value })
                }
              >
                {countries.map((c) => (
                  <option key={c.code} value={c.code}>
                    {c.code} ({c.name})
                  </option>
                ))}
              </select>

              <input
                type="tel"
                placeholder="Enter phone number"
                value={form.phone}
                onChange={(e) =>
                  setForm({ ...form, phone: e.target.value })
                }
              />
            </div>
          </div>

          <button
            className="next-btn"
            disabled={!isStepOneValid}
            onClick={() => setStep(2)}
          >
            Next
          </button>
        </div>
      )}

      {/* STEP 2 */}
      {step === 2 && (
        <div className="form-step">
          <label className="section-title">Child's Grade</label>

          <div className="grade-grid">
            {grades.map((g) => (
              <div
                key={g}
                className={`grade-circle ${
                  form.grade === g ? "active" : ""
                }`}
                onClick={() => setForm({ ...form, grade: g })}
              >
                {g}
              </div>
            ))}
          </div>

          <div className="form-group">
            <label>Program</label>
            <select
              value={form.program}
              onChange={(e) =>
                setForm({ ...form, program: e.target.value })
              }
            >
              <option value="">Select Program</option>
              {programs.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </div>

          <button className="submit-btn">Submit</button>
        </div>
      )}
    </div>
  );
}
