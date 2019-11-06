export const sendSlackMessage = message => {
  console.log("sendslack", message);
  return fetch(
    "https://c77bbbqyk5.execute-api.us-east-1.amazonaws.com/dev/hello",
    {
      method: "post",
      body: JSON.stringify({
        text: message
      })
    }
  )
    .then(res => {
      console.log({ res });
      return res.json();
    })
    .then(msg => {
      console.log("the message", msg);
      return msg.response;
    });
};
