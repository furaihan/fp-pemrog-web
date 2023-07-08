import "./ErrorPage.css";
import { Link } from "react-router-dom";

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
        <Link to="/" className="error-button">
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
