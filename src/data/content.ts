import { ATLAS_CONTENT } from './forensic-indexing';
import { AnalysisTerm } from '../types';

export const folkDevil = ATLAS_CONTENT.folk_devil;
export const unseenWar = ATLAS_CONTENT.unseen_war;
export const carriedWeight = ATLAS_CONTENT.carried_weight;

export const ANALYSIS_TERMS: Record<string, AnalysisTerm> = {
  'load-bearing-individual': {
    id: 'load-bearing-individual',
    title: 'The Load-Bearing Individual',
    definition: 'The individual who occupies the folk devil position, performing involuntary structural labor for a community that has declined to pay for it in any currency other than harm.',
    structuralFunction: 'Sustaining community cohesion through the absorption of engineered stress.',
    operationalRisk: 'Critical',
    forensicSignature: 'High allostatic load and systematic narrative dispossession.',
    details: [
      'Bears the psychological labor of maintaining identity coherence.',
      'Bears the motivational labor of sustaining forward-directed action.',
      'Bears the epistemological labor of holding accurate testimony.'
    ],
    source: 'Carried Weight: Folk Devil Effects'
  },
  'folk-devil': {
    id: 'folk-devil',
    title: 'The Folk Devil',
    definition: 'A figure whose construction serves the social cohesion needs of high-conflict, low-trust communities.',
    structuralFunction: 'Functional social infrastructure for consensus generation.',
    operationalRisk: 'Critical',
    forensicSignature: 'Systematic moral panic and institutional targeting.',
    details: [
      'Operates as low-cost, zero-negotiation consensus generation tool.',
      'Channels community antagonism toward a single outsider target.',
      'Sustained by institutional amplification and maintenance logic.'
    ],
    source: 'Folk Devil as Social Infrastructure'
  },
  'asymmetry-of-intent': {
    id: 'asymmetry-of-intent',
    title: 'Asymmetry of Intent',
    definition: 'The fundamental imbalance between the target\'s good-faith conduct and the campaign\'s hostile reinterpretation of that conduct.',
    structuralFunction: 'Severing the normal relationship between conduct and consequence.',
    operationalRisk: 'High',
    forensicSignature: 'Systematic meaning-inversion of the target\'s behavior.',
    details: [
      'Honesty is reinterpreted as evidence of cunning.',
      'Composure is reinterpreted as calculating affect.',
      'Good-faith conduct is punished to produce learned helplessness.'
    ],
    source: 'Carried Weight: Folk Devil Effects'
  },
  'humint-network': {
    id: 'humint-network',
    title: 'HUMINT Network',
    definition: 'A human intelligence grid composed of neighbors, service staff, and other community members recruited through insinuation.',
    structuralFunction: 'Executing the social isolation and surveillance of the target.',
    operationalRisk: 'High',
    forensicSignature: 'Coordinated "vibe shifts" and scripted community interactions.',
    details: [
      'Leverages "unwitting operatives" through the hero complex.',
      'Operates across mundane community locations (shops, markets).',
      'Shapes community perception through informal gossip networks.'
    ],
    source: 'The Unseen War'
  },
  'c2-by-insinuation': {
    id: 'c2-by-insinuation',
    title: 'C2 by Insinuation',
    definition: 'Command and control exercised through leading questions and subtle suggestions rather than direct orders.',
    structuralFunction: 'Recruiting civilians into a targeting campaign without their full awareness.',
    operationalRisk: 'High',
    forensicSignature: 'Leading questions like "Has anyone else noticed him?"',
    details: [
      'Bypasses institutional oversight and accountability.',
      'Creates a sense of shared "civic virtue" among participants.',
      'Highly effective for mobilizing decentralized community action.'
    ],
    source: 'The Unseen War'
  },
  'breadcrumb-web': {
    id: 'breadcrumb-web',
    title: 'The Breadcrumb Web',
    definition: 'A systematic documentation methodology used by the target to preserve objective reality against a campaign of gaslighting.',
    structuralFunction: 'Serving as an "external hippocampus" for the target.',
    operationalRisk: 'Low',
    forensicSignature: 'Detailed logging of nodes, branches, and operational patterns.',
    details: [
      'Converts trauma into actionable forensic data.',
      'Provides the evidentiary base for narrative sovereignty.',
      'Functions as a vital defensive counter-measure.'
    ],
    source: 'The Unseen War'
  },
  'narrative-sovereignty': {
    id: 'narrative-sovereignty',
    title: 'Narrative Sovereignty',
    definition: 'The reclamation of the target\'s right to author their own identity and interpret their own experience.',
    structuralFunction: 'Refuting the adversarially constructed identity of the folk devil.',
    operationalRisk: 'Low',
    forensicSignature: 'The transition from "victim" to "analyst."',
    details: [
      'Achieved through pattern recognition and systematic disclosure.',
      'Involves the recognition of the "whole machine."',
      'Establishes visibility as a primary defensive shield.'
    ],
    source: 'The Unseen War'
  }
};
