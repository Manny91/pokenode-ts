const getErrorFromException = (e: unknown) => {
  let message = "Sorry there was an error loading your request.";
  if (typeof e === "string") {
    message = e.toUpperCase();
  } else if (e instanceof Error) {
    message = e.message;
  }
  return message;
};

export default getErrorFromException;
