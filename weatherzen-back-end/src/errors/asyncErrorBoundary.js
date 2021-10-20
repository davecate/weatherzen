// async error boundary prevents the server from freezing up if a faulty API call is made

function asyncErrorBoundary(delegate, defaultStatus ) {
  return (request, response, next) => {
    Promise.resolve()
      .then(() => delegate(request, response, next))
      .catch((error) => {
        const { status = defaultStatus, message = error } = error || {};
        next({
          status,
          message,
        });
      });
  };
}

module.exports = asyncErrorBoundary
