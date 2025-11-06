import { Link } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            <FormattedMessage id="navigation.newPosts" />
          </Link>
        </li>
        <li>
          <Link to="/top">
            <FormattedMessage id="navigation.topPosts" />
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
