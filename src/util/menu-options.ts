import { NIcon } from 'naive-ui'
import { h, type Component } from 'vue'
import {
  BusinessOutline,
  BusinessSharp,
  Car,
  CarOutline,
  GolfOutline,
  GolfSharp,
  PersonOutline as PersonIcon,
  SettingsOutline,
} from '@vicons/ionicons5'
function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}
export const menuOptionsData = [
  {
    Name: '球車獵人後台',
    KeyName: 'hear-the-wind-sing',
    icon: renderIcon(GolfSharp),
    Children: [
      {
        Name: '球車',
        KeyName: 'rat',
      },
    ],
  },
  {
    Name: '球車資訊',
    KeyName: 'pinball-1973',
    icon: renderIcon(CarOutline),
    Children: [
      {
        Name: '球車地圖',
        KeyName: 'rat',
      },
    ],
  },
  {
    Name: '計分統計',
    KeyName: 'a-wild-sheep-chase',
    icon: renderIcon(GolfOutline),
  },
  {
    Name: '球場管理',
    KeyName: 'dance-dance-dance',
    icon: renderIcon(BusinessOutline),
    Children: [
      {
        type: 'group',
        Name: '管理項',
        KeyName: 'people',
        Children: [
          {
            Name: '球車管理',
            KeyName: 'narrator',
            icon: renderIcon(Car),
          },
          {
            Name: '球弟管理',
            KeyName: 'sheep-man',
            icon: renderIcon(PersonIcon),
          },
        ],
      },
      {
        Name: '場地管理',
        KeyName: 'beverage',
        icon: renderIcon(BusinessSharp),
      },

      // {
      //   Name: '过去增多，未来减少',
      //   KeyName: 'the-past-increases-the-future-recedes',
      // },
    ],
  },
  {
    Name: '系統設定',
    KeyName: 'System-Setting',
    icon: renderIcon(SettingsOutline),
    Children: [
      {
        Name: '後台界面',
        KeyName: 'rat',
      },
    ],
  },
]
