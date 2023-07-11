export interface IDialog {
  id: number;
  name: string;
}

export interface IMessage {
  id: number;
  message: string;
}

export interface IPost {
  id: number;
  message: string;
  likesCount: number;
  date: string;
}

export interface IContacts {
  github: string;
  vk: string;
  facebook: string;
  instagram: string;
  twitter: string;
  website: string;
  youtube: string;
  mainLink: string;
}

export interface IPhotos {
  small: string | null;
  large: string | null;
}

export interface IProfile {
  userId?: number;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  contacts: IContacts;
  photos?: IPhotos;
  aboutMe?: string;
}

export interface IProfileData {
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  contacts: IContacts;
  aboutMe: string;
}

export interface IUser {
  id: number;
  name: string;
  status: string;
  photos?: IPhotos;
  followed: boolean;
}