const LoginRequired: React.FC = ({ children }) => {
  const isLogin = true

  if (!isLogin) {
    window.location.reload();
    return null;
  }

  return children as React.ReactElement;
};

export default LoginRequired;
