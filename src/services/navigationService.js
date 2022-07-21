import history from 'services/history';

export const NavigationService = (path) => {
  history.go(path);
};
