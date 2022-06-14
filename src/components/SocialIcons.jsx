import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { StyledSocialIcons } from './styles/SocialIcons.styled';

function SocialIcons() {
  return (
    <StyledSocialIcons>
      <li>
        <a href='#'>
          <FaFacebook />
        </a>
      </li>
      <li>
        <a href='#'>
          <FaTwitter />
        </a>
      </li>
      <li>
        <a href='#'>
          <FaLinkedin />
        </a>
      </li>
    </StyledSocialIcons>
  );
}

export default SocialIcons;
