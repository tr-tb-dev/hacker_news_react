import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

function NotFound() {
  return (
    <div>
      <h1>
        <FormattedMessage id="notFound.title" />
      </h1>
      <Link to="/">
        <FormattedMessage id="notFound.goBack" />
      </Link>
    </div>
  );
}

export default NotFound;
