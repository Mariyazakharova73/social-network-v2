import PersonIcon from "@mui/icons-material/Person";
// import NewspaperIcon from "@mui/icons-material/Newspaper";
// import MusicNoteIcon from "@mui/icons-material/MusicNote";
import PeopleIcon from "@mui/icons-material/People";
import ChatIcon from "@mui/icons-material/Chat";

export const MAIN_PATH = "/";
export const PROFILE_PATH = "/profile";
export const PROFILE_ITEM_PATH = "/profile/:id";
export const NEWS_PATH = "/news";
export const MUSIC_PATH = "/music";
export const USERS_PATH = "/users";
export const LOGIN_PATH = "/login";
export const CHAT_PATH = "/chat";
export const menuItems = [
  { name: "Profile", link: PROFILE_PATH },
  { name: "Account", link: "" },
  { name: "Login", link: LOGIN_PATH },
  { name: "LogOut", link: LOGIN_PATH },
];

export const BASE_URL = "https://social-network.samuraijs.com/api/1.0";
export const WS_URL = "wss://social-network.samuraijs.com/handlers/ChatHandler.ashx";

export const sidebarData = [
  { text: "Profile", icon: <PersonIcon />, path: PROFILE_PATH },
  { text: "Chat", icon: <ChatIcon />, path: CHAT_PATH },
  // { text: "News", icon: <NewspaperIcon />, path: NEWS_PATH },
  // { text: "Music", icon: <MusicNoteIcon />, path: MUSIC_PATH },
  { text: "Users", icon: <PeopleIcon />, path: USERS_PATH },
];

export const avatar = "https://mui.com/static/images/avatar/3.jpg";

export const API_KEY = "bc4d7bbf-98e2-4f08-9831-e79b832ca0ac";
