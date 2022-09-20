import './index.css'

const ContactItem = props => {
  const {contactDetails, toggleIsFavorite} = props
  const {name, id} = contactDetails

  const starImgUrl = 'https://assets.ccbp.in/frontend/react-js/cross-img.png'

  const onClickFavoriteIcon = () => {
    toggleIsFavorite(id)
  }

  return (
    <li className="table-row">
      <div className="table-cell name-column">
        <p>{name}</p>
      </div>
      <div className="table-cell mobile-no-column">
        <button
          type="button"
          className="favorite-icon-container"
          onClick={onClickFavoriteIcon}
        >
          <img src={starImgUrl} className="favorite-icon" alt="star" />
        </button>
      </div>
    </li>
  )
}

export default ContactItem
