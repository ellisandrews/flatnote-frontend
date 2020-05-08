export const handleResponse = (resp, success, failure) => {
  // This function handles a fetch response object with appropriate callback functions

  // Note this is a promise
  const respJSON = resp.json()

  // Handle the 'happy path'. Fetch doesn't error on status >= 400, so have to check resp.ok
  if (resp.ok) { 
    respJSON.then(success)
  }

  // Show alerts for errors returned by the server from bad requests
  if (resp.status >= 400 && resp.status < 500) {
    respJSON.then(failure)
  }
}
