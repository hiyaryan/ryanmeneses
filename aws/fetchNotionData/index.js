const { Client } = require("@notionhq/client");

exports.handler = async function (event) {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  const databaseId = event.queryStringParameters.databaseId;

  if (!databaseId) {
    return {
      statusCode: 400,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ error: "No database ID provided" }),
    };
  }

  try {
    const response = await notion.databases.query({ database_id: databaseId });
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Methods": "GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
      body: JSON.stringify(response.results[0].properties),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Methods": "GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
      body: JSON.stringify({ error: "Failed to fetch data from Notion API" }),
    };
  }
};
