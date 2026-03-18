INSERT INTO Narrative_Nodes (node_id, timestamp_id, content, location_tag) VALUES
(1, '001-015', '"The Coastal Ingress" (The 12 p.m. vs. 3 a.m. city).', 'The City'),
(2, '016-045', 'The arrival of the "Access Agent."', 'Taqueria/7-Eleven Clusters'),
(3, '046-120', 'The "Allostatic Load" accumulation (The 3 a.m. Siren).', 'The City'),
(4, '121-180', 'The "Shopping Cart Incident" / "Debit Card Test."', 'The City'),
(5, '181+', 'The Concrete Ledge ("Seeing the Whole Machine").', 'The City');

INSERT INTO Forensic_Mechanisms (mechanism_id, term_name, definition, clinical_risk_level) VALUES
(1, 'Poster Version Suppression', 'The community’s reliance on the "Photoshop Blue" facade.', 7),
(2, 'The Trauma Twin', 'Harvesting shared history to bypass psychological perimeters.', 9),
(3, 'C2 by Insinuation', 'Recruiting "Unwitting Operatives" through manufactured civic virtue.', 8),
(4, 'The Loyalty Test', 'Forcing the target into a "Reactive Posture" to justify further ostracism.', 9),
(5, 'The Breadcrumb Web', 'Converting trauma into a forensic ledger (GitHub/R2).', 6);

INSERT INTO Relational_Mapping (map_id, node_id, mechanism_id, evidence_doc_ref) VALUES
(1, 1, 1, 'folk_devil_social_infrastructure_paper.docx'),
(2, 2, 2, 'Social Infrastructure of the Outcast.pdf'),
(3, 3, 3, 'Forensic Analysis- Systemic Targeting.pdf'),
(4, 4, 4, 'carried_weight.txt'),
(5, 5, 5, 'The Architecture of Social Ostracism.pdf');
