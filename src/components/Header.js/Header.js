import HeaderStyles from './header-styled';

function Header(props) {
  return (
    <HeaderStyles>
      <h1>{props.name}</h1>
    </HeaderStyles>
  );
}
export default Header;
