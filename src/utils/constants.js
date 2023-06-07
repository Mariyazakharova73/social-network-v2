import MailIcon from "@mui/icons-material/Mail";
import PersonIcon from "@mui/icons-material/Person";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import PeopleIcon from "@mui/icons-material/People";

export const PROFILE_PATH = "/profile/*";
export const PROFILE_ITEM_PATH = "/profile/:id";
export const DIALOGS_PATH = "/dialogs/*";
export const DIALOGS_ITEM_PATH = "/dialogs/:id";
export const NEWS_PATH = "/news";
export const MUSIC_PATH = "/music";
export const USERS_PATH = "/users";
export const menuItems = ["Profile", "Account", "Dashboard", "Logout"];

export const BASE_URL = "https://social-network.samuraijs.com/api/1.0";

export const sidebarData = [
  { text: "Profile", icon: <PersonIcon />, path: PROFILE_PATH },
  { text: "Messages", icon: <MailIcon />, path: DIALOGS_PATH },
  { text: "News", icon: <NewspaperIcon />, path: NEWS_PATH },
  { text: "Music", icon: <MusicNoteIcon />, path: MUSIC_PATH },
  { text: "Users", icon: <PeopleIcon />, path: USERS_PATH },
];

export const avatar = "https://mui.com/static/images/avatar/3.jpg";
