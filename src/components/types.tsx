import { ElementType } from "react"

export namespace ComponentsTypes {
    export type BlogItemPropsType = {
        wrapper: string,
        src: string,
        title: string
    }

    export type CirclePropsType = {
        class: string,
        classImg: string,
        src: string
    }

    export type ListPropsType = {
        class: string,
        lists: ListItem[],
        element?: ElementType
    }

    export type ListItem = {
        id: number,
        text?: string,
        href?: string,
        class?: string,
        src?: string
    }

    export type PrintPropsType = {
        component: ElementType,
        class: string,
        text: string
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
}