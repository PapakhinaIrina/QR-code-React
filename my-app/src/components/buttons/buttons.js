import './buttons.css';

const THEME_LIGHT_HEX = '#E2E8F0'
const THEME_DARK_HEX = '#1A202C';

  const THEMES = {
    Light: THEME_LIGHT_HEX,
    Dark: THEME_DARK_HEX
  }

  const Buttons = () => {
    function applyTheme(theme) {
      document.body.style.backgroundColor = theme;
      document.body.style.color = theme === THEMES.Dark ? THEMES.Light : THEMES.Dark;
    }

  return (
    <div  className="buttons">
        <div className='theme-button-dark' onClick={() => applyTheme(THEMES.Dark)}>Dark</div>
        <div className='theme-button-light' onClick={() => applyTheme(THEMES.Light)}>Light</div>
    </div>
  )
}

export default Buttons;

