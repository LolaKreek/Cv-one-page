import components from '../index';
import icons from '../icons';

//Creating a part "Tools"
const Tools = () => {
    //Import of required components
    const {Print, ToolsItem, Circle} = components;
    //Import of required icons
    const {ReactIconS, WebpackIcon, ExpressIcon, StyledComponentsIcon, ReduxIconS, FlexboxIconS, ToolProgramIkona, Circle_05} = icons;

    return(
        <div className="main-wrapper__tools tools">
            <div className="general">
                <Print component='h2' class='tools__main-header margin-zero main-header' text='//Tools' />
                <Print component='h2' class='tools__second-header second-header margin-zero' text='My essentials' />

                <div className="tools__main-icons-wrapper">
                    <ToolsItem wrapper='icon-1 icon' src={ReactIconS} secondText='16.6.3' />
                    <ToolsItem wrapper='icon-2 icon' src={WebpackIcon} firstText='Webpack' secondText='4.19.1' />
                    <ToolsItem wrapper='icon-3 icon' src={ExpressIcon} firstText='Express' secondText='4.16.4' />
                    <ToolsItem wrapper='icon-4 icon' src={StyledComponentsIcon} firstText='Styled&#10;Components' secondText='4.16.4' />
                    <ToolsItem wrapper='icon-5 icon' src={ReduxIconS} firstText='Redux' secondText='4.0.1' />
                    <ToolsItem wrapper='icon-6 icon' src={FlexboxIconS} firstText='Flexbox' secondText='4.0.1' />
                    <ToolsItem wrapper='icon-7 icon' src={ToolProgramIkona} firstText='Program' secondText='5.2.1' />
                    <ToolsItem wrapper='icon-8 icon' src={ToolProgramIkona} firstText='Program' secondText='5.2.2' />
                </div>
                <Circle class='tools__container-circle-5' classImg='tools__circle-5 circle' src={Circle_05} />
            </div>
        </div>
    );
}

export default Tools;