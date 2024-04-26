import "./notFoundPage.css";
const NotFoundPage = () => {
  return (
    <>
      <div className="page_not_found">
        <span className="error-code">404</span>
        <p className="error-message">
          Sorry but we could not find the page you are looking for
        </p>
        <img
          src="https://dressup-shop.netlify.app/static/media/error.84a4f5ac7cc4a63e4484.gif"
          alt="error"
        />
      </div>
    </>
  );
};

export default NotFoundPage;
