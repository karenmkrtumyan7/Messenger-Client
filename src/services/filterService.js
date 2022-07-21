import qs from 'qs';
import _ from 'lodash';
import { NavigationService } from 'services/navigationService';

const FilterService = {
  filterState: false,

  getExpand: (expand) => expand === 'true',

  getQuery: (query) => qs.parse(query, {
    ignoreQueryPrefix: true,
  }),

  setQuery: (params, changeState = true) => {
    if (changeState) {
      FilterService.filterState = !FilterService.filterState;
    }
    NavigationService(`?${qs.stringify(_.pickBy(params, (val) => _.identity(val) || _.isBoolean(val)))}`);
  },

  getTableCols: (field, order, cols) => cols.map((column) => ({
    ...column,
    sortOrder: column.dataIndex === field && order,
  })),

  handleToggle: (query, expand, propName = 'expand') => FilterService.setQuery(
    {
      ...query,
      [propName]: !FilterService.getExpand(expand),
    },
    false,
  ),

  getFilterState: (query) => _.isEmpty(
    _.pickBy(
      {
        ...query,
        expand: undefined,
        pageNumber: undefined,
        tab: undefined,
        type: undefined,
        orderType: undefined,
        orderField: undefined,
      },
      (val) => _.identity(val) || _.isBoolean(val),
    ),
  ),
};

export default FilterService;
