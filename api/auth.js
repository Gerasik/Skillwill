const { createOAuthAppAuth } = require("@octokit/auth-oauth-app")

exports.handler = async function (event) {
  const auth = createOAuthAppAuth({
    clientId: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
  })

  const { token } = await auth({
    type: "oauth-user",
    code: event.queryStringParameters.code,
  })

  return {
    statusCode: 200,
    body: JSON.stringify({ token }),
  }
}
