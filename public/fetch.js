async function fetchUrl(functionName, payload) {
  var url =
    NODE_ENV === "production"
      ? "https://us-central1-food-70e24.cloudfunctions.net/"
      : "http://localhost:5001/food-70e24/us-central1/";
  url += functionName;

  var options = {
    method: payload ? "POST" : "GET"
  };
  if (payload) {
    options.body = JSON.stringify(payload);
  }

  var response = await fetch(url, options);
  console.log(response);
  var responseJSON = await response.json();
  console.log(responseJSON);
  return responseJSON;
}
