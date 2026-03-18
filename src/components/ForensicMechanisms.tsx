import React, { useEffect, useState } from 'react';

const ForensicMechanisms = () => {
  const [mechanisms, setMechanisms] = useState([]);

  useEffect(() => {
    fetch('/api/forensic-mechanisms')
      .then(response => response.json())
      .then(data => setMechanisms(data));
  }, []);

  return (
    <div>
      <h2>Forensic Mechanisms</h2>
      <ul>
        {mechanisms.map(mechanism => (
          <li key={mechanism.mechanism_id}>
            <strong>{mechanism.term_name}:</strong> {mechanism.definition} (Risk: {mechanism.clinical_risk_level})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ForensicMechanisms;
