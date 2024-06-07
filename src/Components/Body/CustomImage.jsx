import PropTypes from 'prop-types';
function CustomImage({ imgSrc, alt }) { 
  return (
    <div className="CustomImage">
      <img src={imgSrc} alt={alt} />
    </div>
  )
}

CustomImage.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  alt: PropTypes.string,
};
export default CustomImage
