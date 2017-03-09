import React                        from 'react'
import classNames                   from 'classnames'
import styles                       from '../styles/main.scss'
import MainGroupTopIndicator        from '../containers/mainGroupTopIndicator'
import MainGroupAvatar              from '../containers/mainGroupAvatar'
import MainGroupNavs                from '../containers/mainGroupNavs'
import MainGroupFooter              from '../containers/mainGroupFooter'

// left part of the main window
export default class MainGroupPane extends React.Component {

    render () {
        return (
            <div className={classNames('left', styles.left)}>
                <header id="titleBar">
                    <MainGroupTopIndicator/>
                </header>
                <MainGroupAvatar/>
                <MainGroupNavs/>
                <MainGroupFooter/>
            </div>
        )
    }
}
