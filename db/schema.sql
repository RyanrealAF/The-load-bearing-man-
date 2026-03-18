-- ENTRY POINT: DATABASE INITIALIZATION
CREATE TABLE Narrative_Nodes (
    node_id INTEGER PRIMARY KEY,
    timestamp_id VARCHAR(50), -- Narrative day/time
    content TEXT,
    location_tag VARCHAR(100)
);

CREATE TABLE Forensic_Mechanisms (
    mechanism_id INTEGER PRIMARY KEY,
    term_name VARCHAR(100), -- e.g., "C2 by Insinuation"
    definition TEXT,
    clinical_risk_level INTEGER -- 1-10 (e.g., 10 for Allostatic Load)
);

CREATE TABLE Relational_Mapping (
    map_id INTEGER PRIMARY KEY,
    node_id INTEGER,
    mechanism_id INTEGER,
    evidence_doc_ref VARCHAR(255),
    FOREIGN KEY (node_id) REFERENCES Narrative_Nodes(node_id),
    FOREIGN KEY (mechanism_id) REFERENCES Forensic_Mechanisms(mechanism_id)
);
