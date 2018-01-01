import React from "react";
import classNames from "classnames";
import { Icon, Tooltip, message } from "antd";
import RepoLinksTool from "./repoLinksTool";
import RepoNoteTool from "./repoNoteTool";
import RepoClassifyTool from "../containers/repoClassifyTool";
import { RepoDetailToolbarProps } from "../containers/repoDetailToolbar";
import IRepo from "../interface/IRepo";

const styles = require("../assets/styles/main.less");

export default class RepoDetailToolbar extends React.Component<RepoDetailToolbarProps> {
    viewInGithub = () => {
        if (this.props.selectedRepo) {
            const url = this.props.selectedRepo.htmlUrl;
            window.open(url, "_blank");
        }
    };

    starStarCabinet = () => {
        this.props
            .onStarStarCabinet()
            .then(() => {
                message.success("Thank you for starring me");
            })
            .catch(() => {
                message.info("Failed but thank you, maybe you have starred already");
                window.open("https://github.com/thundernet8/StarCabinet", "_blank");
            });
    };

    changeReadStatus = () => {
        const repo = this.props.selectedRepo;
        if (repo) {
            this.props.onChangeRepoReadStatus(repo.id, !repo.read);
        }
    };

    changeRepoFlag = () => {
        const repo = this.props.selectedRepo;
        if (repo) {
            this.props.onChangeRepoFlag(repo.id, !repo.flag);
        }
    };

    render() {
        let readIcon;
        let flagIcon;
        if (this.props.selectedRepo) {
            readIcon = (
                <Tooltip
                    placement="bottom"
                    title={this.props.selectedRepo.read ? "Mark as unread" : "Mark as read"}
                >
                    <Icon
                        type={this.props.selectedRepo.read ? "eye" : "eye-o"}
                        data-read={this.props.selectedRepo.read}
                        onClick={this.changeReadStatus}
                    />
                </Tooltip>
            );
            flagIcon = (
                <Tooltip
                    placement="bottom"
                    title={this.props.selectedRepo.flag ? "Remove flag" : "Add flag"}
                >
                    <Icon
                        type="flag"
                        data-flag={this.props.selectedRepo.flag}
                        onClick={this.changeRepoFlag}
                    />
                </Tooltip>
            );
        } else {
            readIcon = null;
            flagIcon = null;
        }
        return (
            <div
                className={classNames("detailToolbar", styles.detailToolbar, {
                    [styles.disabled]: !this.props.selectedRepo
                })}
            >
                <Tooltip placement="bottom" title="View in Github">
                    <Icon type="select" onClick={this.viewInGithub} />
                </Tooltip>
                {readIcon}
                {flagIcon}
                <RepoClassifyTool repo={this.props.selectedRepo} />
                <RepoNoteTool
                    repo={this.props.selectedRepo}
                    updateNote={this.props.onUpdateRepoNote}
                />
                <RepoLinksTool repo={this.props.selectedRepo as IRepo} />
                <Tooltip placement="bottomRight" title="Star StarCabinet">
                    <Icon type="github" onClick={this.starStarCabinet} />
                </Tooltip>
            </div>
        );
    }
}
