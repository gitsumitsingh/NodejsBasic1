const http2 = require("http2");
const { NGHTTP2_CANCEL } = http2.constants;

const client = http2.connect("https://example.org");

/**
The 'altsvc' event is emitted whenever an ALTSVC frame is received by the client.
The event is emitted with the ALTSVC value, origin, and stream ID.
If no origin is provided in the ALTSVC frame, origin will be an empty string.
 */
client.on("altsvc", (alt, origin, streamId) => {
  console.log(alt);
  console.log(origin);
  console.log(streamId);
});

/**
The 'origin' event is emitted whenever an ORIGIN frame is received by the client.
The event is emitted with an array of origin strings.
The http2session.originSet will be updated to include the received origins.
 */

client.on("origin", (origins) => {
  for (let n = 0; n < origins.length; n++) console.log(origins[n]);
});

// Create the request
const req = client.request({ path: "/" });
// Cancel the stream if there's no activity after 5 seconds
req.setTimeout(5000, () => req.close(NGHTTP2_CANCEL));

req.end();
