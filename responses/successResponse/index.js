function successResponse(status, data) {
  return {
    statusCode: status,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data }),
  };
}

exports.successResponse = successResponse;
