import "./ErrorPage.css";

function ErrorPage() {
  return (
    <div className="error-page">
      <div className="error-container">
        <div className="error-code">404</div>
        <div className="error-text">Page Not Found</div>
        <div className="error-description">
          The page you are looking for might have been removed, had its name
          changed or is temporarily unavailable.
        </div>
        <a href="/" className="error-button">
          Back to Home
        </a>
      </div>
    </div>
  );
}

export default ErrorPage;
