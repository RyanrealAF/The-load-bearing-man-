export default {
  async fetch(request, env) {
    const { pathname } = new URL(request.url);

    if (pathname === "/api/narrative-nodes") {
      const { results } = await env.DB.prepare(
        "SELECT * FROM Narrative_Nodes"
      ).all();
      return Response.json(results);
    }

    if (pathname === "/api/forensic-mechanisms") {
      const { results } = await env.DB.prepare(
        "SELECT * FROM Forensic_Mechanisms"
      ).all();
      return Response.json(results);
    }

    if (pathname === "/api/relational-mapping") {
      const { results } = await env.DB.prepare(
        "SELECT * FROM Relational_Mapping"
      ).all();
      return Response.json(results);
    }

    return new Response(
      "Hello from the Load-Bearing-Index!\n\n"
      + "Available endpoints:\n"
      + "/api/narrative-nodes\n"
      + "/api/forensic-mechanisms\n"
      + "/api/relational-mapping\n"
    );
  },
};
