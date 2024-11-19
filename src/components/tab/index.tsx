import React from 'react'
import styles from './index.module.scss'
import classnames from 'classnames'

export interface TabType {
  tabList: string[]
  classNames?: string
}

const baseClass = `tab`

export const Tab = ({ tabList, classNames }: TabType) => {
  return (
    <ul className={classnames(styles[`${baseClass}`], classNames)}>
      {tabList.map((tab) => {
        return <li className={styles[`${baseClass}_item`]}>{tab}</li>
      })}
    </ul>
  )
}
