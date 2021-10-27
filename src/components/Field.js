import PropTypes from 'prop-types'

const Field = ({ text }) => {
    return (
        <div>
        <label>{text}</label>
        <input type = 'text'>
            
        </input>
        </div>
    )
}


Field.propTypes = {
    text: PropTypes.string
}


export default Field
