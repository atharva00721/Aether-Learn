import {
  Tag,
  Users,
  Settings,
  Bookmark,
  SquarePen,
  LayoutGrid,
  BlocksIcon,
  NotebookText,
  CreditCard,
  User
} from "lucide-react";

type Submenu = {
  href: string;
  label: string;
  active: boolean;
};

type Menu = {
  href: string;
  label: string;
  active: boolean;
  icon: any;
  submenus: Submenu[];
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function getMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "/UserDashboard",
          label: "Dashboard",
          active: pathname === "/UserDashboard",
          icon: BlocksIcon,
          submenus: []
        }
      ]
    },
    {
      groupLabel: "Contents",
      menus: [
        {
          href: "/UserDashboard/courses",
          label: "Your Courses",
          active: pathname === "/UserDashboard/courses",
          icon: NotebookText,
          submenus: []
        },
        {
          href: "/UserDashboard/certifications",
          label: "Certifications",
          active: pathname === "/UserDashboard/certifications",
          icon: CreditCard,
          submenus: []
        },
        {
          href: "/UserDashboard/bookmark",
          label: "Bookmark",
          active: pathname === "/UserDashboard/bookmark",
          icon: Bookmark,
          submenus: []
        }
      ]
    },
    {
      groupLabel: "Settings",
      menus: [
        {
          href: "",
          label: "User Info",
          active: pathname === "/user",
          icon: User,
          submenus: []
        },
        {
          href: "",
          label: "Account",
          active: pathname === "/account",
          icon: Settings,
          submenus: []
        }
      ]
    }
  ];
}
