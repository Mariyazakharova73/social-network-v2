import { IProfile, IProfileData } from "../types/types";
import { instance, IResponse } from "./api";
import { IPhotos } from "./../types/types";

export interface ISavePhotoResponseData {
  photos: IPhotos;
}

export const profileAPI = {
  getProfile(userId: number) {
    return instance.get<IProfile>(`profile/${userId}`).then((res) => {
      return res.data;
    });
  },
  getStatus(userId: number) {
    return instance.get<string>(`profile/status/${userId}`).then((res) => {
      return res.data;
    });
  },
  updateStatus(status: string) {
    return instance.put<IResponse>(`profile/status`, { status: status }).then((res) => {
      return res.data;
    });
  },
  savePhoto(photo: any) {
    const formData = new FormData();
    formData.append("image", photo);
    return instance
      .put<IResponse<ISavePhotoResponseData>>(`profile/photo`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        return res.data;
      });
  },
  saveProfie(profileData: IProfileData) {
    return instance.put<IResponse>(`profile`, profileData).then((res) => {
      return res.data;
    });
  },
};
