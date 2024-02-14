const { Client } = require('@notionhq/client');

exports.handler = async function (event) {
    const notion = new Client({ auth: process.env.NOTION_API_KEY });
    const databaseId = process.env.NOTION_DB;

    try {
        const response = await notion.databases.retrieve({ database_id: databaseId });
        return {
            statusCode: 200,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(response),
        };
    } catch (error) {
        console.error(error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Failed to fetch data from Notion API" }),
        };
    }
};