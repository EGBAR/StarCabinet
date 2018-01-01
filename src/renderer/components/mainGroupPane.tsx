import React from "react";
import classNames from "classnames";
import RefreshIndicator from "../containers/refreshIndicator";
import MainGroupAvatar from "../containers/mainGroupAvatar";
import MainGroupNavs from "../containers/mainGroupNavs";
import MainGroupFooter from "../containers/mainGroupFooter";

const styles = require("../assets/styles/main.less");

export default class MainGroupPane extends React.Component<{}> {
    render() {
        return (
            <div className={classNames("left", styles.left)}>
                <header id="titleBar">
                    <RefreshIndicator />
                </header>
                <MainGroupAvatar />
                <MainGroupNavs />
                <MainGroupFooter />
            </div>
        );
    }
}
