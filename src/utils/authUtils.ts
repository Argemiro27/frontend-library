
export const isUserAuthenticated = () => {
    const token = localStorage.getItem('token');
    return !!token;
  };
  