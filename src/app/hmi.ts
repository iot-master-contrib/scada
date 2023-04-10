export declare interface HmiComponent {
    id: string
    name: string

    icon: string
}

export declare interface HmiCollection {
    name: string

    components: HmiComponent[]
}

export declare interface HmiDrag {
    event: DragEvent
    component: HmiComponent
}
