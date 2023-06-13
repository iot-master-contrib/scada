import {HmiCollection} from "../../hmi";
import {createImageComponent, HmiImageComponent} from "../creator";

const images: HmiImageComponent[] = [
    { id: 'industry-pipe1', name: '', url: '/app/scada/assets/industry/pipe1.svg' },
    { id: 'industry-pipe2', name: '', url: '/app/scada/assets/industry/pipe2.svg' },
    { id: 'industry-pipe3', name: '', url: '/app/scada/assets/industry/pipe3.svg' },
    { id: 'industry-pipe4', name: '', url: '/app/scada/assets/industry/pipe4.svg' },
    { id: 'industry-pipe5', name: '', url: '/app/scada/assets/industry/pipe5.svg' },
    { id: 'industry-pipe6', name: '', url: '/app/scada/assets/industry/pipe6.svg' },
    { id: 'industry-pipe7', name: '', url: '/app/scada/assets/industry/pipe7.svg' },
    { id: 'industry-pipe8', name: '', url: '/app/scada/assets/industry/pipe8.svg' },
    { id: 'industry-pipe9', name: '', url: '/app/scada/assets/industry/pipe9.svg' },
    { id: 'industry-pipe10', name: '', url: '/app/scada/assets/industry/pipe10.svg' },
    { id: 'industry-pipe11', name: '', url: '/app/scada/assets/industry/pipe11.svg' },
    { id: 'industry-device1', name: '', url: '/app/scada/assets/industry/device1.svg' },
    { id: 'industry-device2', name: '', url: '/app/scada/assets/industry/device2.svg' },
    { id: 'industry-device3', name: '', url: '/app/scada/assets/industry/device3.svg' },
    { id: 'industry-device4', name: '', url: '/app/scada/assets/industry/device4.svg' },
    { id: 'industry-device5', name: '', url: '/app/scada/assets/industry/device5.svg' },
    { id: 'industry-device6', name: '', url: '/app/scada/assets/industry/device6.svg' },
    { id: 'industry-device7', name: '', url: '/app/scada/assets/industry/device7.svg' },
    { id: 'industry-device8', name: '', url: '/app/scada/assets/industry/device8.svg' },
    { id: 'industry-device9', name: '', url: '/app/scada/assets/industry/device9.svg' },
    { id: 'industry-device10', name: '', url: '/app/scada/assets/industry/device10.svg' },
    { id: 'industry-device11', name: '', url: '/app/scada/assets/industry/device11.svg' },
]

export const IndustryComponents: HmiCollection = {
    name: '工业组件',
    components: images.map(img => createImageComponent(img))
}

