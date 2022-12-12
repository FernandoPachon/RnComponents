import { MenuItem } from "../interfaces/appInterfaces";

export const menuItems:MenuItem[] = [
    {
      name: 'Animation 101',
      icon: 'cube-outline',
      component: 'Animation101Screen',
    },
    {
      name: 'Animation 102',
      icon: 'albums-outline',
      component: 'Animation102Screen',
    },
    {
      name: 'Switches',
      icon: 'toggle-outline',
      component: 'SwitchScreen',
    },
    {
      name: 'Alerts',
      icon: 'notifications-outline',
      component: 'AlertScreen',
    },
    {
      name: 'TextImputs',
      icon: 'chatbox-ellipses-outline',
      component: 'TextImputScreen',
    },
    {
      name: 'PullToRefrestsh',
      icon: 'refresh-outline',
      component: 'PullToRefrestshScreen',
    },
    {
      name: 'SectionList',
      icon: 'list-outline',
      component: 'CustomSectionListScreen',
    },
  ];