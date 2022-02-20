import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceSmile } from '@fortawesome/free-regular-svg-icons'

const Title = ({ title }: any): JSX.Element => {
  return (
    <div className="section_title">
      <hr className="section_title_line"></hr>
      <div className="section_title_inner">
        <FontAwesomeIcon icon={faFaceSmile} className="fa-icon fa-w-24 mr-15" />
        <h2>{title}</h2>
      </div>
      <hr className="section_title_line"></hr>
    </div>
  )
}

export default Title;