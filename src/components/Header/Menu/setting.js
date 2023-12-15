export const classToggle = {
  open: 'list-vertical-menu-open',
  close: 'list-vertical-menu-close',
};

export const menusHorizontal = [
  {
    title: 'HOME',
  },
  {
    title: 'SHOP',
  },
  {
    title: 'ELEMENTS',
  },
  {
    title: 'PAGES',
    childrens: [
      {
        title: 'My Account',
      },
      {
        title: 'Contact Us',
        childrens: [
          {
            title: (
              <span>
                Contact Us <sup>v1</sup>
              </span>
            ),
            childrens: [
              {
                title: 'My Account',
              },
              {
                title: 'My Account',
              },
            ],
          },
          {
            title: (
              <span>
                Contact Us <sup>v2</sup>
              </span>
            ),
          },
        ],
      },
      {
        title: 'About Us',
      },
      {
        title: 'Order Tracking',
      },
      {
        title: 'FAQ',
      },
      {
        title: 'Site Boxed',
      },
      {
        title: 'Popup Newsletter',
      },
      {
        title: 'Popup Newsletter',
      },
      {
        title: 'Top Promotion',
      },
      {
        title: 'Cookies Law - GDPR',
      },
      {
        title: 'Maintenance Mode',
      },
      {
        title: '404',
      },
    ],
  },
  {
    title: 'VENDORS',
  },
];

export const menusVertical = [
  {
    title: 'Fruits',
    icon: <i className='icon-orange' />,
  },
  {
    title: 'Vegetables',
    icon: <i className='icon-fruit' />,
  },
  {
    title: 'Drinks',
    icon: <i className='icon-healthy-food' />,
    childrens: [
      {
        title: 'Milks & Creams',
      },
      {
        title: 'Organiz Lemon',
      },
      {
        title: 'Organiz Almaverde',
      },
      {
        title: 'Orange Cauliflower',
      },
    ],
  },
  {
    title: 'Butter & Egges',
    icon: <i className='icon-diet' />,
  },
  {
    title: 'Trees',
    icon: <i className='icon-parsley' />,
  },
  {
    title: 'Cakes',
    icon: <i className='icon-fast-food' />,
  },
  {
    title: 'Meats',
    icon: <i className='icon-meat' />,
  },
  {
    title: 'Fish',
    icon: <i className='icon-fish' />,
  },
  {
    title: 'Onions',
    icon: <i className='icon-onion' />,
  },
  {
    title: 'Grapes',
    icon: <i className='icon-raspberry' />,
  },
  {
    title: 'Banana',
    icon: <i className='icon-banana' />,
  },
  {
    title: 'Potatoes',
    icon: <i className='icon-potatoes' />,
  },
];
