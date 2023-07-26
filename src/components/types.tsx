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
        text: string
    }

    export type ToolsItemPropsType = {
        wrapper: string,
        src: string,
        secondText: string,
        firstText?: string
    }

    export type WorkPropstype = {
        wrapper: string,
        firstText: string,
        secondText: string,
        thirdText: string,
        fourthText: string
    }

    export type CirclePropsType = {
        class: string,
        classImg: string,
        src: string
    }
}