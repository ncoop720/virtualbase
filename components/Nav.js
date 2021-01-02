import Link from 'next/link'
import styles from '../styles/Nav.module.css'
import AccountCircleTwoToneIcon from '@material-ui/icons/AccountCircleTwoTone'
import AppsTwoToneIcon from '@material-ui/icons/AppsTwoTone'
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone'
import SettingsTwoToneIcon from '@material-ui/icons/SettingsTwoTone'

const iconStyles = { fontSize: 'calc(6vh + 3vw)' }
const highlightedStyles = { ...iconStyles, color: 'red' }

const Nav = ({ selected }) => {
  return (
    <div className={styles.container}>
      <Link href="/apps">
        <a>
          <AppsTwoToneIcon 
            style={selected === 'Apps' ? highlightedStyles : iconStyles }
          />
        </a>
      </Link>
      <Link href="/">
        <a>
          <HomeTwoToneIcon
            style={selected === 'Home' ? highlightedStyles : iconStyles }
          />
        </a>
      </Link>
      <Link href="/profile">
        <a>
          <AccountCircleTwoToneIcon
            style={selected === 'AccountCircle' ? highlightedStyles : iconStyles }
          />
        </a>
      </Link>
      <Link href="/settings">
        <a>
          <SettingsTwoToneIcon 
            style={selected === 'Settings' ? highlightedStyles : iconStyles }
          />
        </a>
      </Link>
    </div>
  )
}

export default Nav
