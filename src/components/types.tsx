export namespace ComponentsTypes {
    export type BlogItemPropsType = {
        wrapper: string,
        src: string,
        title: string
    }

    export type GradientButtonPropsType = {
        icon: any,
        title: string
    }

    export type SkillsPropsType = {
        class: string,
        text: string,
        tooltipTitle: string
    }

    export type ToolsItemPropsType = {
        wrapper: string,
        src: string,
        secondText: string,
        href: string,
        firstText?: string
    }

    export type WorkPropstype = {
        wrapper: string,
        firstText: string,
        secondText: string,
        thirdText: string,
        fourthText: string,
        link?: string
    }

    export type CirclePropsType = {
        class: string,
        classImg: string,
        src: string
    }

    export type PortfolioIconsType = {
        href: string,
        showWebsite?: string
    }
}