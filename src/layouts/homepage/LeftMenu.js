import React from 'react'
import BrandLogo from '../../components/leftMenu/BrandLogo'
import LeftMenuDashboardName from '../../components/leftMenu/LeftMenuDashboardName'
import LeftMenuSectionHeading from '../../components/leftMenu/LeftMenuSectionHeading'
import LeftMenuSubSectionHeading from '../../components/leftMenu/LeftMenuSubSectionHeading'
import logo from '../../images/logo.png'

export default function LeftMenu() {
  return (
    <div>
        <BrandLogo />
        <LeftMenuDashboardName />
        <LeftMenuSectionHeading  text={'THEME'}/>
        <LeftMenuSubSectionHeading image={logo} text={'Colors'}/>
        <LeftMenuSubSectionHeading text={'Typography'}/>
        <LeftMenuSectionHeading text={'COMPONENTS'} />
        <LeftMenuSubSectionHeading text={'Base'}/>
        <LeftMenuSubSectionHeading text={'Buttons'}/>
        <LeftMenuSubSectionHeading text={'Charts'}/>
        <LeftMenuSubSectionHeading text={'Editors'}/>
        <LeftMenuSubSectionHeading text={'Forms'}/>
        <LeftMenuSectionHeading text={'EXTRAS'} />
        <LeftMenuSectionHeading text={'LABELS'} />
        <p></p>
        <p></p>
        <p></p>
    </div>
  )
}
