export enum SelectedLink {
  ПроМене = 'промене',  // Замінили Home на AboutMe
  ONLINEтренування = 'onlineтренування',
  OurClasses = 'ourclasses',
  ContactUs = 'contactus',
}

export interface BenefitType {
  id: string;
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ClassType {
  name: string;
  description?: string;
  image: string;
}
