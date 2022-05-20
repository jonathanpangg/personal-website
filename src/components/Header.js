import PropTypes from 'prop-types'

const Header = (props) => {
    return (
        <div className='container'>
            <h1> {props.title} </h1>
        </div>
    )
}

Header.defaultProps = {
    title: 'Personal Website'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header