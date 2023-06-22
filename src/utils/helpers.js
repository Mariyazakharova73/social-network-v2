export const updateObjectInArray = (items, itemId, objPropsName, newObjProps) => {
  return items.map((item) => {
    if (item[objPropsName] === itemId) {
      return { ...item, ...newObjProps };
    }
    return item;
  });
};

// state.users.map((user) => {
//   if (user.id === action.userId) {
//     return { ...user, followed: true };
//   }
//   return user;
// })
