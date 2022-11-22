import { ADD_ITEM, REMOVE_ITEM } from "./cartType";

const addCake = () =>
{
  return {
    type: ADD_ITEM,
  };
};

const removeCake = () =>
{
  return {
    type: REMOVE_ITEM,
  };
};

export { addCake, removeCake };