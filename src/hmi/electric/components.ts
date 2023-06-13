import { HmiCollection } from "../hmi";
import { ElectricSwitch } from "./switch";
import { HmiSvgComponent, createSvgComponent } from "../creator";
const images: HmiSvgComponent[] = [
    { id: 'electric-1', name: '', icon: '/app/scada/assets/electric/electric1.svg' },
    { id: 'electric-2', name: '', icon: '/app/scada/assets/electric/electric2.svg' },
    { id: 'electric-3', name: '', icon: '/app/scada/assets/electric/electric3.svg' },
    { id: 'electric-4', name: '', icon: '/app/scada/assets/electric/electric4.svg' },
    { id: 'electric-5', name: '', icon: '/app/scada/assets/electric/electric5.svg' },
    { id: 'electric-6', name: '', icon: '/app/scada/assets/electric/electric6.svg' },
    { id: 'electric-7', name: '', icon: '/app/scada/assets/electric/electric7.svg' },
    { id: 'electric-8', name: '', icon: '/app/scada/assets/electric/electric8.svg' },
    { id: 'electric-9', name: '', icon: '/app/scada/assets/electric/electric9.svg' },
    { id: 'electric-10', name: '', icon: '/app/scada/assets/electric/electric10.svg' },
    { id: 'electric-11', name: '', icon: '/app/scada/assets/electric/electric11.svg' },
    { id: 'electric-12', name: '', icon: '/app/scada/assets/electric/electric12.svg' },
    { id: 'electric-13', name: '', icon: '/app/scada/assets/electric/electric13.svg' },
    { id: 'electric-14', name: '', icon: '/app/scada/assets/electric/electric14.svg' },
    { id: 'electric-15', name: '', icon: '/app/scada/assets/electric/electric15.svg' },
    { id: 'electric-16', name: '', icon: '/app/scada/assets/electric/electric16.svg' },
    { id: 'electric-17', name: '', icon: '/app/scada/assets/electric/electric17.svg' },
    { id: 'electric-18', name: '', icon: '/app/scada/assets/electric/electric18.svg' },
    { id: 'electric-19', name: '', icon: '/app/scada/assets/electric/electric19.svg' },
    { id: 'electric-20', name: '', icon: '/app/scada/assets/electric/electric20.svg' },
    { id: 'electric-capacitor', name: '', icon: '/app/scada/assets/electric/capacitor.svg' },
    { id: 'electric-arrow', name: '', icon: '/app/scada/assets/electric/arrow-up-bold.svg' },
]
export const ElectricComponents: HmiCollection = {
    name: '电力组件',
    // hmi: images.map(img => createImageComponent(img)).concat([ElectricSwitch])
    components: images.map(img => createSvgComponent(img))
}
