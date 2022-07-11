export const getError = (err, statusCode = false, isAuth = false) => {
  if (err?.response?.data) {
    return {
      errors: !isAuth
        ? err.response.data
        : [
          {
            errorMessage: err.response.data.errorMessage,
            errorCode: err.response.data.errorCode,
          },
        ],
      status: statusCode ? err.response.status : null,
    };
  }
  return {
    errors: [
      {
        // errorMessage: Notifications.unknownError,
        errorCode: 'error404',
      },
    ],
    status: statusCode ? err.response.status : null,
  };
};
