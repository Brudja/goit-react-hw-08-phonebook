export const getFilteredContacts = state => {
    return state.phonebook.items.filter(item =>
      item.name.toLowerCase().includes(state.filter.filter.toLowerCase())
    );
  };
  export const getFilter = state => state.filter.filter;
  