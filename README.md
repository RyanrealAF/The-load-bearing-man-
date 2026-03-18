# The Load-Bearing Man: A Forensic Analysis

This project contains the source code and data for "The Load-Bearing Man," a narrative-driven forensic analysis of a systemic targeting campaign. The project is designed to be deployed as a queryable threat analysis, with a relational database schema that maps the narrative to the forensic data.

## Technical Implementation

The project is implemented as a serverless application on the Cloudflare Workers platform. The database is a Cloudflare D1 database, and the application is deployed automatically via a GitHub Actions workflow.

### Database Schema

The database schema is defined in the `D1 DATABASE SCHEMA (SQL ARCHITECTURE)` section of the project's technical specification. It consists of three tables:

*   `Narrative_Nodes`: Contains the narrative content from the notebook.
*   `Forensic_Mechanisms`: Contains the operational modalities identified in the papers.
*   `Relational_Mapping`: Maps the narrative to the forensic data.

### Deployment

The application is deployed automatically to Cloudflare Workers whenever changes are pushed to the `main` branch. The deployment process is defined in the `.github/workflows/deploy.yml` file.
