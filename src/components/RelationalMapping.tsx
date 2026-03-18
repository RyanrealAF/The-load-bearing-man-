import React, { useEffect, useState } from 'react';

const RelationalMapping = () => {
  const [mapping, setMapping] = useState([]);

  useEffect(() => {
    fetch('/api/relational-mapping')
      .then(response => response.json())
      .then(data => setMapping(data));
  }, []);

  return (
    <div>
      <h2>Relational Mapping</h2>
      <ul>
        {mapping.map(map => (
          <li key={map.map_id}>
            Node: {map.node_id}, Mechanism: {map.mechanism_id}, Evidence: {map.evidence_doc_ref}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RelationalMapping;
