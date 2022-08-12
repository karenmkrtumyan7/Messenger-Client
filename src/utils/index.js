import moment from 'moment';

export const getError = (err, statusCode = false) => {
  if (err?.response?.data) {
    return {
      errorMessage: err.response.data.msg,
      errorCode: err.response.data.errorCode,
      status: statusCode ? err.response.status : null,
    };
  }
  return {
    errors: [
      {
        errorCode: 'error404',
      },
    ],
    status: statusCode ? err.response.status : null,
  };
};

export const getIsoDate = (date) => moment(date)
  .utc()
  .toISOString();

export const getIsoHours = (date) => moment(date)
  .format('hh:mm A');

export const getFormattedDate = (date) => moment(date)
  .utc(date)
  .local()
  .format('YYYY-MM-DD');
