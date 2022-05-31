import '../App.css';

export const PageContainer = ({ children }) => {
  return (
    <div className="main-container">
      <div className="inner-container">{children}</div>
    </div>
  );
};
