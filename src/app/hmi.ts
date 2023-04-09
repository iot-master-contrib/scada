export declare interface HmiComponent {
    id: string
    name: string

    icon: string
}

export declare interface HmiCollection {
    name: string

    components: HmiComponent[]
}
