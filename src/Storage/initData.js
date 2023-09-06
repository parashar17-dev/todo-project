export const initData = {
   columns: [
      {
         id: 'column-1',
         title: 'Resources',
         cards: [
            {
               id: Date.now() + Math.random() * 2,
               columnId: 'column-1',
               title: 'Financial and Growth Data',
               image: 'https://wallpapers.com/images/hd/simple-pictures-ib5t2feibf5rphlp.jpg',
               tasks: [],
               labels: [
                  { text: 'finance', color: '#240959' },
                  { text: 'growth', color: '#4fcc25' },
               ],
               desc: 'Contains Description',
               date: '2023-09-09',
            },
            {
               id: Date.now() + Math.random() * 2,
               columnId: 'column-1',
               title: '2017 Goals and KPIs',
               image: '',
               tasks: [],
               labels: [
                  { text: 'Goals', color: '#1ebffa' },
                  { text: 'KPIs', color: '#8da377' },
               ],
               desc: 'Contains Description',
               date: '2023-09-09',
            },
            {
               id: Date.now() + Math.random() * 2,
               columnId: 'column-1',
               title: 'Brand Guide',
               image: '',
               tasks: [],
               labels: [],
               desc: 'Contains Description',
               date: '',
            },
         ],
      },
      {
         id: 'column-2',
         title: 'To-Do',
         cards: [
            {
               id: Date.now() + Math.random() * 2,
               columnId: 'column-2',
               title: 'New Project',
               image: 'https://ied.eu/wp-content/uploads/2015/07/Untitled-11.png',
               tasks: [
                  {
                     id: Date.now() + Math.random() * 2,
                     text: 'Sub1',
                     completed: false,
                  },
                  {
                     id: Date.now() + Math.random() * 2,
                     text: 'Sub2',
                     completed: true,
                  },
               ],
               labels: [
                  { text: 'frontend', color: '#cf61a1' },
                  { text: 'backend', color: '#4fcc25' },
               ],
               desc: 'Contains Description',
               date: '2023-09-09',
            },
            {
               id: Date.now() + Math.random() * 2,
               columnId: 'column-2',
               title: 'Superbowl Add',
               image: '',
               tasks: [
                  {
                     id: Date.now() + Math.random() * 2,
                     text: 'Sub1',
                     completed: true,
                  },
                  {
                     id: Date.now() + Math.random() * 2,
                     text: 'Sub2',
                     completed: true,
                  },
               ],
               labels: [],
               desc: 'Contains Description',
               date: '',
            },
         ],
      },
      {
         id: 'column-3',
         title: 'Doing',
         cards: [
            {
               id: Date.now() + Math.random() * 2,
               columnId: 'column-3',
               title: 'The Taco Truck world Tour',
               image: '',
               tasks: [
                  {
                     id: Date.now() + Math.random() * 2,
                     text: 'Sub1',
                     completed: false,
                  },
                  {
                     id: Date.now() + Math.random() * 2,
                     text: 'Sub2',
                     completed: true,
                  },
               ],
               labels: [
                  { text: 'frontend', color: '#cf61a1' },
                  { text: 'backend', color: '#4fcc25' },
               ],
               desc: 'Contains Description',
               date: '2023-09-09',
            },
            {
               id: Date.now() + Math.random() * 2,
               columnId: 'column-3',
               title: 'A recipe for Success',
               image: 'https://images.unsplash.com/photo-1622737133809-d95047b9e673?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2ltcGxlJTIwd2FsbHBhcGVyfGVufDB8fDB8fHww&w=1000&q=80',
               tasks: [],
               labels: [
                  { text: 'Leadership', color: '#8da377' },
                  { text: 'Success', color: '#9975bd' },
               ],
               desc: 'Contains Description',
               date: '2023-09-09',
            },
            {
               id: Date.now() + Math.random() * 2,
               columnId: 'column-3',
               title: 'Instagram Campaign',
               image: 'https://1000logos.net/wp-content/uploads/2017/02/Instagram-app-logo.jpg',
               tasks: [
                  {
                     id: Date.now() + Math.random() * 2,
                     text: 'Sub1',
                     completed: true,
                  },
                  {
                     id: Date.now() + Math.random() * 2,
                     text: 'Sub2',
                     completed: true,
                  },
               ],
               labels: [{ text: 'Instagram', color: '#240959' }],
               desc: 'Contains Description',
               date: '2023-09-09',
            },
         ],
      },
      {
         id: 'column-4',
         title: 'Done',
         cards: [
            {
               id: Date.now() + Math.random() * 2,
               columnId: 'column-4',
               title: 'Focus Group : Corn Vs Flour Tortillas',
               image: '',
               tasks: [],
               labels: [],
               desc: 'Contains Description',
               date: '',
            },
            {
               id: Date.now() + Math.random() * 2,
               columnId: 'column-4',
               title: 'Update Yelp Listing',
               image: '',
               tasks: [],
               labels: [],
               desc: 'Contains Description',
               date: '2023-09-09',
            },
         ],
      },
   ],
};
