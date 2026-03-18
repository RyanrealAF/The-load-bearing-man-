import React, { useEffect, useState } from 'react';

const NarrativeNodes = () => {
  const [nodes, setNodes] = useState([]);

  useEffect(() => {
    fetch('/api/narrative-nodes')
      .then(response => response.json())
      .then(data => setNodes(data));
  }, []);

  return (
    <div>
      <h2>Narrative Nodes</h2>
      <ul>
        {nodes.map(node => (
          <li key={node.node_id}>
            <strong>{node.timestamp_id}:</strong> {node.content} ({node.location_tag})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NarrativeNodes;
