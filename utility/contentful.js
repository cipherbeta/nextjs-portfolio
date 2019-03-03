const contentful = require('contentful');

const space = 'em8hp9u2568g';
const accessToken = '6192516fc55390dc1aca881b7a3d72b9ed9459b9be9cec16dd9f7d79a9d4aa7a';
const client = contentful.createClient({space, accessToken});

export { space, accessToken, client };