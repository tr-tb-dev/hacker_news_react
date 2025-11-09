import { FormattedMessage } from 'react-intl'

function NewPosts() {
  return (
    <div>
      <h1>
        <FormattedMessage id="newPosts.title" />
      </h1>
      <p>
        <FormattedMessage id="newPosts.description" />
      </p>
    </div>
  )
}

export default NewPosts
