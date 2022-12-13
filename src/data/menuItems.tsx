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
      name: 'Text Imputs',
      icon: 'chatbox-ellipses-outline',
      component: 'TextImputScreen',
    },
    {
      name: 'Pull To Refrestsh',
      icon: 'refresh-outline',
      component: 'PullToRefrestshScreen',
    },
    {
      name: 'Section List',
      icon: 'list-outline',
      component: 'CustomSectionListScreen',
    },
    {
      name: 'Modal',
      icon: 'copy-outline',
      component: 'ModalScreen',
    },
    {
      name: 'Infinite Scroll',
      icon: 'arrow-down-outline',
      component: 'InfiniteScrollScreen',
    },
    {
      name: 'Slides',
      icon: 'flower-outline',
      component: 'SlidesScreen',
    },
    {
      name: 'Change Theme',
      icon: 'moon-outline',
      component: 'ChangeThemeScreen',
    },
  ];