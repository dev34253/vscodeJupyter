import { routerReducer as routing, RouteActions } from 'react-router-redux';
import { combineReducers, Reducer } from 'redux';
import todos from './todos';
import results from './results';
import settings from './settings';

export interface RootState {
  //routing: RouteActions;
  todos: TodoStoreState;
  results: NotebookResultsState;
  settings: NotebookResultSettings;
}

export default combineReducers<RootState>({
  routing,
  todos,
  results,
  settings
});
