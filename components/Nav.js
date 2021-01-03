import { useState } from 'react'
import { useRouter } from 'next/router'
import styles from '../styles/Nav.module.css'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import AppsTwoToneIcon from '@material-ui/icons/AppsTwoTone'
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone'
import AccountCircleTwoToneIcon from '@material-ui/icons/AccountCircleTwoTone'
import SettingsTwoToneIcon from '@material-ui/icons/SettingsTwoTone'

export default function Nav({ selected }) {
  const [value, setValue] = useState(selected);
  const router = useRouter()

  const goTo = (href) => {
    return (e) => {
      e.preventDefault()
      router.push(href)
    }
  }

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => setValue(newValue)}
      showLabels
      className={styles.container}
    >
      <BottomNavigationAction label="Apps" icon={<AppsTwoToneIcon />} onClick={goTo('/apps')} />
      <BottomNavigationAction label="Home" icon={<HomeTwoToneIcon />} onClick={goTo('/')} />
      <BottomNavigationAction label="Profile" icon={<AccountCircleTwoToneIcon />} onClick={goTo('/profile')} />
      <BottomNavigationAction label="Settings" icon={<SettingsTwoToneIcon />} onClick={goTo('/settings')} />
    </BottomNavigation>
  );
}
