import { BiTask, BiMoneyWithdraw, IoAnalytics } from "../assets/icons";

export const leftSideNav = [
  {
    id: 1,
    name: "dashboard",
    desc: "Unique dashboard designs",
    menuItems: [
      {
        id: 1,
        name: "Project",
        icon: <BiTask />,
        link: "/dashboard",
      },
      {
        id: 2,
        name: "Analytics",
        icon: <IoAnalytics />,
        link: "/analytics",
      },
      {
        id: 3,
        name: "Finance",
        icon: <BiMoneyWithdraw />,
      },
      {
        id: 4,
        name: "Crypto",
        icon: <BiMoneyWithdraw />,
      },
    ],
  },
  {
    id: 2,
    name: "applications",
    desc: "Custom made application designs",
    menuItems: [
      {
        id: 1,
        name: "Academy",
        icon: <BiTask />,
      },
      {
        id: 2,
        name: "Calendar",
        icon: <IoAnalytics />,
        link: "/calendar",
      },
      {
        id: 3,
        name: "Chat",
        icon: <BiMoneyWithdraw />,
      },
      {
        id: 4,
        name: "Contacts",
        icon: <BiMoneyWithdraw />,
      },
      {
        id: 5,
        name: "E-Commerce",
        icon: <BiTask />,
      },
      {
        id: 6,
        name: "File Manager",
        icon: <IoAnalytics />,
      },
      {
        id: 7,
        name: "Help Center",
        icon: <BiMoneyWithdraw />,
      },
      {
        id: 8,
        name: "Mail",
        icon: <BiMoneyWithdraw />,
      },
      {
        id: 9,
        name: "Notes",
        icon: <BiTask />,
      },
      {
        id: 10,
        name: "Scrumboard",
        icon: <IoAnalytics />,
      },
      {
        id: 11,
        name: "Tasks",
        icon: <BiMoneyWithdraw />,
      },
      {
        id: 12,
        name: "Profile",
        icon: <BiMoneyWithdraw />,
      },
    ],
  },
];
