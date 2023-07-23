import ToolItem from "../ToolItem";
import ProgramIcon from "../../assets/tool_program_icon.png";
import "./style.css";

const Tools = () => {
    return(
        <div className="tools__main-container">
            <h2 className="tools__main-header">//Tools</h2>
            <h2 className="tools__second-header">My essentials</h2>

            <div className="tools__content-container">
                <ToolItem wrapper='icon-1 icon' src={ProgramIcon} firstText='React' secondText='16.6.3' />
                <ToolItem wrapper='icon-2 icon' src={ProgramIcon} firstText='Webpack' secondText='4.19.1' />
                <ToolItem wrapper='icon-3 icon' src={ProgramIcon} firstText='Express' secondText='4.16.4' />
                <ToolItem wrapper='icon-4 icon' src={ProgramIcon} firstText="Components" secondText='4.16.4' />
                <ToolItem wrapper='icon-5 icon' src={ProgramIcon} firstText='Redux' secondText='4.0.1' />
                <ToolItem wrapper='icon-6 icon' src={ProgramIcon} firstText='Flexbox' secondText='4.0.1' />
                <ToolItem wrapper='icon-7 icon' src={ProgramIcon} firstText='Program' secondText='5.2.1' />
                <ToolItem wrapper='icon-8 icon' src={ProgramIcon} firstText='Program' secondText='5.2.2' />
                <ToolItem wrapper='icon-8 icon' src={ProgramIcon} firstText='Program' secondText='5.2.2' />
                <ToolItem wrapper='icon-8 icon' src={ProgramIcon} firstText='Program' secondText='5.2.2' />
            </div>
        </div>
    )
}

export default Tools;