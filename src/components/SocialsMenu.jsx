import twitterLogo from "../assets/images/icon-twitter.svg";
import FacebookLogo from "../assets/images/icon-facebook.svg";
import PinterestLogo from "../assets/images/icon-pinterest.svg";
import InstagramLogo from "../assets/images/icon-instagram.svg";

const SocialsMenu = () => {
  return (
    <ul className="flex gap-6 mx-auto lg:mx-0 lg:pr-2">
      <li><a href="#"><img className='svg-image' src={twitterLogo}/></a></li>
      <li><a href="#"><img className='svg-image' src={FacebookLogo}/></a></li>
      <li><a href="#"><img className='svg-image' src={PinterestLogo}/></a></li>
      <li><a href="#"><img className='svg-image' src={InstagramLogo}/></a></li>
    </ul>
  )
}

export default SocialsMenu