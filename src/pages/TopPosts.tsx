import { FormattedMessage } from 'react-intl'

function TopPosts() {
  return (
    <div>
      <h1>
        <FormattedMessage id="topPosts.title" />
      </h1>
      <p>
        <FormattedMessage id="topPosts.description" />
      </p>
    </div>
  )
}

export default TopPosts
