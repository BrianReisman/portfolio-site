import HeaderStyles from './header-styled';
import {useHistory} from 'react-router-dom';

function Header(props) {
  const {push} = useHistory();

  function onBackClick(e){
    console.log('back button clicked')
    push('/');
  }



  return (
    <HeaderStyles>
      <div onClick={onBackClick}>back</div>
      <h1>{props.name}</h1>
    </HeaderStyles>
  );
}
export default Header;
