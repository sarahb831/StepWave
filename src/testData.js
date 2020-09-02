import InjectionMachine50Ton from "./img/InjectionMoldingMachine50Ton.jpg";
import InjectionMachine120Ton from "./img/InjectionMachine120Ton.jpg";
import PlasticInjectionMachine from "./img/PlasticInjectionMachine.jpg";
import VerticalMoldingMachine from "./img/VerticalMoldingMachine.jpg";

export const availableEquipment = [
    {
      id: 1,
      title: "50 Ton Injection Molding Machine",
      image: InjectionMachine50Ton,
      city: "Dublin",
      stateAddress: "OH",
      mapLink: "https://maps.google.com/",
      details:
      {
          rate: "$5000 / hour",
          other: "add more details here",
          availableStart: "now",
          availableEnd: "tomorrow"

      }
    },
    {
        id: 2,
        title: "Vertical Plastic Injection Molding Machine Cable Plug Press",
        image: VerticalMoldingMachine,
        city: "Brown Deer",
        stateAddress: "WI",
        mapLink: "https://maps.google.com/",
        details:
        {
            rate: "$4000 / hour",
            other: "add more details here",
            availableStart: "now",
            availableEnd: "tomorrow"
  
        }
    },
    {
        id: 3,
        title: "50 Ton Plastic Injection Machine",
        image: PlasticInjectionMachine,
        city: "San Jose",
        stateAddress: "CA",
        mapLink: "https://maps.google.com/",
        details:
        {
            rate: "$3000 / hour",
            other: "add more details here",
            availableStart: "now",
            availableEnd: "tomorrow"
  
        }
    },
    {
        id: 4,
        title: "120 Ton Injection Molding Machine",
        image: InjectionMachine120Ton,
        city: "Alpharetta",
        stateAddress: "GA",
        mapLink: "https://maps.google.com/",
        details:
        {
            rate: "$8000 / hour",
            other: "add more details here",
            availableStart: "now",
            availableEnd: "tomorrow"
  
        }
    },
];
