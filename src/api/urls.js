const { API_URL } = process.env;

const urls = {
  user: {
    login: `${API_URL}/login`,
    register: `${API_URL}/register`,
    delete: `${API_URL}/delete`,

  },
};

export default urls;
