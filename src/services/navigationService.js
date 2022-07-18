import history from './history';

export const NavigationService = (path) => {
  history.go(path);
};
