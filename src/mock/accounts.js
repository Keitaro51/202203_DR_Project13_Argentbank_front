import { v4 } from 'node-uuid'

export const accounts = [
  {
    id: v4(),
    title: 'Argent Bank Checking (x8349)',
    amount: '$2,082.79',
    description: 'Available Balance',
    transactions: [
      {
        id: v4(),
        date: '1983-06-18T18:25:43-05:00',
        description: 'Golden Sun Bakery',
        amount: 20,
        type: 'Electronic',
        category: 'food',
        notes: 'blabla',
      },
      {
        id: v4(),
        date: '1983-06-18T18:25:43-05:00',
        description: 'Casino',
        amount: 30,
        type: 'Electronic',
        category: 'food',
        notes: 'blabla',
      },
    ],
  },
  {
    id: v4(),
    title: 'Argent Bank Savings (x6712)',
    amount: '$10,928.42',
    description: 'Available Balance',
    transactions: [
      {
        id: v4(),
        date: '1983-06-18T18:25:43-05:00',
        description: 'Golden Sun Bakery',
        amount: 20,
        type: 'Electronic',
        category: 'food',
        notes: 'blabla',
      },
      {
        id: v4(),
        date: '1983-06-18T18:25:43-05:00',
        description: 'Casino',
        amount: 30,
        type: 'Electronic',
        category: 'food',
        notes: 'blabla',
      },
    ],
  },
  {
    id: v4(),
    title: 'Argent Bank Credit Card (x8349)',
    amount: '$184.30',
    description: 'Current Balance',
    transactions: [
      {
        id: v4(),
        date: '1983-06-18T18:25:43-05:00',
        description: 'Golden Sun Bakery',
        amount: 20,
        type: 'Electronic',
        category: 'food',
        notes: 'blabla',
      },
      {
        id: v4(),
        date: '1983-06-18T18:25:43-05:00',
        description: 'Casino',
        amount: 30,
        type: 'Electronic',
        category: 'food',
        notes: 'blabla',
      },
    ],
  },
]
