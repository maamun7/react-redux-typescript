/* Search Constants */
enum ActionTypes {
	CHANGE_RECIPE_NAME = 'project/App/CHANGE_RECIPE_NAME',
	LOAD_RECIPES = 'project/App/LOAD_RECIPES',
	LOAD_RECIPES_SUCCESS = 'project/App/LOAD_RECIPES_SUCCESS',
	LOAD_RECIPES_ERROR = 'project/App/LOAD_RECIPES_ERROR',
	RECIPES_URL = '/http://www.recipepuppy.com/api/?q'
}

export default ActionTypes;
