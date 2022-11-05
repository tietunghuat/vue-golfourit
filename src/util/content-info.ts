import type { ListItem } from '@/types/List'
import { ref } from 'vue'

export const guestdata = ref<ListItem[]>([
  { id: 1, name: 'GolfBall', equipment: 'White Golf Ball' },
  { id: 2, name: 'Golf Club', equipment: 'Silver Golf Club' },
  { id: 3, name: 'Golf Bag', equipment: 'XX Brand Golf Bag' },
  { id: 4, name: 'Golf Cart', equipment: 'Electric Golf Cart' },
  { id: 5, name: 'Golf Gloves', equipment: 'Nike Brand Golf Gloves' },
])
